import React, { Component } from "react";
import Cart from "./session04/Cart";
import Credit from "./session04/Credit";

export default class Session4 extends Component {
  render() {
    return (
      <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      {/* cart */}
                      <Cart />
                      {/* cart */}
                      {/* credit */}
                      <Credit />
                      {/* credit */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
