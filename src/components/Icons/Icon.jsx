import React from 'react';
import T from 'prop-types';
import { IconConfig } from './IconConfig';

export const Icon = ({ name, fill }) => {
  const IConfig = IconConfig[name];
  return <IConfig fill={fill}/>;
};

Icon.propTypes = {
  name: T.string.isRequired,
};
