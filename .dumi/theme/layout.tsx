import React from 'react';
import Layout from 'dumi-theme-default/src/layout';
import './layout.scss';

export default ({ children, ...props }) => <Layout {...(props as any)}>{children}</Layout>;
