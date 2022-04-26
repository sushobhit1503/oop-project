import React from "react"
import { Nav, Collapse, Navbar, NavItem, NavLink } from "reactstrap"

class SideBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar
                    style={{ display: "flex", height: "100%", position: "absolute", flexDirection: "column", width: "275px", backgroundColor: "white", boxShadow: "0px 0px 6px black", color: "var(--blue-color)" }}
                    expand="md"
                >
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar style={{ display: "flex", marginTop: "10px", flexDirection: "column", color: "var(--blue-color)" }}
                        >
                            <NavItem className="menu-content">
                                <NavLink href="/saved-books">
                                    SAVED BOOKS
                                </NavLink>
                            </NavItem>
                            <NavItem className="menu-content">
                                <NavLink href="/books-published">
                                    BOOKS PUBLISHED
                                </NavLink>
                            </NavItem>
                            <NavItem className="menu-content">
                                <NavLink href="/wallet">
                                    WALLET
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

export default SideBar