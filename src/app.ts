import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'CRUD Mongo Node API is running' });
});

app.use('/api/users', userRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
