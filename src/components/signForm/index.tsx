import { Input } from '../atoms/input';
import { Button } from '../atoms/button';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../../schemas/signIn';
import { useUserContext } from '../../hooks/useUserContext';
import { SignInParams } from '../../context/userContext';
import { useFormResolver } from '../../hooks/useFormResolver';

export const SignForm = () => {
  const { signIn } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormResolver<SignInParams>(signInSchema);

  const onSubmit: SubmitHandler<SignInParams> = useCallback(
    async (data) => {
      await signIn(data);
    },
    [signIn]
  );

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
