import React, { useState } from "react";
import Button from "@mui/material/Button";
import Carousel from "better-react-carousel";
import { Outlet, Link, useParams } from "react-router-dom";
const HomePage = ({ value, setValue }) => {
  const [input, Setinput] = useState("");
  return (
    <div className="homepage-container">
      <div className="main-card-in-main-pic">
        <h1 id="first-text-in-card">The First Step To Your Bright Future</h1>
        <br />
        <div>
          <input
            onChange={(e) => Setinput(e.target.value)}
            placeholder=" Search for where you wish to buy...."
            type="search"
            name=""
            id="main-pic-search"
          />
          <Link to="product" state={{ inp: input }}>
            {" "}
            <Button id="search-button-one" variant="contained">
              Search
            </Button>
          </Link>
        </div>
      </div>
      <img
        id="main-pic"
        src="https://wallpapercave.com/wp/wp9359310.jpg"
        alt=""
      />
      <div className="ad2">
        <div className="div-img2">
          <img
            className="ad2-side-left"
            src="https://media.istockphoto.com/id/1198217992/photo/afro-spouses-showing-key-to-camera-embracing-in-new-home.jpg?s=612x612&w=0&k=20&c=l1XHAcAJwS8gDfJ612FsOk-HMKYg3zw--OpyAblNHm0="
            alt=""
          />
        </div>
        <div className="text">
          <h1>Advertise Your Rental!</h1>{" "}
          <h3>
            Connect with more than 75 million renters looking for new homes
            using our marketing platform.
          </h3>
        </div>
      </div>
      <div className="ad3">
        <div className="div-img2">
          <img
            className="ad2-side-left"
            src="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/MV6GXUJJW5HSJIEYQUU3P4GN6M.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <h1>Lease 100% Online!</h1>{" "}
          <h3>
            Process buying payments online, and sign digital leases all from a
            single platform.
          </h3>
        </div>
      </div>
      <div className="mortgage-block-backround">
        <div className="mortgage-block">
          <div className="mortgage-block-content">
            <h2 className="mortgage-block-title">Mortgage Solutions</h2>
            <p className="mortgage-block-description">
              Our agents can refer you to a wide range of mortgage options to
              suit your needs. Our team of experts will guide you through the
              process and help you find the perfect loan plan.
            </p>
            <il className="loan-plans">
              <li className="loan-plan">Fixed-Rate Mortgage</li>
              <li className="loan-plan">Adjustable-Rate Mortgage</li>
              <li className="loan-plan">FHA Loan</li>
              <li className="loan-plan">VA Loan</li>
            </il>
            <br />
            <a href="Agents" className="block-button">
              Contact Our Agents
            </a>
          </div>
        </div>
      </div>
      <div>
        <Carousel cols={2} rows={1} gap={8} loop>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/e4ab87ec8340a2bb78fd4327c5b96c72-p_e.jpg"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/a625b98eee9799128f55d5b4536c3917-p_e.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/24d10c833d97f2f94f0fcedbcb17c6d2-p_e.jpg"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/acea5c2e9c7ca217d91196872366adb6-p_e.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/95441fe03c234ed7fe290d1f1295ad0a-p_e.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/3a945822fa32eb9ca5796d933b4709fb-p_e.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/e7c4b7506ec73dd989fb0f07c91268c5-p_e.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/decc305ffb2e1e6455fe812a43ecfb4e-p_e.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/509417302a55048ecd91eb39656d134a-p_e.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="100%"
              src="https://photos.zillowstatic.com/fp/eb50f1d364bed01f7ce8543888effb95-p_e.jpg"
            />
          </Carousel.Item>

        </Carousel>
      </div>
      <div className="why-us">
        <div className="why-us-left-side">
          <h1>Who Are We?</h1>
          <p className="text-in-why-us">
            Here at Oasis Properties, we are a dedicated team of real estate
            professionals committed to providing you with a seamless and
            personalized experience. Founded in 2003, with over 7,500 houses
            sold and families put into their new home, Our passion for
            excellence and local market expertise ensures that we deliver
            top-notch service tailored to your unique needs. Whether you're
            buying, selling, or investing in property, our mission is to guide
            you in every step of the way, transforming your real estate journey
            into an oasis of comfort and satisfaction. We pride ourselves on
            building lasting relationships with our clients, fostering trust and
            confidence through our unwavering commitment to transparency and
            integrity. Choose Oasis Properties and discover the difference that
            comes with working with a team that truly cares about your dreams
            and aspirations.
          </p>
        </div>
        <div className="why-us-right-side">
          <h1>Why Us?</h1>
          <p className="text-in-why-us">
            Our real estate team is dedicated to providing you with the best
            experience throughout the home buying or selling process. We have
            years of experience in the real estate market and have gained the
            trust of our clients through our reliable and honest service. We
            pride ourselves in keeping our knowledge of the market current and
            providing our clients with the best advice and service within the
            home buying or selling process. Our highly qualified agents have a
            wealth of local knowledge that is combined with our professionalism
            and competitive marketing strategies to sell your property or
            introduce you to your new home. We are committed to transparency and
            open communication, providing you with all the information you need
            to make informed decisions. With our vast online presence, we are
            able to give sellers maximum exposure and buyers more information.
            Choose us as your trusted real estate experts and experience the
            difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
