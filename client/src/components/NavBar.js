import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

// const NavBar = (props) => {
//     const { pathname } = useLocation()
//     return(

//         <Menu>
//             <Link to='/'>
//               <Menu.Item active={pathname == '/'} >
//                 Home
//               </Menu.Item >
//             </Link>
//             <Link to='/about'>
//               <Menu.Item active={pathname == '/about'} >
//                 About    
//              </Menu.Item >
//             </Link>
//         </Menu>
//     )
// }

// const NavBar = (props) => {
//     const { location } = props
//     return(
//         <Menu>
//             <Link to='/'>
//               <Menu.Item active={location.pathname == '/'} >
//                 Home
//               </Menu.Item >
//             </Link>
//             <Link to='/about'>
//               <Menu.Item active={location.pathname == '/about'} >
//                 About    
//              </Menu.Item >
//             </Link>
//         </Menu>
//     )
// }

class NavBar extends React.Component {
    render(){
        // const { location } = props
        const { location } = this.props
        return(

            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname == '/'} >
                    Home
                  </Menu.Item >
                </Link>
                <Link to='/about'>
                  <Menu.Item active={location.pathname == '/about'} >
                    About    
                 </Menu.Item >
                </Link>
                <Link to='/componentDemo'>
                  <Menu.Item active={location.pathname == '/componentDemo'} >
                    Component Demo    
                 </Menu.Item >
                </Link>
                <Link to='/Appointments'>
                  <Menu.Item active={location.pathname == '/appointments'} >
                    Appointments   
                 </Menu.Item >
                </Link>
                <Link to='/physicians'>
                  <Menu.Item active={location.pathname == '/physicians'} >
                    Physicians  
                 </Menu.Item >
                </Link>
                <Link to='/patients'>
                  <Menu.Item active={location.pathname == '/patients'} >
                    Patients   
                 </Menu.Item >
                </Link>
            </Menu>
        )

    }
}

export default withRouter(NavBar)


