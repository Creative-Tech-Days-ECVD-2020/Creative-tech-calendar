import React from 'react';
import Header from '../../components/header';
import { MainContent }  from './style';

const OrangeLayout = WrappedComponent => {
  const Layout = () => (
    <>
      <Header/>
      <MainContent>
        <WrappedComponent/>
      </MainContent>
    </>
  );
  return Layout;
};

export default OrangeLayout;
