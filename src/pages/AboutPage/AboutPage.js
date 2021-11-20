import React from 'react'
import {Page} from '../../hoc/Page/Page'
import {About} from '../../components/About/About'
import {Education} from '../../components/Education/Education'

export const AboutPage = () => {
	return (
		<Page>
			<About />
      <Education />
		</Page>
	)
}
