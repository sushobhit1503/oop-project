import React from "react"
import axios from "axios";
import { ToastBody, Toast, Button } from "reactstrap"

class BookDisplayCard extends React.Component {
    render() {
        const savedBooks = () => {
            const user = JSON.parse(localStorage.getItem("userDetails")).uid
            const data = {
                title: this.props.name,
                author_name: this.props.author,
                posted_by_uid: this.props.posted_student_uid,
                available: true,
                book_uid: this.props.uid,
                saved_by: user
            }
            axios.post("http://localhost:8000/api/saved-books", data).then(data => {
                console.log(data.data);
            })
        }
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
                                <i onClick={savedBooks} className="far fa-bookmark" style={{ fontSize: "30px" }}></i>
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