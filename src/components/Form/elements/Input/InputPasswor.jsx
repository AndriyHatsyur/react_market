import React, { useState } from "react";
import T from 'prop-types'
import s from "./input.module.css";
import { Icon } from "../../../Icons/Icon";
import {Input} from './Input'


export const InputPassword = ({ label, ...props }) => {
  const [isShow, setShow] = useState(false);

  const type = isShow ? "text" : "password";

  return (
    <div className={s.passwordInput}>
     <Input type={type} label={label} {...props}/>
      <span className={s.icon} onClick={() => setShow(!isShow)}>
        <Icon name="showPassword" />
      </span>
    </div>
  );
};

InputPassword.propTypes = {
  label: T.string.isRequired,
}
