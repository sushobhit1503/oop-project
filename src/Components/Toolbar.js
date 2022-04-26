import React from "react"
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Alert } from "reactstrap"
import Logo from "../Assets/Logo.png"
class Toolbar extends React.Component {
    constructor() {
        super()
        this.state = {
            isAlert: false,
            isAdmin: false
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("userDetails")).admin
        console.log(user);
        if (user)
            this.setState({ isAdmin: true })
        else
            this.setState({ isAdmin: false })
    }
    render() {
        const signOut = () => {
            localStorage.removeItem("userDetails")

        }
        return (
            <div>
                <Navbar
                    style={{ backgroundColor: "white", boxShadow: "0px 0px 6px black", color: "var(--blue-color)" }}
                    expand="md"
                    fixed="top"
                    full
                >
                    <NavbarBrand href="/">
                        <img src={Logo} style={{ width: "150px" }} alt="BOOKWORM" />
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar style={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            <NavItem className="menu-content">
                                <NavLink href="/my-profile">
                                    MY PROFILE
                                </NavLink>
                            </NavItem>
                            <NavItem className="menu-content">
                                <NavLink href="/dashboard">
                                    DASHBOARD
                                </NavLink>
                            </NavItem>
                            <NavItem className="menu-content">
                                <NavLink href="/requests">
                                    REQUESTS
                                </NavLink>
                            </NavItem>
                            {this.state.isAdmin ? <NavItem className="menu-content">
                                <NavLink href="/admin-panel">
                                    ADMIN PANEL
                                </NavLink>
                            </NavItem> : null}
                            <NavItem className="menu-content">
                                <NavLink onClick={() => signOut()} href="/">
                                    SIGN OUT
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
                {/* <Alert style={{ position: "absolute" }} color="success" dismissible>
                    You have been successfully logged out !!
                </Alert> */}
            </div>
        )
    }
}

export default Toolbar