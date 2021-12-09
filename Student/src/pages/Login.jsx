import React, { useState } from "react";
import { Layout } from "antd";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(event) {
    if (event.target.name === "AdmNo") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }
  function handleSubmit(event) {
    console.log(email);
    console.log(password);
    event.preventDefault();
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <section style={{ backgroundColor: "#002140" }}>
          <div className="container-fluid">
            <div
              className="card"
              style={{ margin: "10% 10%", borderRadius: "1rem" }}
            >
              <div className="card-body">
                <div class="row">
                  <div class="col-xs-12 col-md-6 col-lg-6 text-center">
                    <img
                      class="img-fluid"
                      src="https://parent.iitism.ac.in//assets/img/iit.png"
                      alt=""
                      style={{ width: "50%", marginTop: "10%" }}
                    />
                    <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/a15.pdf">
                      <p style={{ color: "red" }}>
                        If you are unable to Login or having any Academic
                        related grievances please click here
                      </p>
                    </a>
                  </div>
                  <div class="col-xs-12 col-md-6 col-lg-6 text-center">
                    <div class="card">
                      <div
                        class="card-header h6"
                        style={{ fontWeight: "bold", fontFamily: "Open Sans" }}
                      >
                        Thesis Management System
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="form-group" style={{ margin: "10%" }}>
                            <input
                              name="AdmNo"
                              onChange={handleChange}
                              class="form-control"
                              placeholder="Enter Admission Number"
                            />
                          </div>
                          <div class="form-group" style={{ margin: "10%" }}>
                            <input
                              type="password"
                              name="password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div class="form-group" style={{ margin: "10%" }}>
                            <div
                              class="g-recaptcha"
                              data-sitekey="6LfTVI0dAAAAABKWPpH9gvbfMcPhMsnnPPlTlmJK"
                            ></div>
                          </div>
                            <button
                              type="submit"
                              style={{ width: "100%", marginTop: "5%" }}
                              class="btn btn-primary"
                              onClick={handleSubmit}
                            >
                              Login
                            </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Layout>
  );
}
