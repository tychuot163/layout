/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

import logo from './images/completion.png'
import logo2 from './images/logo Fix 1.png'

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
        <a href="hero"> <img src={logo2}  /> </a>
          
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="HOME" />
            <Link href="#about" title="ABOUT" />
            <Link href="#gar" title="GALLERY" />
            <Link href="#faq" title="CRITERIA" />
            <Link href="#works" title="TUTORIAL" />
            <Link href="#char" title="CHARACTER" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="HOME" />
              <Link href="#about" title="ABOUT" />
              <Link href="#gar" title="GALLERY" />
              <Link href="#faq" title="CRITERIA" />
              <Link href="#works" title="TUTORIAL" />
              <Link href="#char" title="CHARACTER" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;