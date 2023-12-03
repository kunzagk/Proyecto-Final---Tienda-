import { Navigate, useLocation } from 'react-router-dom'
import MyContext from '../contexts/MyContext';
import { useContext } from 'react'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(MyContext)
  const { pathname } = useLocation()
  return (
    isAuthenticated && pathname !== '/login' && pathname !== '/register'
      ? children
      : <Navigate to='/' />
  )
}

export default PrivateRoute