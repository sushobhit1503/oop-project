import React from "react"
import { Nav, Collapse, Navbar, NavItem, NavLink } from "reactstrap"

class SideBarAdmin extends React.Component {
    render() {
        return (
            <div>
                <Navbar
                    style={{ display: "flex", height: "100%", marginTop: "0px", position: "absolute", flexDirection: "column", width: "275px", backgroundColor: "white", boxShadow: "0px 0px 6px black", color: "var(--blue-color)" }}
                    expand="md"
                >
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar style={{ display: "flex", marginTop: "10px", flexDirection: "column", color: "var(--blue-color)" }}
                        >
                            <NavItem className="menu-content">
                                <NavLink href="/all-users">
                                    USERS
                                </NavLink>
                            </NavItem>
                            <NavItem className="menu-content">
                                <NavLink href="/all-transaction">
                                    TRANSACTIONS
                                </NavLink>
                            </NavItem>
                            <NavItem className="menu-content">
                                <NavLink href="/generate-report">
                                    GENERATE REPORT
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default SideBarAdmin