import React from 'react';
import Header from '../../components/header';
import { MainContent }  from './style';

const OrangeLayout = WrappedComponent => {
  const Layout = () => (
    <>
      <Header color="orange"/>
      <MainContent>
        <WrappedComponent/>
      </MainContent>
    </>
  );
  return Layout;
};

export default OrangeLayout;
