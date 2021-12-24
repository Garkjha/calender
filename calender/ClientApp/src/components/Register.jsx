import React from 'react'

class Register extends React.Component {
    render() {
        return (
            <div>
                <div className="card mx-auto w-50">
                    <div className="card-body">
                        <form className="row g-3" action="/api/Login/Register">
                            <div className="col-md-6">
                                <label htmlFor="Name" className="form-label">Ad</label>
                                <input type="text" name="Name" className="form-control" id="Name"></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="SurName" className="form-label">Soyad</label>
                                <input type="text" className="form-control" name="SurName" id="SurName"></input>
                            </div>
                            <div className="col-12">
                                <label htmlFor="EMail" className="form-label">E-mail</label>
                                <input type="eMail" className="form-control" id="EMail" name="EMail" placeholder="example@example.com"></input>
                            </div>
                            <div className="col-12">
                                <label htmlFor="Password" className="form-label">Şifre</label>
                                <input type="password" name="Password" className="form-control" id="Password"></input>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Kaydol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register;