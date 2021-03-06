import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Section} from '../../hoc/Section/Section'
import reactQuizImage from '../../assets/images/react-quiz.png'
import spreadsheetsImage from '../../assets/images/spreadsheets.png'
import reactHooksImage from '../../assets/images/react-hooks.png'
import centerLogisticImage from '../../assets/images/center-logistic.png'
import {Tag} from '../UI/Tag/Tag'
import classes from './Projects.module.scss'

const tiltEffectSettings = {
  max: 8, // max tilt rotation (degrees (deg))
  perspective: 800, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1, // transform scale - 2 = 200%
  speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: 'cubic-bezier(0, 1, 1, 1)' // easing (transition-timing-function) of the enter/exit transition
}

const zoomEffectSettings = {
  size: '200%',
  speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: 'cubic-bezier(0, 1, 1, 1)' // easing (transition-timing-function) of the enter/exit transition
}

const projectsList = [
	{title: 'React Quiz', image: reactQuizImage, linkLive: 'https://react-quiz-382ea.web.app', linkGithub: 'https://github.com/Shamanovi4/react-quiz',
		description: `React based SPA which allows you to create and store custom
    quizzes with register and login functionality. Initial idea was to
    create a Google Forms clone but with less functionality. Written
    with the use of HTML, SCSS, JS, React, React Redux, React Router,
    Axios. Uses Firebase Realtime Databse to store quizzes.`},
	{title: 'Spreadsheets', image: spreadsheetsImage, linkLive: 'https://spreadsheets-7be4e.web.app', linkGithub: 'https://github.com/Shamanovi4/spreadsheets',
		description: `Based of a JavaScript Course this project was done and enhanced 
    by me to develop and consolidate my vanilla JS skills. The goal of
    this project was to create vanilla JS framework from scratch and
    then create some kind of Google Spreadsheets clone. This SPA was
    written with the use of HTML, SCSS, JS, Redux (written from
    scratch), BEM, Webpack.`},
  {title: 'React Hooks', image: reactHooksImage, linkLive: 'https://react-hooks-a59de.web.app', linkGithub: 'https://github.com/Shamanovi4/react-hooks',
		description: `Simple React app for searching and fetching data from github, e.g.,
    profiles, repositories and other. Written with modern React Hooks
    with the use of HTML, SCSS, JS, React, React Redux, React Router,
    Axios.`},
	{title: 'Center Logistic', image: centerLogisticImage, linkLive: 'https://center-logistic.web.app', linkGithub: 'https://github.com/Shamanovi4/center-logistic',
		description: `Transport company website written with the use of Pug, BEM, SCSS, JQuery, Gulp. Website is fully responsive`},
]

export const Projects = () => {
	function cardSetTransition(event) {
    const card = event.currentTarget

    clearTimeout(card.transitionTimeoutId)

    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = ''
    }, tiltEffectSettings.speed)
	}

	function cardMouseMove(event) {
		if (typeof(event.target.className) === 'string') {
			if (!event.target.className.includes('Button') && !event.target.className.includes('Icon')) {
				const card = event.currentTarget
				const cardWidth = card.offsetWidth
				const cardHeight = card.offsetHeight
				const centerX = cardWidth / 2
				const centerY = cardHeight / 2
				const mouseX = event.nativeEvent.offsetX - centerX
				const mouseY = event.nativeEvent.offsetY - centerY
				const rotateXUncapped = (+1) * tiltEffectSettings.max * mouseY / (cardHeight / 2)
				const rotateYUncapped = (-1) * tiltEffectSettings.max * mouseX / (cardWidth / 2)
				const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
						(rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped)
				const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
						(rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped)
			
				card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
						scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`
			}
		}
	}

	function cardMouseLeave(event) {
		event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
		
    cardSetTransition(event)
	}

  function imageSetTransition(event) {
    const image = event.currentTarget

    clearTimeout(image.transitionTimeoutId)

    image.style.transition = `all ${zoomEffectSettings.speed}ms ${zoomEffectSettings.easing}`
    image.transitionTimeoutId = setTimeout(() => {
      image.style.transition = ''
		}, zoomEffectSettings.speed)
	}

  function imageMouseMove(event) {
    const image = event.currentTarget
    const imageWidth = image.offsetWidth
    const imageHeight = image.offsetHeight
    const mouseX = event.nativeEvent.offsetX
		const mouseY = event.nativeEvent.offsetY 
    const backgroundPositionX = mouseX / imageWidth * 100
    const backgroundPositionY = mouseY / imageHeight * 100

    image.style.backgroundPosition = `${backgroundPositionX}% ${backgroundPositionY}%`
    image.style.backgroundSize = zoomEffectSettings.size
  }

  function imageMouseLeave(event) {
    const image = event.currentTarget

    image.style.backgroundPosition = 'top'
    image.style.backgroundSize = '100%'
    imageSetTransition(event)
  }

	function renderProjectsList(list) {
		return list.map((item, index) => {
			return (
				<li className={classes.projectsListCard}
					key={index}
					onMouseEnter={event => cardSetTransition(event)}
					onMouseMove={event => cardMouseMove(event)}
					onMouseLeave={event => cardMouseLeave(event)}
				>
					<div className={classes.projectsListItem}>
						<div className={classes.projectsListItemHeading}>
							<h2 className={classes.projectsListItemTitle}>{item.title}</h2>
              <a className={classes.projectsListItemIcon} href={item.linkGithub} target='_blank' rel='noreferrer'>
                <FaGithub className={classes.projectsListItemIconSvg} />
              </a>
						</div>
						<div className={classes.projectsListItemImageWrapper}>
							<div className={classes.projectsListItemImage} alt=''
                style={{backgroundImage: `url(${item.image})`}}
                onMouseEnter={event => imageSetTransition(event)}
                onMouseMove={event => imageMouseMove(event)}
					      onMouseLeave={event => imageMouseLeave(event)}
              />
						</div>
						<p className={classes.projectsListItemDescription}>{item.description}</p>
						<a className={classes.projectsListItemButton} href={item.linkLive} target='_blank' rel='noreferrer'>
              Open live version
            </a>
					</div>
				</li>
			)
		})
	}

	return (
		<Section>
			<div className={classes.projects}>
				<Tag>Projects</Tag>
			</div>
			<ul className={classes.projectsList}>
				{renderProjectsList(projectsList)}
			</ul>
		</Section>
	)
}
