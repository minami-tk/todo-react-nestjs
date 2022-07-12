import React from 'react'
import Button from '@mui/material/Button';

type ButtonProps = {
  title: string
}
export const SubmitButton: React.FC<ButtonProps> = ({
  title
}) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {title}
    </Button>
  )
}