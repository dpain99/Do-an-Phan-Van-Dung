// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { dispatch } from 'src/common/redux/store';
import { PATH_AUTH, PATH_DASHBOARD } from 'src/common/routes/paths';
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField
} from '../../../common/components/hook-form';
import Iconify from '../../../common/components/Iconify';
import { defaultValues } from '../constants';
import { useAuthlogin } from '../hook/useLogin';
import { IFormLoginValuesProps } from '../interface/interface';
import { setShowPassword, showPasswordSelector, setEmail } from '../login.slice';
import { LoginSchema } from '../schema/login.schema';
import { Link } from 'react-router-dom';
import RHFTextFieldLogin from 'src/common/components/hook-form/RHFTextFieldLogin';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const showPassword = useSelector(showPasswordSelector);

  const methods = useForm<IFormLoginValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3}>
        <RHFTextFieldLogin name="email" label="Email address" />
        <RHFTextFieldLogin
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => dispatch(setShowPassword(!showPassword))}
                  edge="end"
                >
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <RHFCheckbox name="remember" label="Remember me" />
        <Typography sx={{ fontSize: '13px' }}>
          <Link to={PATH_AUTH.forgotPassword}>Forgot Password</Link>
        </Typography>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Login
      </LoadingButton>

      <Stack direction="row" justifyContent="center" padding={3}>
        <Typography sx={{ fontSize: '13px' }}>
          <Link to={PATH_AUTH.resetPassword}>Reset Password</Link>
        </Typography>
      </Stack>
    </FormProvider>
  );
}
