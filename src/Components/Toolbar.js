import React from "react"
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap"
import Logo from "../Assets/Logo.png"
class Toolbar extends React.Component {
    render() {
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
                            <NavItem className="menu-content">
                                <NavLink href="/">
                                    SIGN OUT
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Toolbar