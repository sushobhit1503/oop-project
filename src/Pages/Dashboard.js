import React from "react"
import SideBar from "../Components/SideBar"
import axios from "axios"
import { InputGroup, InputGroupText, Input, Button } from "reactstrap"
import BookDisplayCard from "../Components/BookDisplayCard"

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            allData: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/book").then(data => {
            this.setState({ allData: data.data })
        }).catch(err => console.log(err.message))
    }
    render() {
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", width: "75%", height: "80%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <InputGroup style={{ width: "200%" }} size="sm">
                                <Input placeholder="SEARCH..." />
                                <InputGroupText>
                                    <i className="fa fa-search"></i>
                                </InputGroupText>
                            </InputGroup>
                            {/* <i className="fa fa-sort"></i> */}
                        </div>
                        <div>
                            <Button size="sm" style={{ marginLeft: "550px" }}>
                                <i className="fa fa-plus" style={{ marginRight: "10px" }}></i>
                                LEND NEW BOOK
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "10px", marginTop: "10px", overflowX: "hidden", overflow: "scroll", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "10px", width: "100%", height: "100%" }}>
                        {this.state.allData.map(each => {
                            return (
                                <BookDisplayCard name={each.title} author={each.author_name} publisher={each.publisher} listed={each.name} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard