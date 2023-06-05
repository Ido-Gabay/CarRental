import React from "react";
import { Facebook, Twitter,Google,Instagram,Linkedin,Github } from "react-bootstrap-icons"; 

export default function Footer() {
  return (
    <footer className="siteFooter bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Facebook/>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Twitter/>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Google/>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Instagram/>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Linkedin/>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <Github/>
          </a>
        </section>
        <section className="userContact">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" htmlFor="form5Example21">Email address</label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className="mb-4">
          <p>
            We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
          </p>
        </section>
      </div>
    </footer>
  );
}
