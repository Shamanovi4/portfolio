import React from 'react'
import {Section} from '../../hoc/Section/Section'
import {Tag} from '../UI/Tag/Tag';
import classes from './Education.module.scss'

export const Education = () => {
	return (
		<Section>
			<Tag>Education</Tag>
			<div className={classes.education}>
				<p className={classes.educationUniversity}>
          Bachelor's degree, State University of Infrastructure and Technologies, Kiev
        </p>
        <p className={classes.educationYear}>2015 - 2019</p>
        <p className={classes.educationQualification}>
          Area of Expertise Software Engineering qualification 
          Specialist in Software Design and Testing
        </p>
			</div>
		</Section>
	)
}
