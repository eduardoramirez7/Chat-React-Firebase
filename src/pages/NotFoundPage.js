import { Jumbotron } from "react-bootstrap";
import NavBar from "../components/NavBar";

export default function NotFoundPage() {
    return (
        <div>
            <NavBar />
            <Jumbotron>
                <h1>Error 404 Not Found Page</h1>
            </Jumbotron>

        </div>
    )
}