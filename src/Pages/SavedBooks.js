import React from "react"
import SideBar from "../Components/SideBar"
import { InputGroup, InputGroupText, Input } from "reactstrap"
import SavedBooksDisplayCard from "../Components/SavedBooksDisplayCard"

class SavedBooks extends React.Component {
    render() {
        return (
            <div>
                <SideBar />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px", position: "absolute", margin: "10px 15px 0px 300px", width: "75%", height: "80%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <InputGroup style={{ width: "200%" }} size="sm">
                                <Input placeholder="SEARCH SAVED BOOKS..." />
                                <InputGroupText>
                                    <i className="fa fa-search"></i>
                                </InputGroupText>
                            </InputGroup>
                            {/* <i className="fa fa-sort"></i> */}
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "15px", marginTop: "10px", overflowX: "hidden", overflow: "scroll", backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "10px", width: "100%", height: "100%" }}>
                        <h3>
                            SAVED BOOKS
                        </h3>
                        <SavedBooksDisplayCard mode="REQUEST" />
                        <SavedBooksDisplayCard mode="NOT AVAILABLE" />
                        <SavedBooksDisplayCard mode="REQUEST" />
                        <SavedBooksDisplayCard mode="REQUEST" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SavedBooks