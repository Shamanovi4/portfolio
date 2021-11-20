import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Layout} from './hoc/Layout/Layout'
import {MainPage} from './pages/MainPage/MainPage'
import {AboutPage} from './pages/AboutPage/AboutPage'
import {SkillsPage} from './pages/SkillsPage/SkillsPage'
import {ProjectsPage} from './pages/ProjectsPage/ProjectsPage'
import {ContactsPage} from './pages/ContactsPage/ContactsPage'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
		<BrowserRouter>
			<Layout>
        <ScrollToTop />
				<Switch>
					<Route path='/' exact component={MainPage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/skills' exact component={SkillsPage} />
          <Route path='/projects' exact component={ProjectsPage} />
          <Route path='/contacts' exact component={ContactsPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
  )
}

export default App
