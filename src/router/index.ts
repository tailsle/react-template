import Home from '../pages/Home'
interface ReactRouter {
	path: string
	component: any
}
const routes: ReactRouter[] = [
	{
		path: '/',
		component: Home
	}
]
export default routes
