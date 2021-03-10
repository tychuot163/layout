import React from 'react';
import { useSpring, a } from 'react-spring'
// import create from 'zustand'
import 'prismjs'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/themes/prism-okaidia.css'

// const [useStore] = create(set => ({
//   count: 1,
//   inc: () => set(state => ({ count: state.count + 1 })),
//   dec: () => set(state => ({ count: state.count - 1 }))
// }))


// function Counter() {
//   const { count, inc, dec } = useStore()
//   return (
//     <div class="counter">
//       <span>LET'S GO</span>
//     </div>
//   )
// }


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 240}px,${y / 240}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 200}px,${y / 200}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 160}px,${y / 160}px,0)`
const trans4 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`
const trans5 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`
// const trans6 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
const trans7 = (x, y) => `translate3d(${x / 120}px,${y / 120}px,0)`

function AppHero() {
  const [props, set] = useSpring(() => ({ xy: [0, 0] }))
  return (
    
      <div id="hero" className=" block hero">
        <div class="main" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <a.div class="bg" style={{ transform: props.xy.interpolate(trans1) }} />
          <div class="ground" />
          <a.div class="male" style={{ transform: props.xy.interpolate(trans4) }} />
          <a.div class="female" style={{ transform: props.xy.interpolate(trans7) }} />
          <a.div class="leaves1" style={{ transform: props.xy.interpolate(trans5) }} />
          {/* <span class="header-left"><span style={{ color: 'darkred' }}>VL-</span>LEGEND</span> */}
        </div>
      </div>
  );
}

export default AppHero;