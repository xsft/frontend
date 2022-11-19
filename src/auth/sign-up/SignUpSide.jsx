import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Copyright from '../../core/Copyright';

export default function SignUpSide() {
  const [form, setForm] = useState({
    login: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log({
      login: form.login,
      password: form.password,
      repeatPassword: form.repeatPassword,
    });
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          id="login"
          label="Login"
          name="login"
          autoComplete="login"
          type="login"
          autoFocus
        />
        <TextField
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          name="repeatPassword"
          label="Repeat password"
          type="password"
          id="repeatPassword"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid item>
            <Link href="/sign-in" variant="body2">
              Have an account? Sign in
            </Link>
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Box>
  );
}
