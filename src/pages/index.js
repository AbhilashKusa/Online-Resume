import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">MY MAJOR WORK</h3>
              <br />
              <p>
                <b>
                  {' '}
                  I actually worked for a Real time Project as a freeLancer for
                  past 3 months.which deals with front end development. Where
                  the appllications backEnd is in still process.The application
                  is online learning platform..{' '}
                </b>
              </p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">BeatMaker</h3>
              <br />
              <p>
                I Made a fun projet with vanilla javascript, which is deployed
                in Netlify <br />
                <a href="https://beats-js.netlify.app/">
                  <b>BeatMaker</b>
                </a>
              </p>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Movies app</h3>
              <br />
              <p>
                This project is buit with React. where we request the data from
                IMDB api and dispalys the movie details,as it it deals with the
                api cant be deployed in Netlify
                <br />
                <br />
                <br />
                <a href="https://github.com/AbhilashKusa/Movies-database">
                  <i className="fab fa-github"></i>
                  {'  '}
                  <b>Movie Details Application </b>
                </a>
              </p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                ROBOTIC SURGERY IN A HAND REGION USING IMAGE PROCESSING
              </h3>
              <br />
              <p>
                Robotic surgery offers many benefits to patients compared to
                open surgery, including: Shorter hospitalization, Reduced pain
                and discomfort, Faster recovery time and return to normal
                activities, reduced blood loss and transfusions and Minimal
                scarring. This project aims at identifying the hand tumor, by
                using image processing, during the surgery. Also, this project
                aims at assisting the Robotic surgery process of harmful cancers
                in hand region. This Project uses PyQt tool to create the needed
                Graphical User Interfaces, PyUIC module to automatically
                generate the automated code and python image Processing
                libray(Pillow). This project uses two algorithms :(1). Rule
                based engine algorithm for matching the symptoms and medical
                test results. (2).Image cascading for identifying the Hand
                Tumor, during Robotic surgery.
                <br />
                <br />
                <br />
                <a href="https://drive.google.com/open?id=1fjPn3WevAQnAjQBwhwRleglQfqHRQi1N">
                  {'  '}
                  <b>Project Details</b>
                </a>
              </p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                PREDICTION OF PETROL PRICE OF NEXT MONTH BY USING THE DATASET OF
                LAST FIVE YEARS
              </h3>
              <br />
              <p>
                Collect petrol price (last 5 years, monthly) and parameters
                which affected price and predict the petrol price of next month.
                Predicting future petroleum price is difficult but it is
                certainly related to industrial production. Nonetheless, the
                petrol demand of countries with rapid economic growth would also
                increase rapidThe problem assigned here is to predict next month
                petrol price by using last 5 years data and by using parameters
                that affects petrol price. As we are asked to predict next month
                petrol price Linear Regression appears to be the most capable
                model. Extraction of other useful methods is done through
                sklearn. We take input as date, crude oil price, population and
                output as petrol price. Dataset is validated by using Newton’s
                backward formula.
                <br />
                <br />
                <br />
                <a href="https://drive.google.com/open?id=1G-Fps9saPeNGLZQ1vumqfvDyXZ1rNyQd">
                  {'  '}
                  <b>Project Details</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">CMR College of Engineering & Technology</h3>
              <div className="subheading mb-3">
                computer science engineering
              </div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 6.35</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"> 2015 - 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Narayana Junior College</h3>
              <div className="subheading mb-3">
                Telangana intermediate board
              </div>
              <p>Percentage: 84% </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"> 2013 - 2015 </span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">aryabhatta concept school</h3>
              <div className="subheading mb-3">Telangana state board</div>
              <p>GPA: 8.7 </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"> 2013 </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            A Part form web development i love Gaming and I paly lots of PC
            games, and i love to Capture things.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, and I spend a large amount of my free
            time exploring the latest technology advancements in the front-end
            web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5"> Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Python Programming in coursera
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Angular in coursera
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              React in coursera
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
