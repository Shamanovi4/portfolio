import React from 'react'
import {Page} from '../../hoc/Page/Page'
import {Skills} from '../../components/Skills/Skills'
import {Projects} from '../../components/Projects/Projects'
import {About} from '../../components/About/About'
import {Contacts} from '../../components/Contacts/Contacts'
import {Education} from '../../components/Education/Education'

export const MainPage = () => {
	return (
		<Page>
			<About />
      <Education />
			<Skills />
			<Projects />
			<Contacts />
		</Page>
	)
}
