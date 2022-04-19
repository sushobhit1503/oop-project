import React from "react"
import SideBar from "../Components/SideBar"
import ProfilePic from "../Assets/ProfilePic.png"
import ExchangeHistory from "../Components/ExchangeHistory"
import { Card, CardText, CardBody, Input, InputGroup, InputGroupText, Button } from "reactstrap"

class MyProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            name: "",
            address: "",
            phone_number: 0
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("userDetails"))
        this.setState({ user: user, name: user.name, address: user.address, phone_number: user.phone_number })
    }
    render() {
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
                                        <Button style={{ backgroundColor: "white", borderBlockColor: "var(--place-holder-color)" }}>
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
                                        <Button style={{ backgroundColor: "white", borderBlockColor: "var(--place-holder-color)" }}>
                                            <i className="fas fa-pen" style={{ color: "var(--grey-color)" }}></i>
                                        </Button>
                                    </InputGroup>
                                    <InputGroup style={{ width: "70%", margin: "5px", alignSelf: "center" }}>
                                        <Input value={this.state.phone_number} placeholder="PHONE NUMBER" />
                                        <Button style={{ backgroundColor: "white", borderBlockColor: "var(--place-holder-color)" }}>
                                            <i className="fas fa-pen" style={{ color: "var(--grey-color)" }}></i>
                                        </Button>
                                    </InputGroup>
                                    <Button style={{ width: "250px", alignSelf: "center", marginTop: "30px", backgroundColor: "var(--light-blue-color)", color: "var(--blue-color)", fontWeight: "700", border: "none" }}>
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
                                    <ExchangeHistory />
                                    <ExchangeHistory />
                                    <ExchangeHistory />
                                    <ExchangeHistory />
                                    <ExchangeHistory />
                                    <ExchangeHistory />
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile