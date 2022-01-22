import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useFormResolver = <T>(schema: any, options?: {}) => {
  return useForm<T>({
    ...options,
    resolver: yupResolver(schema),
    mode: 'all',
  });
};
