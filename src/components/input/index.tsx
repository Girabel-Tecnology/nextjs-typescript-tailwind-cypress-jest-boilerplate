import React, {ChangeEventHandler} from "react";
import styles from './index.module.css'

interface DefaultInputProps {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input: React.FC<DefaultInputProps> = ({value, onChange}) => {
  return <div className={'flex flex-col'}>
    <input className={styles.defaultInput} value={value} onChange={(value) => onChange(value)}/>
  </div>
}
