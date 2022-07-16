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
      </Head>

      <div className="app_title" style={{color: "white"}}>
        <h1>Abstract</h1>
        <p>with <span>Three.js</span> & <span>react-spring</span></p>
      </div>

      <Canvas shadows>
        <color attach={"background"} args={["darkblue"]} />

        <ambientLight />
        {/* <pointLight castShadow position={[-3, 10, 0]} /> */}

        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* <Plane 
          receiveShadow 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -2, 0]}
          args={[20, 20]}
        >
          <shadowMaterial />
        </Plane> */}

        <Model />
      </Canvas>
    </div>
  )
}
