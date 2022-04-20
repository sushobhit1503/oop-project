import React from "react"
import moment from "moment"
import { ToastBody, Toast, Button } from "reactstrap"

class RequestedCard extends React.Component {
    render() {
        return (
            <div style={{ margin: "7px" }}>
                <Toast style={{ width: "100%", height: "max-content" }}>
                    <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "175px" }}>
                            <div style={{ fontWeight: "600" }}>{this.props.title}</div>
                            <div style={{ color: "var(--grey-color)", fontWeight: "200" }}>BUYER BORROWER NAME</div>
                        </div>
                        <div style={{ width: "90px", alignSelf: "center", display: "flex", fontSize: "10px" }}>
                            <div style={{ fontWeight: "800", textAlign: "center" }}>{moment(this.props.requestedAt).format("DD-MM-YYYY")}</div>
                            <div style={{ width: "10px", height: "10px", borderRadius: "50px", alignSelf: 'center', marginLeft: "10px", backgroundColor: "var(--green-color)" }}></div>
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