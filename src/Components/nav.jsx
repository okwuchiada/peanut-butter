import "../styles/nav.css";


export default function Nav(){
    return (
        <>
        <nav className="nav-bar">
            <ul className="nav-links">
                <li><a href="home"> Home </a></li>
                <li><a href="todo"> Todo </a></li>
                <li><a href="login"> Login </a></li>
                <li><a href="register"> Register </a></li>
            </ul>
        </nav>
        </>

    )
}