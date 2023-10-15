import React, { useRef, useState } from 'react'
import { Section } from '../../hoc/Section/Section'
import { Tag } from '../UI/Tag/Tag'
import { Input } from '../UI/Input/Input'
import emailjs from '@emailjs/browser'
import classes from './Contacts.module.scss'

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validate(value, valueToChange) {
  let isValid = true

  if (value.trim() === '') isValid = false
  if (valueToChange === 'email') isValid = validateEmail(value)

  return isValid
}

const initialState = {
  name: { value: '', isValid: false, isTouched: false },
  email: { value: '', isValid: false, isTouched: false },
  subject: { value: '', isValid: false, isTouched: false },
  message: { value: '', isValid: false, isTouched: false },
}

export const Contacts = () => {
  const form = useRef()
  const [state, setState] = useState(initialState)
  const [isSubmit, setIsSubmit] = useState(false)

  const validateForm = () => {
    let isValid = true

    Object.keys(state).forEach((input) => {
      if (!state[input].isValid) {
        isValid = false
      }
    })

    return isValid
  }

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    if (validateForm()) {
      setIsSubmit(true)
      event.target.reset()
      setState(initialState)
      setTimeout(() => {
        setIsSubmit(false)
      }, 2500)
    }
  }

  const handleChange = (value, valueToChange) => {
    setState({
      ...state,
      [valueToChange]: {
        value,
        isValid: validate(value, valueToChange),
        isTouched: true,
      },
    })
  }

  const submitMessageClasses = [
    classes.contactsFormSubmitMessage,
    isSubmit ? classes.active : '',
  ]

  return (
    <Section>
      <div className={classes.contacts}>
        <Tag>Contacts</Tag>
        <form className={classes.contactsForm} ref={form} onSubmit={sendEmail}>
          <div className={classes.contactsFormGroup}>
            <Input
              placeholder='Name'
              name='name'
              isGroup={true}
              notValid={
                state.name.isValid === false && state.name.isTouched === true
              }
              onChange={(event) => handleChange(event.target.value, 'name')}
            />
            <Input
              placeholder='Email'
              name='email'
              isGroup={true}
              notValid={
                state.email.isValid === false && state.email.isTouched === true
              }
              onChange={(event) => handleChange(event.target.value, 'email')}
            />
          </div>
          <div className={classes.contactsFormInputWrapper}>
            <Input
              placeholder='Subject'
              name='subject'
              notValid={
                state.subject.isValid === false &&
                state.subject.isTouched === true
              }
              onChange={(event) => handleChange(event.target.value, 'subject')}
            />
          </div>
          <div className={classes.contactsFormInputWrapper}>
            <Input
              placeholder='Message'
              name='message'
              isTextArea={true}
              notValid={
                state.message.isValid === false &&
                state.message.isTouched === true
              }
              onChange={(event) => handleChange(event.target.value, 'message')}
            />
          </div>
          <p className={submitMessageClasses.join(' ')}>
            Message has been submitted.
          </p>
          <div className={classes.contactsFormGroup}>
            <span className={classes.contactsFormInfo}>
              roman.chernitskyi.web@gmail.com
            </span>
            <button className={classes.contactsFormButton} type='submit'>
              Send message
            </button>
          </div>
        </form>
      </div>
    </Section>
  )
}
