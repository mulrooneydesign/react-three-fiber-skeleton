import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = (props) => {

 const mesh = useRef()
 const [hovered, setHover] = useState(false)
 const [active, setActive] = useState(false)
 useFrame(() => (mesh.current.rotation.x += 0.01))

 return (
   <mesh
     {...props}
     ref={mesh}
     scale={active ? 2.5 : 1}
     onClick={(event) => setActive(!active)}
     onPointerOver={(event) => setHover(true)}
     onPointerOut={(event) => setHover(false)}>
     <boxGeometry args={[1, 2, 3]} />
     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
   </mesh>
 )
}

const App = () => {
    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )

}



ReactDOM.render(<App />, document.getElementById('react-canvas'))