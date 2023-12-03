import { User } from '../types/user';

const users: User[] = [];

export const getUser = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const createUser = (user: User): User => {
  users.push(user);
  return user;
};

export const updateUser = (id: string, updatedUser: Partial<User>): User | undefined => {
  const user = getUser(id);
  if (user) {
    Object.assign(user, updatedUser);
  }
  return user;
};

export const deleteUser = (id: string): boolean => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
};