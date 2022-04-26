import React from "react"
import axios from "axios"
import SideBar from "../Components/SideBar"
import { InputGroup, InputGroupText, Input } from "reactstrap"
import SavedBooksDisplayCard from "../Components/SavedBooksDisplayCard"

class SavedBooks extends React.Component {
    constructor() {
        super()
        this.state = {
            savedBooks: [],
            searchValue: ""
        }
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("userDetails")).uid
        axios.get(`http://localhost:8000/api/saved-books/${user}`).then(data => {
            this.setState({ savedBooks: data.data })
        }).catch(err => {
            console.log(err.message);
        })
    }
    render() {
        const onChange = (event) => {
            const { name, value } = event.target
            this.setState({ [name]: value })
        }
        const filteredArray = this.state.savedBooks.filter(book => book.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", width: "75%", height: "80%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <InputGroup style={{ width: "200%" }} size="sm">
                                <Input onChange={onChange} value={this.state.searchValue} name="searchValue" placeholder="SEARCH SAVED BOOKS..." />
                                <InputGroupText>
                                    <i className="fa fa-search"></i>
                                </InputGroupText>
                            </InputGroup>
                            {/* <i className="fa fa-sort"></i> */}
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "15px", marginTop: "10px", overflowX: "hidden", overflow: "scroll", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "10px", width: "100%", height: "100%" }}>
                        <h3>
                            SAVED BOOKS
                        </h3>
                        {filteredArray.map(each => {
                            return (
                                <SavedBooksDisplayCard title={each.title} author={each.author_name} savedAt={each.savedAt} available={each.available} posted_uid={each.posted_by_uid} saved_by={each.saved_by} uid={each.uid} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default SavedBooks