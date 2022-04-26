import React from "react"
import SideBar from "../Components/SideBar"
import axios from "axios"
import RequestedCard from "../Components/RequestedCard"
import ProfilePic from "../Assets/ProfilePic.png"
import bcrypt from "bcryptjs"
import { Card, CardText, CardBody, Input, InputGroup, InputGroupText, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"

class MyProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            name: "",
            address: "",
            phone_number: 0,
            isModalOpen: false,
            type: "",
            requests: [],
            isModalOpenPassword: false,
            oldpassword: "",
            newpassword: "",
            message: ""
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("userDetails"))
        this.setState({ user: user, name: user.name, address: user.address, phone_number: user.phone_number })
        axios.get(`http://localhost:8000/api/requests/${user.uid}`).then(data => {
            this.setState({ requests: data.data })
        }).catch(err => {
            console.log(err.message);
        })
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const changePassword = () => {
            const user = JSON.parse(localStorage.getItem("userDetails"))
            bcrypt.compare(this.state.oldpassword, user.password).then(match => {
                if (match) {
                    var hashed_password = null
                    bcrypt.genSalt().then(salt => {
                        bcrypt.hash(this.state.newpassword, salt).then(got => {
                            hashed_password = got
                        })
                    })
                    const data = {
                        newpassword: hashed_password
                    }
                    axios.put(`http://localhost:8000/user/auth/change-password/${user.uid}`, data).then(data => {
                        this.setState({ message: "The password has been updated" })
                    }).catch(err => console.log(err.message))
                }
                else {
                    this.setState({ message: "Please enter correct old password" })
                }
            })
        }
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "10px", width: "75%", height: "100%" }}>
                    <div style={{ width: "50%" }}>
                        <Card style={{ marginRight: "10px", height: "100%", overflow: "scroll" }}>
                            <CardBody>
                                <CardText style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={ProfilePic} style={{ width: "200px", marginTop: "-40px" }} alt="bookworm" />
                                    </div>
                                    <div style={{ fontWeight: "700", fontSize: "22px", color: "var(--blue-color)", textAlign: "center", marginBottom: "30px" }}>{this.state.user.username}</div>
                                    <InputGroup style={{ width: "70%", margin: "5px", alignSelf: "center" }}>
                                        <Input value={this.state.name} placeholder="NAME" />
                                        <Button onClick={() => { this.setState({ type: "name", isModalOpen: true }) }} style={{ backgroundColor: "white", borderBlockColor: "var(--place-holder-color)" }}>
                                            <i className="fas fa-pen" style={{ color: "var(--grey-color)" }}></i>
                                        </Button>
                                    </InputGroup>
                                    <InputGroup style={{ width: "70%", margin: "5px", alignSelf: "center" }}>
                                        <Input value={this.state.user.email} disabled={true} placeholder="EMAIL ID" />
                                        <InputGroupText>
                                            <i className="fa fa-check-circle" style={{ color: "var(--grey-color)" }}></i>
                                        </InputGroupText>
                                    </InputGroup>
                                    <InputGroup style={{ width: "70%", margin: "5px", alignSelf: "center" }}>
                                        <Input value={this.state.address} placeholder="ADDRESS" />
                                        <Button onClick={() => { this.setState({ type: "address", isModalOpen: true }) }} style={{ backgroundColor: "white", borderBlockColor: "var(--place-holder-color)" }}>
                                            <i className="fas fa-pen" style={{ color: "var(--grey-color)" }}></i>
                                        </Button>
                                    </InputGroup>
                                    <InputGroup style={{ width: "70%", margin: "5px", alignSelf: "center" }}>
                                        <Input value={this.state.phone_number} placeholder="PHONE NUMBER" />
                                        <Button onClick={() => { this.setState({ type: "phone_number", isModalOpen: true }) }} style={{ backgroundColor: "white", borderBlockColor: "var(--place-holder-color)" }}>
                                            <i className="fas fa-pen" style={{ color: "var(--grey-color)" }}></i>
                                        </Button>
                                    </InputGroup>
                                    <Button onClick={() => this.setState({ isModalOpenPassword: true })} style={{ width: "250px", alignSelf: "center", marginTop: "30px", backgroundColor: "var(--light-blue-color)", color: "var(--blue-color)", fontWeight: "700", border: "none" }}>
                                        RESET PASSWORD
                                    </Button>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{ width: "50%" }}>
                        <Card style={{ height: "100%", overflow: "scroll" }}>
                            <CardBody>
                                <CardText style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ fontWeight: "700", fontSize: "22px", color: "var(--blue-color)" }}>
                                        EXCHANGE HISTORY
                                    </div>
                                    <InputGroup size="sm">
                                        <Input placeholder="SEARCH HISTORY..." />
                                        <InputGroupText>
                                            <i className="fa fa-search"></i>
                                        </InputGroupText>
                                    </InputGroup>
                                    {this.state.requests.map(each => {
                                        return (
                                            <RequestedCard title={each.title} requestedAt={each.requestedAt} />
                                        )
                                    })}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })} >
                    <ModalHeader toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })}>
                        {this.state.type === "phone_number" ? <div>CHANGE PHONE NUMBER</div> : <div>CHANGE {this.state.type}</div>}
                    </ModalHeader>
                    <ModalBody>
                        <Input onChange={onChange} name={this.state.type} value={this.state.type} style={{ marginBottom: "10px" }} bsSize="sm" placeholder={this.state.type === "phone_number" ? `ENTER NEW PHONE NUMBER` : `ENTER NEW ${this.state.type}`} type={this.state.type === "phone_number" ? "number" : "text"} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" >
                            CHANGE
                        </Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.isModalOpenPassword} toggle={() => this.setState({ isModalOpenPassword: !this.state.isModalOpen })} >
                    <ModalHeader toggle={() => this.setState({ isModalOpenPassword: !this.state.isModalOpenPassword })}>
                        RESET PASSWORD
                    </ModalHeader>
                    <ModalBody>
                        <Input style={{ marginBottom: "10px" }} bsSize="sm" onChange={onChange} value={this.state.oldpassword} name="oldpassword" type="password" placeholder="ENTER OLD PASSWORD" />
                        <Input style={{ marginBottom: "10px" }} bsSize="sm" onChange={onChange} value={this.state.newpassword} name="newpassword" type="password" placeholder="ENTER NEW PASSWORD" />
                        {this.state.message}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={changePassword} color="success" >
                            RESET PASSWORD
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default MyProfile