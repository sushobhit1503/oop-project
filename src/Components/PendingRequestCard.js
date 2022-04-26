import React from "react"
import { ToastBody, Toast, Button } from "reactstrap"
import moment from "moment"
import axios from "axios"

class PendingRequestedCard extends React.Component {
    constructor() {
        super()
    }
    render() {
        const acceptRequests = () => {
            axios.put(`http://localhost:8000/api/accept-requests/${this.props.each.book_uid}/${this.props.each.uid}`).then(data => {

            }).catch(err => console.log(err.message))
        }
        const deleteRequests = () => {
            axios.delete(`http://localhost:8000/api/delete-requests/${this.props.each.uid}`).then(() => {

            }).catch(err => console.log(err.message))
        }
        return (
            <div style={{ margin: "7px" }}>
                <Toast style={{ width: "100%", height: "max-content" }}>
                    <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "200px" }}>
                            <div style={{ fontWeight: "600" }}>{this.props.title}</div>
                            <div style={{ color: "var(--grey-color)", fontWeight: "200" }}>BUYER BORROWER NAME</div>
                        </div>
                        <div style={{ width: "75px", alignSelf: "center", display: "flex", fontSize: "12px" }}>
                            <div style={{ fontWeight: "800", textAlign: "center" }}> {moment(this.props.requestedAt).format("DD-MM-YYYY")}</div>
                        </div>
                        <div style={{ alignSelf: "center" }}>
                            <i onClick={acceptRequests} className="fa fa-check-circle" style={{ fontSize: "20px", color: "var(--grey-color)", cursor: "pointer", marginRight: "10px" }}></i>
                            <i onClick={deleteRequests} className="fas fa-times-circle" style={{ fontSize: "20px", color: "var(--grey-color)", cursor: "pointer" }}></i>
                        </div>
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

export default PendingRequestedCard