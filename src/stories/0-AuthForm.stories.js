import React from 'react'
import { LoginFormComponent } from '../components/Form/LoginForm/LoginFormComponent'
import { RegisterFormComponent } from '../components/Form/RegisterForm/RegisterFormComponent'
import { EditProfileForm } from './../scenes/Viewer/EditpProfile/components/EditProfileForm'

export default {
  title: 'AuthForm',
}

export const LoginForm = () => <LoginFormComponent />

export const RegisterForm = () => <RegisterFormComponent />

export const ProfileForm = () => <EditProfileForm />
