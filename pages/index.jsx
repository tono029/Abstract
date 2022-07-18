import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { OrbitControls, Plane } from '@react-three/drei'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import("../components/abstract"), {ssr: false})

export default function Home() {
  return (
    <div className={"main"}>
      <Head>
        <title>Abstract</title>
        <meta name='viewport' content='width=devise-width, initial-scale=1.0' />
      </Head>

      <div className="app_title" style={{color: "white"}}>
        <h1>Abstract</h1>
        <p>with <span>Three.js</span> & <span>react-spring</span></p>
      </div>

      <Canvas shadows>
        <color attach={"background"} args={["darkblue"]} />

        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Model />
      </Canvas>
    </div>
  )
}
