import React from "react"
import SideBar from "../Components/SideBar"
import { Card, CardText, CardBody } from "reactstrap"

class MyProfile extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "10px", width: "75%", height: "80%" }}>
                    <div>
                        <Card style={{ marginRight: "10px", height: "100%" }}>
                            <CardBody>
                                <CardText>
                                    Soent.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ height: "100%" }}>
                            <CardBody>
                                <CardText style={{ display: "flex", flexDirection: "column" }}>
                                    <div className="heading">
                                        EXCHANGE HISTORY
                                    </div>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile