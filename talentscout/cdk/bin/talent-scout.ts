#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { TalentScoutStack } from '../lib/talent-scout-stack';

const app = new App();
new TalentScoutStack(app, 'TalentScoutStack');
