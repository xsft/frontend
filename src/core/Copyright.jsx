import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }} {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/xsft/frontend">
        XSFT
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
