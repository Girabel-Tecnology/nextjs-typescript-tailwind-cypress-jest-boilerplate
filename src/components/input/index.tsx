import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import styles from './index.module.css';
import { FieldErrors } from 'react-hook-form';

interface DefaultInputProps {
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  errors?: FieldErrors;
  register: any;
}

export const Input: React.FC<DefaultInputProps> = ({
  value,
  onChange = (value: any) => null,
  type,
  label,
  errors,
  register,
}) => {
  return (
    <div className={'flex flex-col'}>
      <strong>{label}</strong>
      <input
        className={styles.defaultInput}
        type={type}
        value={value}
        onChange={(value) => onChange(value)}
        {...register}
      />
      <span className={'text-red-700'}>{errors && errors.message}</span>
    </div>
  );
};
