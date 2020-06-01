import * as Yup from 'yup'

export const validators = {
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  maxLength: (length) => {
    return Yup.string()
      .max(length, `Must be ${length} characters or less`)
      .required('Required')
  },
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),

  required: Yup.string().required('This field Required'),

  phone: Yup.string().matches(
    /^\+(?:[0-9] ?){11}[0-9]$/,
    'Phone number is not valid',
  ),
}
