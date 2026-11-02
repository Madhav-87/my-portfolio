
import { useRef } from 'react';
import VariableProximityConfig from './VariableProximityConfig.jsx';

export default function VariableProximity({ containerRef, label, fontSize = 64, idleWave = false }) {
  return (
    <VariableProximityConfig
      label={label}
      fromFontVariationSettings="'wght' 400"
      toFontVariationSettings="'wght' 900"
      containerRef={containerRef}
      radius={100}
      falloff="linear"
      smoothing={0.2}
      idleWave={idleWave}
      fontSize={fontSize}
    />
  );
}
