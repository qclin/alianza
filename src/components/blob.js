import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const AnimFeTurbulence = animated("feTurbulence")
const AnimFeDisplacementMap = animated("feDisplacementMap")

function Blob() {
  const [open, toggle] = useState(false)
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: {
      scale: 10,
      opacity: 0,
      transform: "scale(0.9)",
      freq: "0.0175, 0.0",
    },
    to: { scale: 150, opacity: 1, transform: "scale(1)", freq: "0.0, 0.0" },
    config: { duration: 3000 },
  })

  return (
    <div onClick={() => toggle(!open)}>
      <animated.svg style={{ transform, opacity }} viewBox="0 0 1209 954">
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="1"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={scale}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <animated.path
            d="M280.548759,66.2232373 C589.613279,-36.6391896 1112.75846,-68.2284454 1181.60862,343.956005 C1250.45953,756.141245 1189.8633,837.517018 993.693204,813.407586 C506.236778,753.498876 686.167986,860.003183 428.004673,937.13901 C281.680213,980.858848 180.933523,923.151257 138.119649,899.837625 C37.8373747,845.232734 -1.31910703,818.82331 1.67460473,596.877593 C1.67460473,519.79023 -28.5157605,169.085664 280.548759,66.2232373 Z"
            fill="#FFCC6A"
          />
        </g>
      </animated.svg>
    </div>
  )
}

export default Blob
