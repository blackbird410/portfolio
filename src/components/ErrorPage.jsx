import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { getLinks } from "./Homepage";

export default function ErrorPage() {

    return (
            <div className="">
                <Navbar links={getLinks("ErrorPage")} />
                <p>Sorry, this page is not available!</p>
                <Link to={"/"}>Go back home</Link>
            </div>
        );
};
