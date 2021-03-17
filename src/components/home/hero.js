import React from 'react';
import { useSpring, a } from 'react-spring'
import 'prismjs'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/themes/prism-okaidia.css'

function Counter() {
  return (
    <div class="counter">
      <a
      class="enterNameButton vertical-center ">PLAY GAME</a>
    </div>
  )
}

const calc = (x, y) => [x - window.innerWidth / 3, y - window.innerHeight / 3]
const trans1 = (x, y) => `translate3d(${x / 240}px,${y / 240}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 200}px,${y / 200}px,0)`
const trans3 = (x, y) => `translate3d(${x / 160}px,${y / 160}px,0)`
const trans4 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`
const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
const trans6 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
const trans7 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`

function AppHero() {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }))
  return (
    
      <div id="hero" className=" block hero">
        <div class="main" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <a.div class="bg" style={{ transform: props.xy.interpolate(trans1) }} />
          <div class="ground" />
           <a.div class="code" style={{ transform: props.xy.interpolate(trans3) }}>
        <div class="code-container">
          <Counter />
        </div>
      </a.div>
          <a.div class="male" style={{ transform: props.xy.interpolate(trans4) }} />
          <a.div class="female" style={{ transform: props.xy.interpolate(trans7) }} />
          <a.div class="leaves1" style={{ transform: props.xy.interpolate(trans5) }} />
        </div>
      </div>
  );
}

export default AppHero;