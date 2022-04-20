import React from "react"
import SideBar from "../Components/SideBar"
import axios from "axios"
import { Card, CardText, CardBody, Input, InputGroup, InputGroupText } from "reactstrap"
import RequestedCard from "../Components/RequestedCard"
import PendingRequestedCard from "../Components/PendingRequestCard"

class Requests extends React.Component {
    constructor() {
        super()
        this.state = {
            requests: [],
            pendingRequests: []
        }
    }
    componentDidMount() {
        const user_uid = JSON.parse(localStorage.getItem("userDetails")).uid
        axios.get(`http://localhost:8000/api/requests/${user_uid}`).then(data => {
            this.setState({ requests: data.data })
        }).catch(err => {
            console.log(err.message);
        })
        axios.get(`http://localhost:8000/api/pending-requests/${user_uid}`).then(data => {
            this.setState({ pendingRequests: data.data })
        }).catch(err => {
            console.log(err.message);
        })
    }
    render() {
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "10px", width: "75%", height: "80%" }}>
                    <div style={{ width: "50%" }}>
                        <Card style={{ marginRight: "10px", height: "100%", overflow: "scroll" }}>
                            <CardBody>
                                <CardText>
                                    <div style={{ fontWeight: "700", fontSize: "22px", color: "var(--blue-color)" }}>REQUESTED</div>
                                    <InputGroup size="sm">
                                        <Input placeholder="SEARCH REQUESTS..." />
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
                    <div style={{ width: "50%" }}>
                        <Card style={{ height: "100%", overflow: "scroll" }}>
                            <CardBody>
                                <CardText style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ fontWeight: "700", fontSize: "22px", color: "var(--blue-color)" }}>PENDING REQUESTS</div>
                                    <InputGroup size="sm">
                                        <Input placeholder="SEARCH PENDING REQUESTS..." />
                                        <InputGroupText>
                                            <i className="fa fa-search"></i>
                                        </InputGroupText>
                                    </InputGroup>
                                    {this.state.pendingRequests.map(each => {
                                        return (
                                            <PendingRequestedCard title={each.title} requestedAt={each.requestedAt} />
                                        )
                                    })}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Requests