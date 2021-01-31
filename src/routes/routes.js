import App from '../App'
import ExampleComponent from '../components/examples/example.component'

const routes = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/sample',
    component: ExampleComponent,
    routes: [
      {
        path: '/sample/hello',
        component: App,
      },
    ],
  },
]

export default routes
