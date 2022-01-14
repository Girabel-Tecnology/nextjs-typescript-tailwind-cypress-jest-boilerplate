import yup from './index';

// TODO pensar um jeito melhor de usar as schemas
export const signInSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();
