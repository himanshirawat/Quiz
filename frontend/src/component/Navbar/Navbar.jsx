import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image.png";
import { useQuiz } from "../../context";


export const Navbar = () => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { quizDispatch } = useQuiz();

    const handleAuthClick = () => {
        if (token){
            localStorage.clear();
            quizDispatch({
                type: "QUIT"
            })
        }
        navigate("/auth/login");
    }

    return (
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                <img className="icon mr-1" src={logo} alt="logo" />
                <h1 className="heading-title">
                    <Link to="/" className="link">Quizify</Link>
                </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    <li className="list-item-inline">
                        <Link to="/" className="link cursor" >Home</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/auth/login" className="link cursor" onClick={handleAuthClick}> {token ? "Logout": "Login"} </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}