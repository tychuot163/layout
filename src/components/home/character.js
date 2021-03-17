/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import {Animated} from "react-animated-css";

const steps = [
  {
    title: "Sinh đồ",
    description:
      "-The lowest grade in the rank , inspire by farmer style , the word “Sinh Đồ” means student in ancient time , they are mostly peasants.",
    imageUrl:
      "https://i.imgur.com/ua1NlHO.png",
    isActive: false
  },
  {
    title: "Tú tài",
    description:
      "-The next level after “Sinh Đồ” , the word “Tú Tài” mean a student who has surpass the Academic test.",
    imageUrl:
    "https://i.imgur.com/iFR6R6l.png",
    isActive: false
  },
  {
    title: "Học sĩ",
    description:
      "-The next level after “Học Sĩ” , the word “Phó Bảng” is a medium rank officer , they surpass the test and successfully get promoted.",
    imageUrl:
    "https://i.imgur.com/7B5r0UC.png",
    isActive: false
  },

  {
    title: "Phó bảng",
    description:
      "-The next level after “Học Sĩ” , the word “Phó Bảng” is a medium rank officer , they surpass the test and successfully get promoted.",
    imageUrl:
    "https://i.imgur.com/V246h8W.png",
    isActive: false
  },
  {
    title: "Trạng nguyên",
    description:
      "-The highest level  “Trạng Nguyên” mean someone who has the highest score after the academic test , they got promoted by the Ancient Government to become High rank officer later.",
    imageUrl:
    "https://i.imgur.com/8YfghFv.png",
    isActive: false
  },
];

function AppCharacter() {
  const [index, setIndex] = useState(0);
  const prev = useCallback(
    () =>
      setIndex(state =>
        state === 0 ? steps.length - 1 : (state - 1) % steps.length
      ),
    []
  );
  const next = useCallback(
    () => setIndex(state => (state + 1) % steps.length),
    []
  );

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 }
  });

  return (
    <div id="char" className="block characterBlock">
      <div className="container">
        <ul className="step-list">
          {transitions.map(({ item, key }) => {
            let step = steps[item];

            for (let i = 0; i < steps.length; i++) {
              steps[i].isActive = false;
            }

            step.isActive = true;

            return (
              <animated.li className="step-item" key={key}>
                <div className="step-image">
                  <img src={step.imageUrl} />
                </div>
                <div className="step-content">
                  <h2>
                    {step.title}
                  </h2>
                  <p>{step.description}</p>
                </div>
              </animated.li>
            );
          })}
        </ul>

        <ul className="step-nav">
          {steps.map((step, index) => {
            return (
              <li className={`nav-item ${step.isActive ? "active" : ""}`}>
                <button
                  type="button"
                  className="nav-button"
                  onClick={() => setIndex(index)}
                >
                  <img src={step.imageUrl} className="nav-image" />
                  <p>{`${step.title}`}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default AppCharacter

