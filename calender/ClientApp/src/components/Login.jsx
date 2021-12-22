import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="card mx-auto w-50">
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com"></input>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword"></input>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark justify-content-end">Giriş</button>
                    </div>
  </div>
                </div>
                
        )
    }
}

export default Login;