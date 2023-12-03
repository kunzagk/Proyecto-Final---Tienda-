import { Navigate, useLocation } from 'react-router-dom'
import MyContext from '../contexts/MyContext'
import { useContext } from 'react'

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(MyContext)
  const { pathname } = useLocation()
  return (
    isAuthenticated && (pathname === '/login' || pathname === '/register')
      ? <Navigate to='/' />
      : children
  )
}

export default PublicRoute