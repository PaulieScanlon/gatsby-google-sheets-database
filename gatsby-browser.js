import React from 'react';

import PageElement from './src/components/page-element';

import './src/styles/global.css';

export const wrapPageElement = ({ element }) => {
  return <PageElement>{element}</PageElement>;
};
