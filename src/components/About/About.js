import React from 'react'
import {Section} from '../../hoc/Section/Section'
import photo from '../../assets/images/photo-60.png'
import {Tag} from '../UI/Tag/Tag'
import classes from './About.module.scss'

export const About = () => {
	return (
		<Section>
			<Tag>About</Tag>
			<div className={classes.about}>
				<div className={classes.aboutColumn}>
					<h2 className={classes.aboutHeading} data-text={`Hi, I'm Roman,`}>
						Hi, I'm Roman,
					</h2>
					<h2 className={classes.aboutHeading + ' ' + classes['aboutHeading--second']} data-text={`web developer`}>
						web developer
					</h2>
					<p className={classes.aboutText}>
						My name is Roman Chernitskyi. I'm a Front-End Developer located in Kiev (Ukraine). 
						I love to create cool and beautiful things with high attention to details. 
            I care about writing clean code and I'm always eager to learn and perfect.
					</p>
				</div>
				<div className={classes.aboutColumn}>
					<div className={classes.aboutPhotoWrapper}>
						<img className={classes.aboutPhoto} src={photo} alt='' />
						<span className={classes.aboutPhotoLine} />
						<span className={classes.aboutPhotoLine} />
						<span className={classes.aboutPhotoLine} />
					</div>
				</div>
			</div>
		</Section>
	)
}
