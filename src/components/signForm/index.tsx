import { Input } from '../input';
import { Button } from '../button';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../../schemas/signIn';

type Inputs = {
  email: string;
  password: string;
};

export const SignForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
    alert('a');
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-4'}>
      <Input type={'email'} label={'E-mail'} errors={errors.email} register={register('email')} />

      <Input
        type={'password'}
        label={'Senha'}
        errors={errors.password}
        register={register('password')}
      />

      <div>
        <Button type={'submit'}>Cadastrar</Button>
      </div>
    </form>
  );
};
