import React, { useState } from "react"
import ReactMapGL, { NavigationControl } from "react-map-gl"

// # Doc https://visgl.github.io/react-map-gl/docs/
// Default styles here https://docs.mapbox.com/mapbox-gl-js/api/
const styles = {
  satellite: "satellite-streets-v11",
  outdoor: "outdoors-v11",
  light: "light-v10",
  navigation: "navigation-guidance-day-v4",
}
const RegionMap = () => {
  const [style, setStyle] = useState(styles.light)
  const [viewport, setViewport] = useState({
    latitude: 14.7839,
    longitude: -88.7783,
    width: "100vw",
    height: "100vh",
    zoom: 7,
  })
  const styleOptions = Object.keys(styles)
  return (
    <>
      {styleOptions.map(option => (
        <button onClick={() => setStyle(styles[option])}>{option}</button>
      ))}

      <ReactMapGL
        id="map"
        {...viewport}
        key={style}
        mapStyle={`mapbox://styles/mapbox/${style}`}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
        onViewPortChange={viewport => setViewport(viewport)}
      >
        <div style={{ position: "absolute", right: 0 }}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </>
  )
}

export default RegionMap
