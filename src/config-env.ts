import * as dotenv from 'dotenv';
import { resolve } from 'path';

const envFile = (process.env.NODE_ENV || 'dev') + '.env';
dotenv.config({ path: resolve(__dirname, '..', '.env', envFile) });