/* eslint-disable @typescript-eslint/indent */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './router'

function App() {
	return (
		<Routes>
			{routes.map(({ path, component: Component }) => {
				return <Route path={path} key={path} element={<Component />}></Route>
			})}
		</Routes>
	)
}

export default App
