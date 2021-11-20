import React from 'react'
import {ParticleBackground} from '../../components/UI/ParticleBackground/ParticleBackground'
import classes from './Page.module.scss'

export const Page = props => {
  return (
    <div className={classes.page}>
			<ParticleBackground />
			<div className={classes.pageWrapper}>
				{props.children}
			</div>
    </div>
  )
}
