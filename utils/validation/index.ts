import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required !!')
    .email('Invalid email!!'),
  password: yup
    .string()
    .required('Password is required !!')
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required !!')
    .email('Invalid email!!'),
  password: yup
    .string()
    .required('Password is required !!')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{5,}$/, 
      'Password must be 5 char, contains one lowercase letter, one uppercase letter, one number, and special character')
    .test('no-spaces', 'Password must not contain spaces', (value) => !value?.includes(' ')),
});
