/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { BackTop, Row, Col } from 'antd';

import logo from './images/completion.png'

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <Row>
          <Col span={6}>

          </Col>
          <Col span={12} style={{ justifyContent: "center" }}>
            <div className="logo">
              <a href="hero"> <img src={logo} /> </a>
            </div>
          </Col>
          <Col span={6} style={{ float: "right" }}>
            <p>Socials</p>
            <ul className="socials">
              <li><a href="https://www.facebook.com/truongdaihocvanlang" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.youtube.com/user/truongdhvanlang/" target="_blank"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </Col>
        </Row>
        <div className="copyright">Copyright &copy; 2021 VL LEGEND</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;