import React from "react"
import SideBarAdmin from "../../Components/SideBarAdmin"
import moment from "moment"
import { Table, Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import axios from "axios";

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            allUsers: [],
            user: {},
            allRequests: [],
            allPendingRequests: [],
            isModalDetails: false,
            isModalTransactions: false
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/all-user/auth").then(data => {
            this.setState({ allUsers: data.data })
        }).catch(err => console.log(err.message))
    }
    render() {
        const transactionHistory = (each) => {
            this.setState({ isModalTransactions: true, user: each })
            axios.get(`http://localhost:8000/api/pending-requests/${this.state.user.uid}`).then(data => {
                this.setState({ allPendingRequests: data.data })
            }).catch(err => console.log(err.message))
            axios.get(`http://localhost:8000/api/requests/${this.state.user.uid}`).then(data => {
                this.setState({ allRequests: data.data }, () => { console.log(this.state); })
            }).catch(err => console.log(err.message))
        }
        return (
            <div>
                <SideBarAdmin />
                <div style={{ marginLeft: "300px" }}>
                    <Table bordered style={{ width: "900px", color: "white" }}>
                        <thead>
                            <tr>
                                <th>
                                    NAME
                                </th>
                                <th style={{ textAlign: "center" }}>
                                    DETAILS
                                </th>
                                <th style={{ textAlign: "center" }}>
                                    TRANSACTIONS
                                </th>
                                <th style={{ textAlign: "center" }}>
                                    GENERATE REPORT
                                </th>
                                <th style={{ textAlign: "center" }}>
                                    DELETE USER
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allUsers.map(each => {
                                return (
                                    <tr>
                                        <td>{each.name}</td>
                                        <td style={{ textAlign: "center" }}><i onClick={() => this.setState({ isModalDetails: true, user: each })} className="fa fa-eye" style={{ cursor: "pointer" }}></i></td>
                                        <td style={{ textAlign: "center" }}><i onClick={() => transactionHistory(each)} className="fa fa-eye" style={{ cursor: "pointer" }}></i></td>
                                        <td style={{ textAlign: "center" }}><i className="fa fa-download" style={{ cursor: "pointer" }}></i></td>
                                        <td style={{ textAlign: "center" }}><i className="fa fa-trash" style={{ cursor: "pointer" }}></i></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                </div>
                <Modal isOpen={this.state.isModalDetails} toggle={() => this.setState({ isModalDetails: !this.state.isModalDetails })} >
                    <ModalHeader toggle={() => this.setState({ isModalDetails: !this.state.isModalDetails })}>
                        {this.state.user.name}
                    </ModalHeader>
                    <ModalBody>
                        <div><b>NAME: </b> {this.state.user.name}</div>
                        <div><b>EMAIL: </b> {this.state.user.email}</div>
                        <div><b>ADDRESS: </b> {this.state.user.address}</div>
                        <div><b>USERNAME: </b> {this.state.user.username} </div>
                        <div><b>PHONE NUMBER:  </b>{this.state.user.phone_number} </div>
                        <div><b>WALLET: Rs. </b> {this.state.user.wallet}</div>
                        <div><b>USER SINCE: </b> {moment(this.state.user.createdAt).toNow(true)} </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalDetails} toggle={() => this.setState({ isModalDetails: !this.state.isModalDetails })} >
                    <ModalHeader toggle={() => this.setState({ isModalDetails: !this.state.isModalDetails })}>
                        {this.state.user.name}
                    </ModalHeader>
                    <ModalBody>
                        <div><b>NAME: </b> {this.state.user.name}</div>
                        <div><b>EMAIL: </b> {this.state.user.email}</div>
                        <div><b>ADDRESS: </b> {this.state.user.address}</div>
                        <div><b>USERNAME: </b> {this.state.user.username} </div>
                        <div><b>PHONE NUMBER:  </b>{this.state.user.phone_number} </div>
                        <div><b>WALLET: Rs. </b> {this.state.user.wallet}</div>
                        <div><b>USER SINCE: </b> {moment(this.state.user.createdAt).toNow(true)} </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalTransactions} toggle={() => this.setState({ isModalTransactions: !this.state.isModalTransactions })} >
                    <ModalHeader toggle={() => this.setState({ isModalTransactions: !this.state.isModalTransactions })}>
                        {this.state.user.name}
                    </ModalHeader>
                    <ModalBody>
                        <h3>ACCEPTED REQUESTS</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>
                                        TITLE
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        RETURN DATE
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        REQUESTED BY
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        LOCATION
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        DURATION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allRequests.map(each => {
                                    return (
                                        <tr>
                                            <td>{each.title}</td>
                                            <td style={{ textAlign: "center" }}>{moment(each.returnDate).format("DD-MM-YYYY")}</td>
                                            <td style={{ textAlign: "center" }}>{each.created_by}</td>
                                            <td style={{ textAlign: "center" }}>{each.location}</td>
                                            <td style={{ textAlign: "center" }}>{moment(each.returnDate).from(each.createdAt)}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                        <h3>PENDING REQUESTS</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>
                                        TITLE
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        RETURN DATE
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        REQUESTED BY
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        LOCATION
                                    </th>
                                    <th style={{ textAlign: "center" }}>
                                        DURATION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.allPendingRequests.map(each => {
                                    return (
                                        <tr>
                                            <td>{each.name}</td>
                                            <td style={{ textAlign: "center" }}>{moment(each.returnDate).format("DD-MM-YYYY")}</td>
                                            <td style={{ textAlign: "center" }}>{each.created_by}</td>
                                            <td style={{ textAlign: "center" }}>{each.location}</td>
                                            <td style={{ textAlign: "center" }}>{moment(each.returnDate).from(each.createdAt)}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Users