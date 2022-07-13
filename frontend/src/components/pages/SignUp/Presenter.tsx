import React from 'react'
import { Copyright } from '../../uiParts/Copyright';
import { InputText } from '../../uiParts/InputText';
import { SubmitButton } from '../../uiParts/SubmitButton';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

type Form =  {
  name: string,
  email: string,
  password: string,
}

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  formData: Form
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Presenter: React.FC<Props> = (props: Props) => {
  const {
    handleSubmit,
    formData,
    onChange,
  } = props

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputText
                required
                name="name"
                label="name"
                value={formData.name}
                autoFocus
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputText
                required
                name='email'
                label='email'
                value={formData.email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputText
                required
                name="password"
                label="password"
                type="password"
                value={formData.password}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <SubmitButton title="Sign Up" />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}