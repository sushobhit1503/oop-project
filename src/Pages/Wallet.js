import React from "react"
import SideBar from "../Components/SideBar"
import { InputGroup, InputGroupText, Input, Button, Toast, ToastBody } from "reactstrap"

class Wallet extends React.Component {
    render() {
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", width: "75%", height: "80%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <InputGroup style={{ width: "200%" }} size="sm">
                                <Input placeholder="SEARCH TRANSACTION..." />
                                <InputGroupText>
                                    <i className="fa fa-search"></i>
                                </InputGroupText>
                            </InputGroup>
                            {/* <i className="fa fa-sort"></i> */}
                        </div>
                        <div>
                            <Button size="sm" style={{ marginLeft: "550px" }}>
                                <i className="fa fa-plus" style={{ marginRight: "10px" }}></i>
                                ADD MONEY
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", marginTop: "10px", overflowX: "hidden", overflow: "scroll", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "10px", width: "100%", height: "100%" }}>
                        <Toast style={{ width: "100%", height: "60px" }}>
                            <ToastBody style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ color: "black", fontSize: "20px", fontWeight: "800" }}>
                                    AVAILABLE BALANCE:
                                </div>
                                <div style={{ color: "black", fontSize: "20px", fontWeight: "800" }}>
                                    Rs. 600
                                </div>
                            </ToastBody>
                        </Toast>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallet