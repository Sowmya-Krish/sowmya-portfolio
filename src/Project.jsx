import React from "react";
import "../src/project.css";
import project1 from "../src/assets/Flipkart.jpg";

import project2 from "../src/assets/email1.png";

import project3 from "../src/assets/petty cash.png";
import project4 from "../src/assets/todo.webp";

function Project() {
  return (
    <>
      <div id="project">
        <div
          class="container card bg-transparent mt-1 p-5  "
          style={{
            border: "1px solid #ce37ad",

            boxShadow: " rgba(90, 56, 88, 0.75) 12px 8px 12px",
          }}
        >
          <h1 class="sub-title text-center myname">Projects</h1>
          <hr />

{/*           <div class="card border-light mb-3 bg-transparent">
            <div class="card-body  text-success">
              <h5 class="card-title text-center fw-bold  text-uppercase">
                {" "}
                Common Credentials
              </h5>
              <hr />
              <p class="card-text text-center text-light">
                <span className="fw-bold  myname text-uppercase">User :-</span>{" "}
                demo@gmail.com || password:123456789
              </p>
            </div>
          </div> */}
         <p style={{ color: "white" , fontSize:"30px", textAlign:"center"}}>
          Here are a few projects I've worked on recently😎
        </p>

          <section id="portfolio" class="portfolio">
            <div class="container">
              <div class="row portfolio-container">
                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project1} class="img-fluid" alt="" />
<br/>
                    <div className="card-title text-center pt-2">
                      <h4>FLIPKART CLONE</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      A MERN stack application e-commerce site that is build using React, MUI, 
              NodeJS, ExpressJS, MongoDB, PayTM payment integration{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/Sowmya-Krish/flipkart-frontend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://starlit-begonia-346dd5.netlify.app"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/Sowmya-Krish/Flipkart--Backend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card  bg-transparent border-dark">
                    <img src={project2} class="img-fluid" alt="" height={"20px"} />
                    <div className="card-title text-center pt-2"><br/>
                      <h4>EMAIL APP</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      A simple email Application using MERN stack (ReactJS, MongoDB, Express JS, Node JS) with SMTP.JS and yopmail
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/Sowmya-Krish/Email-app-Frontend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://tranquil-basbousa-492899.netlify.app"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/Sowmya-Krish/Email-app-backend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project3} class="img-fluid" alt="" />

                    <div className="card-title text-center pt-2"><br/>
                      <h4>PETTYCASH APP</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}
                      Application is build using ReactJs, NodeJs, ExpressJs, MongoDB, Mongoose{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/Sowmya-Krish/PettyCash-Frontend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://rococo-wisp-66ff4f.netlify.app/"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/Sowmya-Krish/PettyCash-Backend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 portfolio-item filter-app">
                  <div class="card bg-transparent border-dark">
                    <img src={project4} class="img-fluid" alt="" />

                    <div className="card-title text-center pt-2"><br/>
                      <h4>TODO LIST APP</h4>
                    </div>
                    <p className="text-center p-1">
                      {" "}<br/>
                      Small application is build using ReactJs, NodeJs, ExpressJs, MongoDB, Mongoose{" "}
                    </p>
                    <div className="card-footer text-center text-dark">
                      <a
                        href="https://github.com/Sowmya-Krish/TODO-frontend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="F-code"
                      >
                        <i class="fa fa-github text-light"> F-end</i>
                      </a>
                      <a
                        href="https://neon-naiad-27a467.netlify.app/"
                        target="_blank"
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        class="portfolio-details-lightbox me-4"
                        title="Deploy link"
                      >
                        <i class="fa fa-link text-success"> Live</i>
                      </a>
                      <a
                        href="https://github.com/Sowmya-Krish/TODO-Backend"
                        target="_blank"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox me-4"
                        title="B-code"
                      >
                        <i class="fa fa-github text-light"> B-end</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Project;
