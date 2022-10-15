import React, {useCallback, useMemo} from 'react'
import Particles from 'react-tsparticles';
import {loadFull} from "tsparticles";

export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const options = useMemo(() => {
    return {
      detectRetina: true,
      fpsLimit: 120,
      fullScreen: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: false,
      particles: {
        move: {
          enable: true,
          speed: {min: 0.25, max: 2}
        },
        size: {
          value: {min: 0.25, max: 2}
        },
        opacity: {
          value: {min: 0.25, max: 1}
        },
        links: {
          color: '#f5f5f5',
          distance: 120,
          enable: true,
          opacity: 0.5
        },
        number: {
          density: {
            enable: true,
            area: 500,
            factor: 4000
          }
        }
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'grab'
          }
        },
        modes: {
          push: {
            quantity: 2
          },
          grab: {
            distance: 120
          }
        }
      }
    }
  }, [])

	return (
    <Particles
      init={particlesInit}
      options={options}
    />
	)
}
