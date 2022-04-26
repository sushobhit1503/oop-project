import React from "react"
import moment from "moment"
import { ToastBody, Toast, Button } from "reactstrap"
import axios from "axios"

class RequestedCard extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    render() {
        const extendRequest = () => { }
        return (
            <div style={{ margin: "7px" }}>
                <Toast style={{ width: "100%", height: "max-content" }}>
                    <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "175px" }}>
                            <div style={{ fontWeight: "600" }}>{this.props.title}</div>
                            <div style={{ color: "var(--grey-color)", fontWeight: "200" }}>BUYER BORROWER NAME</div>
                            <div style={{ width: "90px", alignSelf: "center", display: "flex", fontSize: "15px" }}>
                                <div style={{ fontWeight: "600", textAlign: "center" }}>{moment(this.props.requestedAt).format("DD-MM-YYYY")}</div>
                            </div>
                        </div>
                        <div>
                            <Button onClick={extendRequest} color="success" style={{ fontWeight: "500", width: "max-content", border: "none" }}>
                                EXTEND
                            </Button>
                        </div>
                        <div style={{ alignSelf: "center" }}>
                            <i className="fa fa-trash" style={{ fontSize: "25px", color: "var(--grey-color)" }}></i>
                        </div>
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

export default RequestedCard