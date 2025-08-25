const passwordRegex = {
  length: /.{8,}/,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  special: /[^A-Za-z0-9]/,
};

const validatePassword = (password: string) => {
  return {
    length: passwordRegex.length.test(password),
    uppercase: passwordRegex.uppercase.test(password),
    lowercase: passwordRegex.lowercase.test(password),
    number: passwordRegex.number.test(password),
    special: passwordRegex.special.test(password),
  };
};

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.toLowerCase());
}

export const helpers = { validatePassword, isValidEmail };
