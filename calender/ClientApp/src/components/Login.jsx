import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="card mx-auto w-50">
                    <div className="card-body">
                        <form className="row g-3" action="/api/Login/Signin">
                            <div className="col-12">
                                <label htmlFor="EMail" className="form-label">E-mail</label>
                                <input type="eMail" className="form-control" id="EMail" name="EMail" placeholder="example@example.com"></input>
                            </div>
                            <div className="col-12">
                                <label htmlFor="Password" className="form-label">Şifre</label>
                                <input type="password" name="Password" className="form-control" id="Password"></input>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Giriş</button>
                            </div>
                            <div className="col-12 text-center">
                                <span className="txt1">
                                    Hesabın yok mu?         
                                </span>

                                <a href="/Signup" className="txt2 hov1">
                                    Sign Up
                                </a>    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default Login;