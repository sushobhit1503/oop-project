import React from "react"
import SideBar from "../Components/SideBar"
import { InputGroup, InputGroupText, Input, Button, Toast, ToastBody, Modal, ModalBody, ModalFooter, ModalHeader, Card, CardBody, CardFooter, CardText } from "reactstrap"
import Transaction from "../Components/Transaction"
import axios from "axios"

class Wallet extends React.Component {
    constructor() {
        super()
        this.state = {
            transactionsDebit: [],
            transactionsCredit: [],
            amount: 0,
            wallet: null,
            isModalOpen: false,
            requestValue: "",
            pendingValue: ""
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("userDetails"))
        this.setState({ amount: user.wallet })
        axios.get(`http://localhost:8000/api/transactions/credit/${user.uid}`).then(each => {
            this.setState({ transactionsCredit: each.data })
        }).catch(err => {
            console.log(err.message);
        })
        axios.get(`http://localhost:8000/api/transactions/debit/${user.uid}`).then(each => {
            this.setState({ transactionsDebit: each.data })
        }).catch(err => {
            console.log(err.message);
        })
    }
    render() {
        const onChange = event => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const filteredArray = this.state.transactionsDebit.filter(book => book.title.toLowerCase().includes(this.state.requestValue.toLowerCase()))
        const filteredArray1 = this.state.transactionsCredit.filter(book => book.title.toLowerCase().includes(this.state.pendingValue.toLowerCase()))
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", width: "75%", height: "80%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <InputGroup style={{ width: "200%" }} size="sm">
                                <Input placeholder="SEARCH TRANSACTION..." />
                                <InputGroupText>
                                    <i className="fa fa-search"></i>
                                </InputGroupText>
                            </InputGroup>
                            {/* <i className="fa fa-sort"></i> */}
                        </div>
                        <div>
                            <Button onClick={() => this.setState({ isModalOpen: true })} size="sm" style={{ marginLeft: "550px" }}>
                                <i className="fa fa-plus" style={{ marginRight: "10px" }}></i>
                                ADD MONEY
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", marginTop: "10px", overflowX: "hidden", overflow: "scroll", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "10px", width: "100%", height: "100%" }}>
                        <Toast style={{ width: "100%", height: "60px" }}>
                            <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ color: "black", fontSize: "20px", fontWeight: "800" }}>
                                    AVAILABLE BALANCE:
                                </div>
                                <div style={{ color: "black", fontSize: "20px", fontWeight: "800" }}>
                                    Rs: {this.state.amount}
                                </div>
                                <Card style={{ marginRight: "10px", height: "100%", overflow: "scroll" }}>
                                    <CardBody>
                                        <CardText>
                                            <div style={{ fontWeight: "700", fontSize: "22px", color: "var(--blue-color)" }}>REQUESTED</div>
                                            <InputGroup size="sm">
                                                <Input onChange={onChange} value={this.state.requestValue} name="requestValue" placeholder="SEARCH REQUESTS..." />
                                                <InputGroupText>
                                                    <i className="fa fa-search"></i>
                                                </InputGroupText>
                                            </InputGroup>
                                            {filteredArray.map(each => {
                                                return (
                                                    <Transaction title={each.title} requestedAt={each.requestedAt} />
                                                )
                                            })}
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "10px", width: "75%", height: "80%" }}>
                                    <div>
                                        <Card style={{ marginRight: "10px", height: "100%", overflow: "scroll" }}>
                                            <CardBody>
                                                <CardText>
                                                    <div style={{ fontWeight: "700", fontSize: "22px", color: "var(--blue-color)" }}>REQUESTED</div>
                                                    <InputGroup size="sm">
                                                        <Input onChange={onChange} value={this.state.requestValue} name="requestValue" placeholder="SEARCH REQUESTS..." />
                                                        <InputGroupText>
                                                            <i className="fa fa-search"></i>
                                                        </InputGroupText>
                                                    </InputGroup>
                                                    {filteredArray.map(each => {
                                                        return (
                                                            <Transaction title={each.title} requestedAt={each.requestedAt} />
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
                                                        <Input name="pendingValue" onChange={onChange} value={this.state.pendingValue} placeholder="SEARCH PENDING REQUESTS..." />
                                                        <InputGroupText>
                                                            <i className="fa fa-search"></i>
                                                        </InputGroupText>
                                                    </InputGroup>
                                                    {filteredArray1.map(each => {
                                                        return (
                                                            <Transaction title={each.title} requestedAt={each.requestedAt} />
                                                        )
                                                    })}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                            </ToastBody>
                        </Toast>

                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={() => { this.setState({ isModalOpen: !this.state.isModalOpen }) }} >
                    <ModalHeader toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })}>
                        ADD MONEY TO WALLET
                    </ModalHeader>
                    <ModalBody>
                        <Input onChange={onChange} name="wallet" value={this.state.wallet} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="AMOUNT in Rs." type="number" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={function noRefCheck() { }}>
                            ADD TO WALLET
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Wallet