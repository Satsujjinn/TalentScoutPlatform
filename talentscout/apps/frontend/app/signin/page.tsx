'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={(e) => { e.preventDefault(); signIn('credentials', { email, password }); }} className="p-4">
      <input className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input className="border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Sign in</button>
    </form>
  );
}
