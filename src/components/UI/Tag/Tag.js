import React from 'react'
import classes from './Tag.module.scss'

export const Tag = props => {
	return (
			<p className={classes.tag}>
				{'<' + props.children + ' />'}
			</p>
	)
}
