import React from "react"
import { ToastBody, Toast, Button } from "reactstrap"

class BookDisplayCard extends React.Component {
    render() {
        return (
            <div style={{ margin: "5px" }}>
                <Toast>
                    <ToastBody style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
                                <div style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
                                    {this.props.name}
                                </div>
                                <div style={{ fontSize: "15px", color: "var(grey-color)" }}>
                                    AUTHOR: {this.props.author}
                                </div>
                                <div style={{ fontSize: "15px", color: "var(grey-color)" }}>
                                    PUBLISHER: {this.props.publisher}
                                </div>
                                <div style={{ fontSize: "15px", color: "var(grey-color)" }}>
                                    LISTED BY: {this.props.listed}
                                </div>
                            </div>
                            <div>
                                <i className="fa fa-bookmark" style={{ fontSize: "30px" }}></i>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button style={{ backgroundColor: "var(--light-blue-color)", color: "var(--blue-color)", fontWeight: "600", border: "none", width: "175px" }}>
                                REQUEST
                            </Button>
                        </div>
                    </ToastBody>
                </Toast>
            </div>
        )
    }
}

export default BookDisplayCard