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
    content: 'Kết hợp cả hai hình thức học với nhau, nhằm giúp người học cải thiện và hứng thú hơn với môn học.',
  },
  {
    key: '2',
    icon: <img src={icon2} />,
    title: 'FLAT DESIGN',
    content: 'Thiết kế tối ưu , tương thích với mọi loại thiết bị , phù hợp cho người học trải nghiệm mọi lúc mọi nơi.',
  },
  {
    key: '3',
    icon: <img src={icon3} />,
    title: 'HIGH PERFORMANCE',
    content: 'Lượng truy cập đồng loạt cao, tốc độ truy cập mượt mà mang lại trải nghiệm tốt nhất cho người học.',
  },
]

function AppAbout() {
  return (
 <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Học mà chơi - Chơi mà học</p>
        </div>
        <div className="contentHolder">
          <p>
            
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
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
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