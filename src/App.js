import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
				<Routes>
					<Route path='/' exact element={<MainPage />} />
          <Route path='/about' exact element={<AboutPage />} />
          <Route path='/skills' exact element={<SkillsPage />} />
          <Route path='/projects' exact element={<ProjectsPage />} />
          <Route path='/contacts' exact element={<ContactsPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
  )
}

export default App
