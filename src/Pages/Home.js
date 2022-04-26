import axios from "axios"
import React from "react"
import bcrypt from "bcryptjs"
import { Input, Toast, ToastBody, Button, Alert } from "reactstrap"

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phonenumber: null,
            address: "",
            password: "",
            confirmpassword: "",
            username: "",
            pageId: 1,
            error: "",
            alert: false
        }

        this.basicState = this.state
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        var disabledSignup = (this.state.password === "" || this.state.email === "" || this.state.name === "" || this.state.address === "" || this.state.phonenumber === null || this.state.username === "")
        var disabledLogin = (this.state.username === "" || this.state.password === "")
        const onLoginSubmit = async () => {
            const { username } = this.state
            axios.get(`http://localhost:8000/user/${username}`).then(data => {
                try {
                    bcrypt.compare(this.state.password, data.data.password).then(match => {
                        if (match) {
                            localStorage.setItem("userDetails", JSON.stringify(data.data))
                            this.setState({ alert: true })
                            setTimeout(() => this.setState({ alert: false }), 5000)
                            this.setState(this.basicState)
                        }
                    })
                }
                catch (err) {
                    console.log(err.message);
                }
            })
        }
        const onSignupSubmit = async () => {
            if (this.state.password !== this.state.confirmpassword)
                this.setState({ error: "The passwords are not matching. Please try again" })
            else {
                var hashed_password = null
                try {
                    const salt = await bcrypt.genSalt()
                    hashed_password = await bcrypt.hash(this.state.password, salt)
                }
                catch (err) {
                    console.log(err.message);
                }
                const data = {
                    name: this.state.name,
                    email: this.state.email,
                    address: this.state.address,
                    password: hashed_password,
                    username: this.state.username,
                    phone_number: this.state.phonenumber,
                    wallet: 0,
                    admin: false
                }
                axios.post("http://localhost:8000/user/auth", data).then(user => {
                    localStorage.setItem("userDetails", JSON.stringify(user.data))
                    this.setState({ alert: true })
                    setTimeout(() => this.setState(this.basicState), 5000)
                }).catch(err => {
                    console.log(err.message);
                })
            }

        }
        var pageEffect =
            <ToastBody style={{ display: "flex", flexDirection: "column" }}>
                <div className="heading" style={{ color: "var(--blue-color)" }}>
                    SIGN UP
                </div>
                <div className="content" style={{ textAlign: "center", marginBottom: "10px", color: "var(--blue-color)" }}>
                    Already a member? <div onClick={() => { this.setState({ pageId: 2 }) }} style={{ textDecoration: "underline", cursor: "pointer" }}>CLICK HERE</div>
                </div>
                <Input onChange={onChange} value={this.state.name} name="name" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="NAME" type="text" />
                <Input onChange={onChange} value={this.state.username} name="username" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="USERNAME" type="text" />
                <Input onChange={onChange} value={this.state.email} name="email" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="EMAIL ID" type="email" />
                <Input onChange={onChange} value={this.state.phonenumber} name="phonenumber" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="PHONE NUMBER" type="number" min={0} />
                <Input onChange={onChange} value={this.state.address} name="address" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="ADDRESS" type="textarea" rows={3} />
                <Input onChange={onChange} value={this.state.password} name="password" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="PASSWORD" type="password" />
                <Input onChange={onChange} value={this.state.confirmpassword} name="confirmpassword" bsSize="sm" placeholder="CONFIRM PASSWORD" type="password" />
                <div style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>{this.state.error}</div>
                <Button disabled={disabledSignup} onClick={onSignupSubmit} style={{ backgroundColor: "var(--light-blue-color)", border: "none", color: "var(--blue-color)", fontWeight: "700" }}>
                    REGISTER
                </Button>
            </ToastBody>
        if (this.state.pageId === 2) {
            pageEffect =
                <ToastBody style={{ display: "flex", flexDirection: "column" }}>
                    <div className="heading" style={{ color: "var(--blue-color)" }}>
                        LOGIN IN
                    </div>
                    <div className="content" style={{ textAlign: "center", marginBottom: "10px", color: "var(--blue-color)" }}>
                        Create an account? <div onClick={() => { this.setState({ pageId: 1 }) }} style={{ textDecoration: "underline", cursor: "pointer" }}>CLICK HERE</div>
                    </div>
                    <Input onChange={onChange} value={this.state.username} name="username" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="USERNAME" type="text" />
                    <Input onChange={onChange} value={this.state.password} name="password" style={{ marginBottom: "10px" }} bsSize="sm" placeholder="PASSWORD" type="password" />
                    <div style={{ color: "red", textAlign: "center" }}>{this.state.error}</div>
                    <Button disabled={disabledLogin} onClick={onLoginSubmit} style={{ backgroundColor: "var(--light-blue-color)", border: "none", color: "var(--blue-color)", fontWeight: "700" }}>
                        LOGIN
                    </Button>
                </ToastBody>
        }
        return (
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "140px" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
                    <div className="heading" style={{ color: "white" }} >TAGLINE</div>
                    <div style={{ color: "white" }} className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div>
                    <Toast>
                        {/* {JSON.parse(localStorage.getItem("userDetails")) ?
                            <div style={{ height: "0px" }}></div> : <div>{pageEffect}</div>} */}
                        {pageEffect}

                    </Toast>
                </div>
                {this.state.alert ? <Alert style={{ position: "absolute" }} color="success" dismissible>
                    You have been successfully logged in !!
                </Alert> : null}
            </div>
        )
    }
}

export default Home