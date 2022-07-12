import React from 'react'
import Box from '@mui/material/Box';
import { InputText } from '../../uiParts/InputText';
import { SubmitButton } from '../../uiParts/SubmitButton';
import Typography from '@mui/material/Typography';
import { Grid, Theme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Copyright } from '../../uiParts/Copyright';


type Form =  {
  email: string,
  password: string,
}

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  formData: Form
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Presenter = (props: Props) => {
  const {
    handleSubmit,
    formData,
    onChange
  } = props;
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputText
            required
            name='email'
            label='email'
            value={formData.email}
            autoFocus
            onChange={onChange}
          />
          <InputText
            required
            name="password"
            label="password"
            value={formData.password}
            onChange={onChange}
          />
          <SubmitButton title="Sign in" />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}