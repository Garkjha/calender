import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="##">Calender</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Home">Ana Sayfa <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/About">Hakkında</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">İletişim</Link>
                            </li>

                        </ul>

                        
                    </div>
                    <Link className="nav-link text-white" to="/Signin">Sign in</Link>
                    <Link className="nav-link text-white" to="/Signup">Sign up</Link>
                    
                </nav>
            </div>
            )
    }
}

export default withRouter(Navbar);