"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 20 },
          color: { value: ['#F0BA60', '#EB9D6F', '#9ABDC8'] },
          opacity: { value: { min: 0.05, max: 0.35 } },
          size: { value: { min: 2, max: 6 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'top',
            random: true,
            outModes: { default: 'out' },
          },
        },
        background: { color: 'transparent' },
      }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
