import * as yup from 'yup';

yup.setLocale({
  string: {
    email: 'O email precisa ser valido',
  },
  mixed: {
    required: 'Campo obrigatório',
    default: 'Não é válido',
  },
  number: {
    min: 'Deve ser maior que ${min}',
  },
});

export default yup;
