// TownSquare/src/utils/validate.ts

type User = {
  username: string;
  email: string;
  password: string;
};

const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateUsername = (username: string): boolean => {
  const re = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
  return re.test(String(username));
};

const validatePassword = (password: string): boolean => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return re.test(String(password));
};

const validateUser = (user: User): boolean => {
  return validateEmail(user.email) && validateUsername(user.username) && validatePassword(user.password);
};

export { validateEmail, validateUsername, validatePassword, validateUser };