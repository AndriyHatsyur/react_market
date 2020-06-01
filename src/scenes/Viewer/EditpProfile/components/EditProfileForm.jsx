import React from 'react'
import { Input } from './../../../../components/Form/elements/Input/Input'
import { Formik } from 'formik'
import s from './../editProfile.module.css'
import { Submit } from './../../../../components/Form/elements/Submit/Submit'
import { InputFile } from './../../../../components/Form/elements/Input/InputFile'

export const EditProfileForm = ({
  formikProps,
  isError,
  error,
  avatar,
  imgChangeHandler,
}) => {
  return (
    <div className={s.container}>
      <div className={s.header}>Edit Profile</div>
      {isError && <div className={s.errorApi}>{error}</div>}
      {avatar ? (
        <img className={s.photo} src={avatar} alt="Avatar" />
      ) : (
        <div className={s.photo}></div>
      )}
      <Formik {...formikProps}>
        <form className={s.form}>
          <InputFile
            name="avatar_img"
            label="Edit Photo"
            labelStyle={s.labelPhoto}
            onChange={imgChangeHandler}
          />
          <Input name="fullName" label="full name" />
          <Input
            name="phone"
            label="phone number"
            placeholder="+380"
          />
          <div className={s.submit}>
            <Submit>Save</Submit>
          </div>
        </form>
      </Formik>
    </div>
  )
}
