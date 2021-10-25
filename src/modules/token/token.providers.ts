import { Connection } from 'mongoose';
import { TokenSchema } from '../../schemas/token.schema';

export const tokenProviders = [
  {
    provide: 'TOKEN_MODEL',
    useFactory: (connection: Connection) => connection.model('Token', TokenSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
