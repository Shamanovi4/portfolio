import React from 'react'
import classes from './Section.module.scss'

export const Section = props => {
  return (
    <section className={classes.section}>
			<div className={classes.sectionWrapper}>
      	{props.children}
			</div>
    </section>
  )
}
