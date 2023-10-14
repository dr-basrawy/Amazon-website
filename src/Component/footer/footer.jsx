import React from "react";
import { Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";
import "./footer.css";
import { Link} from "react-router-dom";
function FooterCom() {
  let { t, i18n } = useTranslation();

  return (
    <>
      <section className="section_container">
        <div className="container-fluid mt-2 mb-3 pt-4 border">
          <div className="text-center">
            <div className="sign-in-section mb-2">
              {t("See personalized recommendations")}
            </div>
            <Link
              className="signinbtn btn  "
              to="/login"
              style={{ textDecoration: "none" }}
            >
              {t("Sign in")}
            </Link>
            <p>
              {t("New customer")}{" "}
              <a className="start-here text-decoration-none" href="#">
                {t("Start here.")}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section_container">
        <div className="container-fluid back-top btn cursor-pointer p-3 mt-1 text-center text-light  ">
          <a className="back-to-top text-decoration-none text-light " href="#">
            {t("Back to top")}
          </a>
        </div>
      </section>
      <div className="container-fluid">
        <Row className="first-footer-sec  ">
          <div className="cont w-75">
            <Col xs={3}>
              <h6 className="footer-column  text-light">{t("Get to Know Us")}</h6>
              <ul className="footer-ul p-0">
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Careers")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Blog")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("About Amazon")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Investor Relations")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Amazon Devices")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Amazon Tours")}
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={3}>
              <h6 className="footer-column  text-light">{t("Make Money with Us")}</h6>
              <ul className="footer-ul p-0">
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Sell products on Amazon")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Sell apps on Amazon")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Become an Affiliate")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Advertise Your Products")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Self-Publish with Us")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Host an Amazon Hub")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("See More Make Money with Us")}
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={3}>
              <h6 className="footer-column  text-light">
                {t("Amazon Payment Products")}
              </h6>
              <ul className="footer-ul p-0">
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t(" Amazon Business Card")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Shop with Points")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Reload Your Balance")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Amazon Currency Converter")}
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={3}>
              <h6 className="footer-column  text-light">{t("Let Us Help You")}</h6>
              <ul className="footer-ul p-0">
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Amazon and COVID-19")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Your Account")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Your Orders")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Shipping Rates & Policies")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Returns & Replacements")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Manage Your Content and Devices")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Amazon Assistant")}
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footer-link" href="#">
                    {t("Help")}
                  </a>
                </li>
              </ul>
            </Col>
          </div>
        </Row>
        <div className="footer-line "></div>
        <Row className="amazon-footer-logo-area p-4 ">
          <Col
            xs="12"
            md="5"
            className="d-flex justify-content-center justify-md-content-end"
          >
            <img
              src="../assets/images/image2020.png"
              alt="amazon logo"
              className="amzaon2"
            />
          </Col>
          <Col
            xs="12"
            md="7"
            className="d-flex align-items-center justify-content-center justify-md-content-end flex-column flex-md-row"
          >
            <DropdownButton
              id="locale-dropdown"
              title={t("English")}
              className=" me-2"
            >
              <Dropdown.Item eventKey="en">{t("English")}</Dropdown.Item>
              <Dropdown.Item eventKey="de">{t("German")}</Dropdown.Item>
              <Dropdown.Item eventKey="fr">{t("French")}</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="currency-dropdown" title="$ USD - U.S. Dollar">
              <Dropdown.Item eventKey="USD">$ USD - U.S. Dollar</Dropdown.Item>
              <Dropdown.Item eventKey="EUR">€ EUR - Euro</Dropdown.Item>
              <Dropdown.Item eventKey="GBP">
                £ GBP - British Pound
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="currency-dropdown"
              title={t("United States")}
              className="flag "
            >
              <Dropdown.Item eventKey="USD">
                <img src="../assets/images/us.png" width={15} />
                {t("United States")}
              </Dropdown.Item>
            </DropdownButton>

            {/* <DropdownButton id="dropdown-item-button" title="English">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">English</Dropdown.Item>
                    <Dropdown.Item as="button">German </Dropdown.Item>
                    <Dropdown.Item as="button">French </Dropdown.Item>
                </DropdownButton>
                <div className="d-flex text-center">
                    <img src="" alt="USA LOGO" width="30rem" height="20rem" />
                    <p className="text-light text-center">United States</p>
                </div> */}
          </Col>
        </Row>
      </div>
      <div className="second-footer-sec pt-5 pb-5 ">
        <div className="container text-decoration-none">
          <div className="row">
            <div className="col">
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Amazon Music")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Stream millions")} <br /> {t("of songs")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Alexa")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Actionable Analytics")} <br /> {t("for the Web")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Amazon Rapids")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Fun stories for")} <br />{t(" kids on the go")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("CreateSpace")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Indie Print Publishing")} <br /> {t("Made Easy")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("IMDbPro")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Get Info Entertainment")} <br />{t("Professionals Need")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Ring")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Smart Home")} <br /> {t("Security Systems")}
                  </span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Amazon Advertising")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Find, attract, and")} <br /> {t("engage customers")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Sell on Amazon")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Start a Selling")} <br /> {t("Account")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">
                    {t("Amazon Web Services")}
                  </span>
                  <br />
                  <span className="second-title-footer">
                    {t("Scalable Cloud")} <br /> {t("Computing Services")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("DPReview")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Digital")} <br /> {t("Photography")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">
                    {t("Kindle Direct Publishing")}
                  </span>
                  <br />
                  <span className="second-title-footer">
                    {t("Indie Digital Publishing")} <br /> {t("Made Easy")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("eero WiFi")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Stream 4K Video")}
                    <br /> {t("in Every Room")}
                  </span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="footer-section-column mb-4 text-left">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Amazon Drive")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Cloud storage")} <br /> {t("from Amazon")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4 text-light">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Amazon Business")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Everything For")}
                    <br /> {t("Your Business")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Audible")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Listen to Books & Original")}
                    <br /> {t("Audio Performances")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("East Dane")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Designer Men s")}<br /> {t("Fashion")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Prime Video Direct")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Video Distribution")}
                    <br /> {t("Made Easy")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Neighbors App")} </span>
                  <br />
                  <span className="second-title-footer">
                    {t("Real-Time Crime")}
                    <br /> {t("& Safety Alerts")}
                  </span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">6pm</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Score deals")}
                    <br /> {t("on fashion brands")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("AmazonGlobal")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Ship Orders")}
                    <br /> {t("Internationally")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Book Depository")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Books With Free")}
                    <br /> {t("Delivery Worldwide")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Fabric")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Sewing, Quilting")}
                    <br /> {t("& Knitting")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Shopbop")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Designer")}
                    <br /> {t("Fashion Brands")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">
                    {t("Amazon Subscription Boxes")}
                  </span>
                  <br />
                  <span className="second-title-footer">
                    {t("Top subscription boxes – right to your door")}
                  </span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("AbeBooks")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Books, art")}
                    <br /> {t("& collectibles")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Home Services")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Experienced Pros")}
                    <br /> {t("Happiness Guarantee")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Box Office Mojo")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Find Movie")}
                    <br /> {t("Box Office Data")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Goodreads")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Book reviews")}
                    <br /> {t("& recommendations")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Woot!")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Deals and")} <br /> {t("Shenanigans")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("PillPack")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Pharmacy Simplified")}
                  </span>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("ACX")} </span>
                  <br />
                  <span className="second-title-footer">
                    {t("Audiobook Publishing")}
                    <br /> {t("Made Easy")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Amazon Ignite")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Sell your original")}
                    <br /> {t("Digital Educational")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("ComiXology")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Thousands of")}
                    <br /> {t("Digital Comics")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("IMDb")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Movies, TV")}
                    <br /> {t("& Celebrities")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column mb-4">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">{t("Zappos")}</span>
                  <br />
                  <span className="second-title-footer">
                    {t("Shoes &")}<br /> {t("Clothing")}
                  </span>
                </a>
              </div>
              <div className="footer-section-column">
                <a href="#" className="second-footer-link">
                  <span className="first-title-footer">
                    {t("Amazon Second Chance")}
                  </span>
                  <br />
                  <span className="second-title-footer">
                    {t("Pass it on, trade it in,")}
                    <br /> {t("give it a second life")}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCom;
