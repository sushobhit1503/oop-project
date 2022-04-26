import React from "react"
import axios from "axios";
import { ToastBody, Toast, Button, Modal, ModalBody, ModalFooter, ModalHeader, Input } from "reactstrap"

class BookDisplayCard extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            isModalOpen: false,
            place: "",
            date: null,
            walletModal: false,
            wallet: 0
        }
    }
    render() {
        const savedBooks = () => {
            const user = JSON.parse(localStorage.getItem("userDetails")).uid
            const data = {
                title: this.props.name,
                author_name: this.props.author,
                posted_by_uid: this.props.posted_student_uid,
                available: true,
                book_uid: this.props.uid,
                saved_by: user
            }
            axios.post("http://localhost:8000/api/saved-books", data).then(data => {
                console.log(data.data);
            })
        }
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const checkWallet = () => {
            const user = JSON.parse(localStorage.getItem("userDetails")).wallet
            if (user == 0)
                this.setState({ walletModal: true })
        }
        const addRequest = () => {
            const user = JSON.parse(localStorage.getItem("userDetails"))
            const data = {
                title: this.props.name,
                pending: true,
                created_by: user.name,
                created_by_uid: user.uid,
                book_uid: this.props.uid,
                returnDate: this.state.date,
                location: this.state.place
            }
            axios.post("http://localhost:8000/api/requests", data).then(data => {

            }).catch(err => {
                console.log(err.message)
            })
        }
        return (
            <div style={{ margin: "5px" }}>
                <Toast>
                    <ToastBody style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                                <div style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
                                    {this.props.name}
                                </div>
                                <div style={{ fontSize: "15px", color: "var(grey-color)" }}>
                                    AUTHOR: {this.props.author}
                                </div>
                                <div style={{ fontSize: "15px", color: "var(grey-color)" }}>
                                    PUBLISHER: {this.props.publisher}
                                </div>
                                <div style={{ fontSize: "15px", color: "var(grey-color)" }}>
                                    LISTED BY: {this.props.listed}
                                </div>
                            </div>
                            <div>
                                <i onClick={savedBooks} className="far fa-bookmark" style={{ fontSize: "30px" }}></i>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={checkWallet} style={{ backgroundColor: "var(--light-blue-color)", color: "var(--blue-color)", fontWeight: "600", border: "none", width: "175px" }}>
                                REQUEST
                            </Button>
                        </div>
                    </ToastBody>
                </Toast>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })} >
                    <ModalHeader toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })}>
                        CREATE NEW REQUEST
                    </ModalHeader>
                    <ModalBody>
                        <Input onChange={onChange} name="place" value={this.state.place} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="PLACE OF EXCHANGE" type="text" />
                        <Input onChange={onChange} name="date" value={this.state.date} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="DATE OF RETURN" type="datetime-local" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={addRequest}>
                            ADD REQUEST
                        </Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.walletModal} toggle={() => { this.setState({ walletModal: !this.state.walletModal }) }} >
                    <ModalHeader toggle={() => this.setState({ walletModal: !this.state.walletModal })}>
                        ADD MONEY TO WALLET
                    </ModalHeader>
                    <ModalBody>
                        You can't request with Rs. 0 in the wallet. Please add some money.
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

export default BookDisplayCard