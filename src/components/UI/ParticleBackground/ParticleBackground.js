import React from 'react'
import Particles from 'react-particles-js'
import {particlesConfig} from './particlesConfig'

export const ParticleBackground = () => {
	return (
		<Particles params={particlesConfig} width={'100%'} height={'100%'}></Particles>
	)
}
