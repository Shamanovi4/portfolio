import React from 'react'
import classes from './Input.module.scss'

export const Input = props => {
	const inputWrapperClasses = [
		classes.inputWrapper,
		props.notValid ? classes.notValid : '',
		props.isGroup ? classes.group : ''
	]

	const inputClasses = [
		classes.input,
		props.isTextArea ? classes.textArea : ''
	]

	return (
		<div className={inputWrapperClasses.join(' ')}>
			{props.isTextArea 
					?	<textarea className={inputClasses.join(' ')} 
							type='text' 
							placeholder={props.placeholder}
							name={props.name}
							onChange={props.onChange}
						/>
					: <input className={inputClasses.join(' ')} 
							type='text' 
							placeholder={props.placeholder}
							name={props.name}
							onChange={props.onChange}
						/>}
		</div>
	)
}
