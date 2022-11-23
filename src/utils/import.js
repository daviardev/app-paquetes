// Import pages
import Home from '../pages/Home'
import Login from '../pages/Login'
import Detail from '../pages/Detail'
import Invoice from '../pages/Invoice'
import NotFound from '../pages/NotFound'
import SendPackage from '../pages/SendPackage'

// Import containers
export { default as NavBar } from '../containers/NavBar'
export { default as Footer } from '../containers/Footer'

// Import icons
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// import components
import Card from '../components/Card'

export {
    Home,
    Card,
    Login,
    Detail,
    Invoice,
    NotFound,
    FaUserAlt,
    SendPackage,
    AiOutlineMenu,
    AiOutlineClose
}