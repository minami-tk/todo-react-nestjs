import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link } from '@mui/material'

type Props = {
  href: string
  title: string
  onClick?: () => void
}
export const RightButton = (props: Props) => {
  const { href, title, onClick } = props

  return (
    <Link href={href} variant="inherit" underline='none' color='inherit'>
      <Button color="inherit" onClick={onClick}>{title}</Button>
    </Link>
    
  )
}
