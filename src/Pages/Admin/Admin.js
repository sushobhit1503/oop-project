import axios from "axios"
import React from "react"
import SideBarAdmin from "../../Components/SideBarAdmin"
import StatCards from "../../Components/StatCards"


class Admin extends React.Component {
    constructor() {
        super()
        this.state = {
            user: 0,
            books: 0,
            transactions: 0,
            pendingRequests: 0,
            requests: 0
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/book").then(data => {
            this.setState({ books: data.data.length })
        }).catch(err => console.log(err.message))
        axios.get("http://localhost:8000/all-user/auth").then(data => {
            this.setState({ user: data.data.length })
        }).catch(err => console.log(err.message))
        axios.get("http://localhost:8000/api/all-requests").then(data => {
            this.setState({ requests: data.data.length })
        }).catch(err => console.log(err.message))
        axios.get("http://localhost:8000/api/all-requests/pending").then(data => {
            this.setState({ pendingRequests: data.data.length })
        }).catch(err => console.log(err.message))
    }
    render() {
        return (
            <div>
                <SideBarAdmin />
                <div style={{ marginLeft: "300px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <StatCards title="TOTAL USERS" number={this.state.user} />
                    <StatCards title="TOTAL BOOKS PUBLISHED" number={this.state.books} />
                    <StatCards title="TOTAL PENDING REQUESTS" number={this.state.pendingRequests} />
                    <StatCards title="TOTAL REQUESTS" number={this.state.requests} />
                </div>
            </div>
        )
    }
}

export default Admin