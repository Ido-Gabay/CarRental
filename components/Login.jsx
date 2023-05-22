import React from 'react'

import { Twitter, Facebook, Google, EyeSlash } from 'react-bootstrap-icons';

export function Login() {
    return ( 
        <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card py-3 px-2">
                    <p class="text-center mb-3 mt-2 sign_in_header">Sign in by: </p>
                    <div class="row mx-auto ">
                        <div class="col-4">
                            <Twitter class="fab fa-twitter" />
                        </div>
                        <div class="col-4">
                            <Facebook class="fab fa-facebook" />
                        </div>
                        <div class="col-4">
                            <Google class="fab fa-google"   />
                        </div>
                    </div>
                    <div class="division">
                        <div class="row">
                            <div class="col-3"><div class="line l"></div></div>
                            <div class="col-6"><span>Sign in by email</span></div>
                            <div class="col-3"><div class="line r"></div></div>
                        </div>
                    </div>
                    <form class="myform">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" />
                          </div>
                         <div class="form-group password-con">
                            <input type="password" class="form-control" placeholder="Password" />
                            <button class="btn bg-white text-muted">
                            </button>
                          </div>
                          <div class="row">
                              <div class="col-md-6 col-12">
                                  <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <EyeSlash className="eyeslash" />
                                    <label class="form-check-label" for="exampleCheck1">Keep me connected</label>
                                  </div>
                              </div>
                              <div class="col-md-6 col-12 bn forgot-password">Forgot password</div>
                          </div>
                          <div class="form-group mt-3">
                              <button type="button" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i>Sign In</small></button>
                          </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}