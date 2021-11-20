import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {FaGithub, FaTelegram} from 'react-icons/fa'
import {ReactComponent as Logo} from '../../assets/images/R.svg'
import cvFile from '../../assets/cv/roman-chernitskyi-cv.pdf'
import classes from './Navigation.module.scss'

export const Navigation = () => {
	const [menu, setMenu] = useState({isOpen: false, isTouched: false})

	const handleMenu = () => {
		if (menu.isOpen) {
			setMenu({isOpen: false, isTouched: true})
		} else {
			setMenu({isOpen: true, isTouched: true})
		}
	}

	const menuClasses = [
		classes.navbarMenu,
		menu.isOpen && menu.isTouched ? classes.open : '',
		!menu.isOpen && menu.isTouched ? classes.close : ''
	]

	const navbarItemClasses = [
		classes.navbarItem,
		menu.isOpen ? classes.active : ''
	]

	return (
		<nav className={classes.navbar}>
			<div className={classes.navbarInner}>
				<NavLink className={classes.navbarLogo} to="/" exact>
					<Logo />
					<div className={classes.navbarLogoBackground} />
				</NavLink>
				<div className={navbarItemClasses.join(' ')}>
					<NavLink className={classes.navbarLink} to="/about" exact>About</NavLink>
					<NavLink className={classes.navbarLink} to="/skills" exact>Skills</NavLink>
					<NavLink className={classes.navbarLink} to="/projects" exact>Projects</NavLink>
					<NavLink className={classes.navbarLink} to="/contacts" exact>Contacts</NavLink>
          <a className={classes.navbarLink} href={cvFile} download>Download CV</a>
				</div>
				<div className={classes.navbarItem}>
					<a className={classes.navbarIcon} href='https://github.com/Shamanovi4' target='_blank' rel='noreferrer'>
						<FaGithub className={classes.navbarIconSvg} />
					</a>
					<a className={classes.navbarIcon} href='https://t.me/Shamanovi4' target='_blank' rel='noreferrer'>
						<FaTelegram />
					</a>
				</div>
				<button className={menuClasses.join(' ')} onClick={() => handleMenu()}>
					<span className={classes.navbarMenuLine} />
					<span className={classes.navbarMenuLine} />
					<span className={classes.navbarMenuLine} />
					<span className={classes.navbarMenuLine} />
				</button>
			</div>
		</nav>
	)
}
