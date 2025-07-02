export type DummyUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const DUMMY_USERS: DummyUser[] = [
  {
    email: 'demo@example.com',
    password: 'password123',
    firstName: 'Demo',
    lastName: 'User',
  },
  {
    email: 'test@user.com',
    password: 'testpass',
    firstName: 'Test',
    lastName: 'User',
  },
];
