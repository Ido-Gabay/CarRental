import React from 'react'

import { Twitter, Facebook, Google, EyeSlash } from 'react-bootstrap-icons';


export function Login() {
    return ( 
        <div className="container">
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card py-3 px-2">
                    <p className="text-center mb-3 mt-2 sign_in_header">Sign in by: </p>
                    <div className="row mx-auto ">
                        <div className="col-4">
                            <Twitter className="fab fa-twitter" />
                        </div>
                        <div className="col-4">
                            <Facebook className="fab fa-facebook" />
                        </div>
                        <div className="col-4">
                            <Google className="fab fa-google"   />
                        </div>
                    </div>
                    <div className="division">
                        <div className="row">
                            <div className="col-3"><div className="line l"></div></div>
                            <div className="col-6"><span>Sign in by email</span></div>
                            <div className="col-3"><div className="line r"></div></div>
                        </div>
                    </div>
                    <form className="myform">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                          </div>
                         <div className="form-group password-con">
                            <input type="password" className="form-control" placeholder="Password" />
                            <button className="btn bg-white text-muted">
                            </button>
                          </div>
                          <div className="row">
                              <div className="col-md-6 col-12">
                                  <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <EyeSlash className="eyeslash" />
                                    <label className="form-check-label" for="exampleCheck1">Keep me connected</label>
                                  </div>
                              </div>
                              <div className="col-md-6 col-12 bn forgot-password">Forgot password</div>
                          </div>
                          <div className="form-group mt-3">
                              <button type="button" className="btn btn-block btn-primary btn-lg"><small><i className="far fa-user pr-2"></i>Sign In</small></button>
                          </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}