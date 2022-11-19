import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Form from './auth/core/Form';
import SignInSide from './auth/sign-in/SignInSide';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Form>
        <SignInSide />
      </Form>
    </ThemeProvider>
  );
}

export default App;
