import { User } from '../types/user';

class AuthService {
  private static instance: AuthService;
  private currentUser: User | null = null;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(email: string, password: string): Promise<User | null> {
    // TODO: Implement login logic with API call
    return this.currentUser;
  }

  public async signup(email: string, password: string, name: string): Promise<User | null> {
    // TODO: Implement registration logic with API call
    return this.currentUser;
  }

  public async logout(): Promise<void> {
    // TODO: Implement logout logic with API call
    this.currentUser = null;
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }
}

export default AuthService.getInstance();