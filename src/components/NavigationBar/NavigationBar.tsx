import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import GithubIcon from "../../icons/GithubIcon"
import LinkedInIcon from "../../icons/LinkedInIcon"
import TreeIcon from "../../icons/TreeIcon"
import "./NavigationBar.scss"
const LinkedNavBarItem = (props: any) => {
    const location = useLocation()
    const selected = location.pathname.includes(props.to)
    return (
        <Link to={props.to} className={`me-4 mt-2 ${selected ? 'text-black' : 'text-muted'}`}>
            {props.children}
        </Link>
    )
}
const LinkedNavBarDropDown = (props: any) => {
    interface LinkInterface {
        path: string, 
        label: string
    }
    const location = useLocation()
    const selected = props.links.findIndex((link: LinkInterface) => location.pathname.includes(link.path)) > -1
    return (
        <NavDropdown title={props.title} className={`me-2 ${selected && 'selected-nav-dropdown'}`}>
            {props.links.map((link: LinkInterface) => (
                <div className="mx-3 my-1" key={link.label}>
                    <LinkedNavBarItem to={link.path}>{link.label}</LinkedNavBarItem>
                </div>
            ))}
        </NavDropdown>
    )
}
export const NavigationBar = () => {
    return (
        <Navbar bg="white" expand="lg" className="position-fixed w-100 mb-0" style={{zIndex: 1000}}>
            <Container className="mx-2">
                <Navbar.Brand href="/" className="mb-4">
                    <TreeIcon style={{marginBottom: "14px", marginRight: "4px"}}/>
                    Jake Trump's App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkedNavBarItem to="/home">Home</LinkedNavBarItem>
                        <LinkedNavBarDropDown 
                            title={'Projects'}
                            links={[
                                {path: '/react-projects', label: 'React'},
                                {path: '/angular-projects', label: 'Angular'}
                            ]}
                        />    
                        <LinkedNavBarDropDown
                            title={'Notes'}
                            links={[
                                {path: '/react-examples', label: 'React'},
                                {path: '/angular-examples', label: 'Angular'}
                            ]}
                        />                
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Text className="position-absolute end-0">
                    <a href="https://github.com/jacobtrump3" className="me-4 text-muted">
                        <GithubIcon style={{marginRight: '4px', marginBottom: '2px'}} height='14' width='14'/>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/jake-trump-8919bb71/" className="me-4 text-muted">
                        <LinkedInIcon style={{marginRight: '4px', marginBottom: '2px'}} height='14' width='14'/>
                        LinkedIn
                    </a>
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}