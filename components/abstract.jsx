import React, { useEffect, useState } from 'react'
import { useSprings, a } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import {GUI} from "lil-gui"

const Boxes = (para) => {
  const [props, api] = useSprings(para.num, i => ({
    scale: (i + 1) * 0.2,
    rotation: [i * 0.1, i * 0.1, i * 0.1],
  }))

  useFrame(({clock}) => {
    const t = clock.getElapsedTime()

    api.start((i) => ({
      rotation: [i * 0.1 + t, i * 0.1 + t, i* 0.1 + t],
    }))
  })

  return (
    <>
      {props.map(({scale, rotation}, i) => (
        <a.mesh 
          key={i} 
          rotation={rotation} 
          scale={scale} 
          castShadow
        >
          {para.geo === 0 && <tetrahedronGeometry />}
          {para.geo === 1 && <boxGeometry />}
          
          <meshNormalMaterial wireframe={para.wireframe} />
        </a.mesh>
      ))}
    </>
  )
}

export default function Model() {
  const [num, setNum] = useState(10)
  const [wire, setWire] = useState(true)
  const [geo, setGeo] = useState(0)
  const obj = {
    "num": num,
    "wireframe": wire,
    "geometry": geo,
    "Reload": function() {location.reload()},
  }

  useEffect(() => {
    const gui = new GUI()

    // ジオメトリの数
    const numCon = gui.add(obj, "num", 1, 25, 1)
    numCon.onChange(() => setNum(obj["num"]))

    // ワイヤフレーム
    gui.add(obj, "wireframe").onChange(() => setWire(prev => !prev))

    // ジオメトリの種類
    gui.add(obj, "geometry", {"Tetra": 0, "Box": 1}).onChange((e) => setGeo(e))

    gui.add(obj, "Reload")
  }, [])
  
  return (
    <>
      <Boxes 
        num={obj["num"]} 
        wireframe={obj["wireframe"]}
        geo={geo}
      />
    </>
  )
}