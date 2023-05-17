import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './Style/styledGlobal'
import MainRoutes from './router'
import 'aos/dist/aos.css';

export function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <MainRoutes />
      </Router>
    </>
  )
}
