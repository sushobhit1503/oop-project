import React from "react"
import { Input, Toast, ToastBody, Button } from "reactstrap"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phonenumber: 0,
            address: "",
            password: "",
            confirmpassword: ""
        }
    }
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "140px" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
                    <div className="heading" >TAGLINE</div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div>
                    <Toast>
                        <ToastBody style={{ display: "flex", flexDirection: "column" }}>
                            <div className="heading" style={{ color: "var(--blue-color)" }}>
                                SIGN UP
                            </div>
                            <div className="content" style={{ textAlign: "center", marginBottom: "10px", color: "var(--blue-color)" }}>
                                Already a member? CLICK HERE
                            </div>
                            <Input style={{ marginBottom: "10px" }} bsSize="sm" placeholder="NAME" type="text" />
                            <Input style={{ marginBottom: "10px" }} bsSize="sm" placeholder="EMAIL ID" type="email" />
                            <Input style={{ marginBottom: "10px" }} bsSize="sm" placeholder="PHONE NUMBER" type="number" min={0} />
                            <Input style={{ marginBottom: "10px" }} bsSize="sm" placeholder="ADDRESS" type="textarea" rows={3} />
                            <Input style={{ marginBottom: "10px" }} bsSize="sm" placeholder="PASSWORD" type="password" />
                            <Input style={{ marginBottom: "30px" }} bsSize="sm" placeholder="CONFIRM PASSWORD" type="password" />
                            <Button style={{ backgroundColor: "var(--light-blue-color)", border: "none", color: "var(--blue-color)", fontWeight: "700" }}>
                                REGISTER
                            </Button>
                        </ToastBody>
                    </Toast>
                </div>
            </div>
        )
    }
}

export default Home