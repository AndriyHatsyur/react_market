import React from "react";
import {Link} from 'react-router-dom'
import s from "./formFooter.module.css";

export const FormFooter = ({text, link, linkText}) => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        {text}
        <Link to={link} className={s.link}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};
