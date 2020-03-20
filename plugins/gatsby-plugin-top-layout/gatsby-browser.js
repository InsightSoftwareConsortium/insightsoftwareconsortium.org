/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import TopLayout from './TopLayout';

require('typeface-roboto');

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
