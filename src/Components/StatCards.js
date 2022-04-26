import React from "react"
import { CardBody, Card } from "reactstrap"

class StatCards extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ padding: "15px", width: "200px", height: "170px", margin: "20px", display: "flex", justifyContent: "center", marginTop: "100px", flexDirection: "column" }}>
                    <CardBody>
                        <h6 style={{ textAlign: "center", height: "50px" }}>{this.props.title}</h6>
                        <h1 style={{ textAlign: "center" }}>{this.props.number}</h1>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default StatCards