import fastify from 'fastify';
import { appRouter } from './http/routes.ts';

export const app = fastify();

app.register(appRouter);