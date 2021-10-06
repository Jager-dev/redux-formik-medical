import React from 'react';
import avatar from "../../../../react-redux-formik-medical/src/components/Layout/avatar.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={avatar} alt="" className="avatar"/>
    </header>
  );
};

export default Header;