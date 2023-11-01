import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/prismaClient';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // This function is called when the prisma module is initialized.
  async onModuleInit() {
    // And this connects to the database.
    await this.$connect();
  }

  // Enables shutdown hooks for the application.
  async enableShutdownHooks(app: INestApplication) {
    // Listen for the 'beforeExit' event
    process.on('beforeExit', async () => {
      // Close the application
      await app.close();
    });
  }
}
