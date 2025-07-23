import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import authRoutes from './routes/auth';
import matchesRoutes from './routes/matches';
import messagesRoutes from './routes/messages';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/matches', matchesRoutes);
app.use('/messages', messagesRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('socket connected');
  socket.on('chat:message', (msg) => {
    io.emit('chat:message', msg);
  });
});

server.listen(4000, () => {
  console.log('Backend running on http://localhost:4000');
});
