import React from "react"
import SideBar from "../Components/SideBar"
import axios from "axios"
import { InputGroup, InputGroupText, Input, Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap"
import BookDisplayCard from "../Components/BookDisplayCard"

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            allData: [],
            isModalOpen: false,
            title: "",
            edition: "",
            author_name: "",
            publisher: "",
            year: "",
            search: ""
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/book").then(data => {
            this.setState({ allData: data.data })
        }).catch(err => console.log(err.message))
    }
    render() {
        const filteredArray = this.state.allData.filter(book => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const addBook = () => {
            this.setState({ isModalOpen: false })
            const user_id = JSON.parse(localStorage.getItem("userDetails")).name
            const data = {
                title: this.state.title,
                author_name: this.state.author_name,
                edition: this.state.edition,
                year: this.state.year,
                publisher: this.state.publisher,
                posted_student_uid: user_id
            }
            axios.post("http://localhost:8000/api/book", data).then(data => {
                console.log(data.data);
            }).catch((err) => console.log(err.message))
        }
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", width: "75%", height: "80%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <InputGroup style={{ width: "200%" }} size="sm">
                                <Input onChange={onChange} name="search" value={this.state.search} placeholder="SEARCH..." />
                                <InputGroupText>
                                    <i className="fa fa-search"></i>
                                </InputGroupText>
                            </InputGroup>
                            {/* <i className="fa fa-sort"></i> */}
                        </div>
                        <div>
                            <Button onClick={() => this.setState({ isModalOpen: true })} size="sm" style={{ marginLeft: "550px" }}>
                                <i className="fa fa-plus" style={{ marginRight: "10px" }}></i>
                                LEND NEW BOOK
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "10px", marginTop: "10px", overflowX: "hidden", overflow: "scroll", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "10px", width: "100%", height: "100%" }}>
                        {filteredArray.map(each => {
                            return (
                                <BookDisplayCard uid={each.uid} each={each} name={each.title} author={each.author_name} publisher={each.publisher} listed={each.posted_student_uid} />
                            )
                        })}
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })} >
                    <ModalHeader toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })}>
                        LEND NEW BOOK
                    </ModalHeader>
                    <ModalBody>
                        <Input onChange={onChange} name="title" value={this.state.title} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="TITLE" type="text" />
                        <Input onChange={onChange} name="author_name" value={this.state.author_name} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="AUTHOR NAME" type="text" />
                        <Input onChange={onChange} name="publisher" value={this.state.publisher} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="PUBLISHER" type="text" />
                        <Input onChange={onChange} name="year" value={this.state.year} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="YEAR" type="text" />
                        <Input onChange={onChange} name="edition" value={this.state.edition} style={{ marginBottom: "10px" }} bsSize="sm" placeholder="EDITION" type="text" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={addBook}>
                            ADD THE BOOK
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Dashboard