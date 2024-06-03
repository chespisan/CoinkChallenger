import { RegisterEntity, UserEntity } from './auth.entity';

export interface AuthRepository {
  register(data: RegisterEntity): Promise<UserEntity>;
}
