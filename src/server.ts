import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';
import logger from './utils/logger';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

const startServer = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  const message = error instanceof Error ? error.message : 'Unknown startup error';
  logger.error(`Startup error: ${message}`);
  process.exit(1);
});
