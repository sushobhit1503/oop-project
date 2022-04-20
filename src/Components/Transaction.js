import React from "react"
import { ToastBody, Toast } from "reactstrap"

class Transaction extends React.Component {
    render() {
        return (
            <div style={{ margin: "7px" }}>
                <Toast style={{ width: "100%", height: "max-content" }}>
                    <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "200px" }}>
                            <div style={{ fontWeight: "600" }}>{this.props.title}</div>
                            <div style={{ color: "var(--grey-color)", fontWeight: "200" }}>BUYER BORROWER NAME</div>
                        </div>
                        <div style={{ width: "75px", alignSelf: "center", display: "flex", fontSize: "5px" }}>
                            <div style={{ fontWeight: "800", textAlign: "center" }}>{this.props.requestedAt}</div>
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

export default Transaction