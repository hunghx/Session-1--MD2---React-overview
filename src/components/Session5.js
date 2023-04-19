import React, { Component } from "react";
import Navbar from "./session05/Navbar";
import Carousel from "./session05/Carousel";
import About from "./session05/About";
import Services from "./session05/Services";
import Team from "./session05/Team";
import FAQs from "./session05/FAQs";
import Contact from "./session05/Contact";
import Footer from "./session05/Footer";
import Modal from "./session05/Modal";
import BackToTop from "./session05/BackToTop";

export default class Session5 extends Component {
  render() {
    return (
      <>
        <>
          {/* Navbar Start */}
          <Navbar />
          {/* Navbar End */}
          {/* Carousel Start */}
          <Carousel />
          {/* Carousel End */}
          {/* About Start */}
          <About />
          {/* About End */}
          {/* Service Start */}
          <Services />
          {/* Service End */}
          {/* Team Start */}
          <Team />
          {/* Team End */}
          {/* FAQs Start */}
          <FAQs />
          {/* FAQs End */}
          {/* Contact Start */}
          <Contact />
          {/* Contact End */}
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
          {/* Modal */}
          <Modal />
          {/* Modal */}
          {/* Back to Top */}
          <BackToTop />
        </>
      </>
    );
  }
}
