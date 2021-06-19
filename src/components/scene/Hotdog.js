/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */

import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

// component should be refactored to ts
const Hotdog = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF(
        'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/hot-dog/model.gltf',
    );
    const [active, setActive] = useState(false);

    const rotate = useFrame(() => {
        group.current.rotation.y += active ? -0.1 : 0.01;
        group.current.rotation.z += active ? -0.1 : 0.01;
    });

    window.addEventListener('click', rotate);

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            position={[-5, 0, 0]}
            scale={active ? [6, 6, 6] : [5, 5, 5]}
            onClick={() => setActive(!active)}
            onPointerOver={() => setActive(true)}
            onPointerOut={() => setActive(false)}
        >
            <mesh geometry={nodes.hotDog.geometry} material={materials.brownLight}>
                <mesh
                    geometry={nodes.sausage.geometry}
                    material={materials.brown}
                    position={[-0.29, 0.09, 0]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.93, 0.93, 0.93]}
                />
                <group position={[0, 0.14, 0]} rotation={[Math.PI, 0, -Math.PI]}>
                    <mesh geometry={nodes.Mesh_sauce.geometry} material={materials.yellow} />
                    <mesh geometry={nodes.Mesh_sauce_1.geometry} material={materials.red} />
                </group>
            </mesh>
        </group>
    );
};

useGLTF.preload(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/hot-dog/model.gltf',
);

export default Hotdog;
