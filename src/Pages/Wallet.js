import React from "react"
import SideBar from "../Components/SideBar"
import { InputGroup, InputGroupText, Input, Button, Toast, ToastBody, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"

class Wallet extends React.Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            amount: 0,
            wallet: null,
            isModalOpen: false
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("userDetails")).wallet
        this.setState({ amount: user })
    }
    render() {
        const onChange = event => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
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