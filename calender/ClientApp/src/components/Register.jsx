import React from 'react'

class Register extends React.Component {
    render() {
        return (
            <div>
                <div className="card mx-auto w-50">
                    <div className="card-body">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Ad</label>
                                <input type="text" class="form-control" id="name"></input>
                            </div>
                            <div class="col-md-6">
                                <label for="surName" class="form-label">Soyad</label>
                                <input type="text" class="form-control" id="surName"></input>
                            </div>
                            <div class="col-12">
                                <label for="eMail" class="form-label">E-mail</label>
                                <input type="email" class="form-control" id="eMail" placeholder="example@example.com"></input>
                            </div>
                            <div class="col-12">
                                <label for="password" class="form-label">Şifre</label>
                                <input type="password" class="form-control" id="password"></input>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Kaydol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register;