/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { BackTop, Row, Col } from 'antd';

import logo from './images/logo Fix 1.png'
import logoVLU from './images/logo-vlu.png'

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <Row>
          <Col span={6}>
            <a href="https://www.vanlanguni.edu.vn/" target="blank">
              <img className="logo-vlu" src={logoVLU} />
            </a>
          </Col>
          <Col span={12} style={{ justifyContent: "center" }}>
            <div className="logo">
              <a href="hero"> <img src={logo} /> </a>
            </div>
          </Col>
          <Col span={6} style={{ float: "right" }}>
            <p>SOCIALS</p>
            <ul className="socials">
            <li><a href="https://www.youtube.com/user/truongdhvanlang/" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/truongdaihocvanlang" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.youtube.com/user/truongdhvanlang/" target="_blank"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </Col>
          <Col>
            <Row>
              <ul className="address">
                <li><p>Trụ sở: 45 Nguyễn Khắc Nhu, P. Cô Giang, Q.1, TP. HCM</p></li>
                <li><p>Cơ sở 2: 233A Phan Văn Trị, P.11, Q. Bình Thạnh, TP. HCM</p></li>
                <li><p>Cơ sở 3: 69/68 Đặng Thùy Trâm, P. 13, Q. Bình Thạnh, TP. HCM</p></li>
                <li><p>Ký túc xá: 160/63A-B Phan Huy Ích, P. 12, Q. Gò Vấp, TP. HCM</p></li>
              </ul>
            </Row>
          </Col>
          <Col >
            {/* <Row>
              <ul className="category">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#cri">Critial</a></li>
                <li><a href="#char">Character</a> </li>
              </ul>
            </Row> */}
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