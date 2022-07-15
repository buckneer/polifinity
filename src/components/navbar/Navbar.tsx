import './Navbar.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Navbar() {

    const [term, setTerm] = useState("");
    let navigate = useNavigate();


    let handleSearch = (e: any) => {
        e.preventDefault()
        navigate(`/search?q=${term}`)
    }

    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <FontAwesomeIcon size="2x" icon={faUtensils} /> &nbsp; Polifinity Menu
                </Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={(e) => {setTerm(e.target.value)}}
                    value={term}/>
                        <button className="btn btn-outline-light" type="submit" onClick={e => {handleSearch(e)}}>Search</button>
                </form>
            </div>
        </nav>
    )
}
