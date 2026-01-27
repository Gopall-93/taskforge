jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashedPassword'),
  compare: jest.fn().mockResolvedValue(true),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: any;
  let jwtService: any;

  beforeEach(async () => {
    usersService = {
      findByEmail: jest.fn(),
      createUser: jest.fn(),
    };

    jwtService = {
      sign: jest.fn().mockReturnValue('token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should register user', async () => {
    usersService.findByEmail.mockResolvedValue(null);
    usersService.createUser.mockResolvedValue({
      id: 1,
      name: 'John',
      email: 'john@mail.com',
      password: 'hashedPassword',
      role: 'ADMIN',
    });

    const result = await service.register({
      name: 'John',
      email: 'john@mail.com',
      password: '123456',
      role: 'ADMIN',
    });

    expect(result.email).toBe('john@mail.com');
    expect(result.password).toBeUndefined(); // password removed
  });

  it('should login user and return token', async () => {
    usersService.findByEmail.mockResolvedValue({
      id: 1,
      name: 'John',
      email: 'john@mail.com',
      password: 'hashedPassword',
      role: 'ADMIN',
    });

    const res = await service.login('john@mail.com', '123456');

    expect(res.accessToken).toBe('token');
    expect(res.user.email).toBe('john@mail.com');
    expect(jwtService.sign).toHaveBeenCalled();
  });
});
