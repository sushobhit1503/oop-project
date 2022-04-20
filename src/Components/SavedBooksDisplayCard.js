import React from "react"
import moment from "moment"
import { ToastBody, Toast, Button } from "reactstrap"

class SavedBooksDisplayCard extends React.Component {
    render() {
        return (
            <div style={{ margin: "5px" }}>
                <Toast style={{ width: "100%", height: "max-content" }}>
                    <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "300px" }}>
                            <div style={{ fontWeight: "600" }}>{this.props.title}</div>
                            <div style={{ color: "var(--grey-color)", fontWeight: "600" }}>{this.props.author}</div>
                            <div style={{ fontWeight: "100" }}>POSTED BY: {this.props.posted_uid}</div>
                        </div>
                        <div style={{ width: "105px", alignSelf: "center" }}>
                            <div style={{ fontWeight: "800", textAlign: "center" }}>SAVE DATE</div>
                            <div style={{ color: "var(--grey-color)", fontWeight: "600", textAlign: "center" }}>{moment(this.props.savedAt).format("DD-MM-YYYY")}</div>
                        </div>
                        <div style={{ alignSelf: "center" }}>
                            <Button style={{ backgroundColor: "var(--light-blue-color)", color: "var(--blue-color)", fontWeight: "500", width: "200px", border: "none" }}>
                                {this.props.available ? <div>REQUEST</div> : <div>NOT AVAILABLE</div>}
                            </Button>
                        </div>
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

export default SavedBooksDisplayCard