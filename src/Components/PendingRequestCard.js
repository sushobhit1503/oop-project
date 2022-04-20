import React from "react"
import { ToastBody, Toast, Button } from "reactstrap"

class PendingRequestedCard extends React.Component {
    render() {
        return (
            <div style={{ margin: "7px" }}>
                <Toast style={{ width: "100%", height: "max-content" }}>
                    <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "200px" }}>
                            <div style={{ fontWeight: "600" }}>{this.props.title}</div>
                            <div style={{ color: "var(--grey-color)", fontWeight: "200" }}>BUYER BORROWER NAME</div>
                        </div>
                        <div style={{ width: "75px", alignSelf: "center", display: "flex", fontSize: "10px" }}>
                            <div style={{ fontWeight: "800", textAlign: "center" }}>{this.props.requestedAt}</div>
                        </div>
                        <div style={{ alignSelf: "center" }}>
                            <i className="fa fa-check-circle" style={{ fontSize: "20px", color: "var(--grey-color)", marginRight: "10px" }}></i>
                            <i className="fas fa-times-circle" style={{ fontSize: "20px", color: "var(--grey-color)" }}></i>
                        </div>
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

export default PendingRequestedCard