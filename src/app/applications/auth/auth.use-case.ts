import { AuthRepository, RegisterEntity, UserEntity } from 'src/app/domain';

export class AuthUseCase implements AuthRepository {
  constructor(private readonly authRepository: AuthRepository) {}

  async register(data: RegisterEntity): Promise<UserEntity> {
    return this.authRepository.register(data);
  }
}
