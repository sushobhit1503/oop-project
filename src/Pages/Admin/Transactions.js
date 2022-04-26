import axios from "axios"
import React from "react"
import { Badge, Table } from "reactstrap"
import moment from "moment"
import SideBarAdmin from "../../Components/SideBarAdmin"

class Transactions extends React.Component {
    constructor() {
        super()
        this.state = {
            allTransactions: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/all-requests").then(data => {
            const temp = data.data
            console.log(temp);
            axios.get("http://localhost:8000/api/all-requests/pending").then(allData => {
                temp.push(allData)
                console.log(temp);
                this.setState({ allTransactions: temp }, () => console.log(this.state))
            })
        })
    }
    render() {
        return (
            <div>
                <SideBarAdmin />
                <div style={{ marginLeft: "300px" }}>
                    <Table bordered style={{ width: "900px", color: "white" }}>
                        <thead>
                            <tr>
                                <th>
                                    TITLE
                                </th>
                                <th>
                                    LENDER
                                </th>
                                <th>
                                    BORROWER
                                </th>
                                <th>
                                    DURATION
                                </th>
                                <th>
                                    STATUS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allTransactions.map(each => {
                                return (
                                    <tr>
                                        <td>{each.title}</td>
                                        <td>{ }</td>
                                        <td>{each.created_by}</td>
                                        <td>{moment(each.returnDate).from(each.createdAt)}</td>
                                        <td style={{ textAlign: "center" }}>{each.pending ? <Badge color="warning">
                                            PENDING
                                        </Badge> : <Badge color="success">
                                            ACCEPTED
                                        </Badge>}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Transactions