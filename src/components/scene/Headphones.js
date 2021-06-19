/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */

import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';

// component should be refactored to ts
const Headphones = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF(
        'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf',
    );

    const [active, setActive] = useState(false);
    const rotate = useFrame(() => {
        group.current.rotation.y += active ? 0.1 : 0.01;
    });

    window.addEventListener('click', rotate);

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            position={[5, -0.6, 0]}
            scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
            onClick={() => setActive(!active)}
            onPointerOver={() => setActive(true)}
            onPointerOut={() => setActive(false)}
        >
            <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} />
            <mesh geometry={nodes.Ear_Cup.geometry} material={nodes.Ear_Cup.material} />
            <mesh geometry={nodes.Seprator.geometry} material={materials.Connector} />
            <mesh geometry={nodes.Seprator001.geometry} material={nodes.Seprator001.material} />
            <mesh geometry={nodes['Mid-'].geometry} material={materials['Black-2']} />
            <mesh geometry={nodes.Cylinder025.geometry} material={nodes.Cylinder025.material} />
            <mesh geometry={nodes.Cylinder025_1.geometry} material={materials.GlowBlue} />
        </group>
    );
};

useGLTF.preload(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf',
);

export default Headphones;
