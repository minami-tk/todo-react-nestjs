import { Link } from '@mui/material'
import React from 'react'

type Props = {
  href: string
}
export const HomeButton = (props: Props) => {
  const { href } = props
  return (
    <Link href={href} variant="inherit" underline='none' color='inherit'>
      Todo
    </Link>
  )
}