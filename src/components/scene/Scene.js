/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-filename-extension */

import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import Headphones from './Headphones';
import Hotdog from './Hotdog';

// component should be refactored to ts
const Scene = () => {
    return (
        <div style={{ position: 'absolute', width: '100%', left: 0, zIndex: 2 }}>
            <Canvas>
                <spotLight
                    intensity={1.2}
                    position={[30, 30, 50]}
                    angle={0.2}
                    penumbra={1}
                    castShadow
                />
                <Suspense fallback={null}>
                    <Hotdog />
                </Suspense>
                <Suspense fallback={null}>
                    <Headphones />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
