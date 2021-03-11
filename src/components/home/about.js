/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Row, Col } from 'antd';

import icon1 from "../common/images/gamepad.png"
import icon2 from "../common/images/flat-design1.png"
import icon3 from "../common/images/hight-performance.png"
import {Animated} from "react-animated-css";

const items = [
  {
    key: '1',
    icon: <img src={icon1} />,
    title: 'GAMIFICATION',
    content: 'Intergrate both learning and playing in order to change the way student learn , make them more intersting with the subject',
  },
  {
    key: '2',
    icon: <img src={icon2} />,
    title: 'FLAT DESIGN',
    content: 'Optimization design , compatible with almost every device , user-friedly , let users have the best experience',
  },
  {
    key: '3',
    icon: <img src={icon3} />,
    title: 'HIGH PERFORMANCE',
    content: 'High access rate , Fast speed , bring the best experience for students',
  },
]

function AppAbout() {
  return (
 <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Want to be <a style={{ color: '#FF9671'}}>&quot; Trạng Nguyên 	&quot;</a> ?</h2>
          <p style={{fontStyle:'italic'}}>" Play hard , Study harder "</p>
        </div>
        <div className="contentHolder">
          <p style={{fontStyle: 'center', fontSize: 20}}>
            <a style={{fontSize:20, color: '#C34A36'}}>VL-LEGEND</a> mission is to make school more relevant and meaningful by creating playful and collaborative learning experiences that teach the whole students.
          </p>
        </div>
        <Animated animationIn="lightSpeedIn" animationOut="fadeOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3 style={{fontSize:20, color: '#008E9B'}}>{item.title}</h3>
                  <p style={{fontStyle: 'justify'}}>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        </Animated> 
      </div>
    </div>
  );
}

export default AppAbout;