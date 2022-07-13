import React from 'react'
import TextField from '@mui/material/TextField';


type FormProps = {
  required?: boolean
  name: string
  label: string
  value: string
  type?: string
  autoFocus?: boolean
  onChange?: (e: any) => void
}
export const InputText: React.FC<FormProps> = ({
  required,
  name,
  label,
  value,
  type = 'text',
  autoFocus = false,
  onChange
}) => {
  return (
    <TextField
      margin="normal"
      required={required}
      fullWidth
      label={label}
      name={name}
      value={value}
      type={type}
      autoFocus={autoFocus}
      onChange={onChange}
    />
  )
}
