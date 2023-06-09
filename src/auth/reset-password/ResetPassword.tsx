import { Button, Container, Typography } from '@mui/material';
import Page from 'src/common/components/Page';
import LogoOnlyLayout from 'src/common/layouts/LogoOnlyLayout';
import { PATH_AUTH } from 'src/common/routes/paths';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import ResetPassWordForm from './components/ResetPassWordForm';

export default function ResetPassword() {
  return (
    <Page title="Reset Password">
      <LogoOnlyLayout />

      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Reset your password
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 5 }}>
            Please enter your new password below
          </Typography>

          <ResetPassWordForm />
        </ContentStyle>
      </Container>
    </Page>
  );
}

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));
