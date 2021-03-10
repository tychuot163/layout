import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {Animated} from "react-animated-css";


const Page = ({ offset, caption, first, second, third, gradient, onClick }) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header-faq" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 40 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
        <p>{third}</p>

      </span>
    </ParallaxLayer>
  </React.Fragment>
)

class AppFaq extends React.Component {
  scroll = (to) => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <Animated animationIn="fadeInLeft" animationOut="fadeOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
      <div id="faq" className="block-faq FaQBlock">
        <Parallax className="container" ref="parallax" pages={5} horizontal scrolling={false}>
          <Page offset={0} gradient="pink" caption='Bring good experience'
            first='- E-learning lecture become more interesting'
            second="- Apply gamification to test student knowledge"
            third="- Revise previously content before start learning"
            onClick={() => this.scroll(1)} />
          <Page offset={1} gradient="teal" caption="Comfortable learning environment"
            first="- Provide an Effective , Comfortable learning environment , no pressure"
            second="- Improve student ability to receptive new lecture"
            third="- Improve student brain-storming and solving case-study"
            onClick={() => this.scroll(2)} />
          <Page offset={2} gradient="pacific-dream" caption="Quickly Respond"
            first="- Functions and features respond fast to user interaction"
            second="- Quickly respond at use time"
            onClick={() => this.scroll(3)} />
          <Page offset={3} gradient="ibiza-sunset" caption="Change student behaviors" 
          first="- Score , Task , Quest , challenge , ranking" 
          second="- Change student point of view toward learning" 
          onClick={() => this.scroll(4)} />
          <Page offset={4} gradient="tomato" caption="Apply for most forms of training" 
          first="- Variety form of tranning" 
          second="- Onboarding , soft skill , integration tranning"
          third ="- Tranning high specialize skill from products, customer services" 
          onClick={() => this.scroll(0)} />
        </Parallax>
      </div>
      </Animated>
    )
  }
}

export default AppFaq;