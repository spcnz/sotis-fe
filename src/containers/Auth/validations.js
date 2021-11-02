import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Not valid email address").required("Email is required field").max(255),
    password: Yup.string().required("Password is a required field").min(6, "Password must be at least 6 characters")
  });