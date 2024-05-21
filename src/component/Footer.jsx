import { Container, Grid, Typography , Snackbar, Alert} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import i18n from "../common/Translation";
import { Link } from "react-router-dom";
import { svgArray } from '../common/ChooseSVG';
import PropTypes from 'prop-types';

// Component to choose SVG from the array
const ChooseSVG = ({ name }) => {
  // Find the SVG object by name
  const selectedSVG = svgArray.find(svgObj => svgObj.name === name);
  
  // Render the selected SVG
  return selectedSVG ? selectedSVG.svg : <div>SVG not found</div>;
};
// PropTypes validation
ChooseSVG.propTypes = {
  name: PropTypes.string.isRequired,
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Attempt to create a new user account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Send email verification
      await sendEmailVerification(userCredential.user);

      setSuccess("Account created successfully! Verification email sent.");
      setOpen(true);
    } catch (error) {
      // Handle specific errors
      if (error.code === "auth/email-already-in-use") {
        setSuccess("");
        setError("The email address is already in use.");
      } else {
        setError(error.message); // Handle other errors generically
      }
      setOpen(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  return (
    <footer className="bg-black text-white py-8 mt-24 bottom-0 w-full">
      <Container>
        <Grid
          container
          direction="row"
          spacing={5}
          className="md:min-h-96 justify-center items-stretch md:justify-between"
        >
          <Grid
            item
            // xs={12}
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-5"
          >
            <Typography className="font-bold" variant="h6" gutterBottom>
            Exclusive
            </Typography>
            <Typography className="font-medium" gutterBottom>
              {i18n.t("footer.subscribe")}
            </Typography>
            <Typography variant="body2">{i18n.t("footer.offer")}</Typography>
            <div className=" mt-4 flex w-56	 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 bg-transparent text-white placeholder-gray-400">
            <div className=" flex flex-col ">
              <input
                type="email"
                placeholder={i18n.t("footer.enterEmail")}
                className="w-full py-2 px-3 rounded-md focus:outline-none focus:border-transparent bg-transparent text-white "
                value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              <input
                  type="password"
                  placeholder={i18n.t("footer.enterPassword")}
                  className="w-full py-2 px-3 rounded-md focus:outline-none focus:border-transparent bg-transparent text-white "
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button onClick={handleSignUp}>
              <ChooseSVG name={'Arrow'} /> 
              </button>
            </div>
          </Grid>

          {/* Support */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2.5}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.support")}
            </Typography>
            <Typography gutterBottom>{i18n.t("footer.address")}</Typography>
            <Typography variant="body2">exclusive@gmail.com</Typography>
            <Typography variant="body2">+88015-88888-9999</Typography>
          </Grid>

          {/* Account */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.account")}
            </Typography>
            {/* <ul className="list-none p-0">
              <li>
                <Link href="#" sx={{ color: "white",textDecoration: "none" }}>
                  {i18n.t("footer.myAccount")}
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "white" ,textDecoration: "none"}}>
                  {i18n.t("footer.sign")}
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "white" ,textDecoration: "none"}}>
                  {i18n.t("footer.cart")}
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "white",textDecoration: "none" }}>
                  {i18n.t("footer.wishlist")}
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "white" ,textDecoration: "none"}}>
                  {i18n.t("footer.shop")}
                </Link>
              </li>
            </ul> */}
                        <ul className="list-none p-0">
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/account"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.myAccount")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/signup"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.sign")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/cart" sx={{ color: "white" }}>
                  {i18n.t("footer.cart")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/wishlist"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.wishlist")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/category"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.shop")}
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Quick Link */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom>
              {i18n.t("footer.quickLinks")}
            </Typography>
            {/* <ul className="list-none p-0">
              <li>
                <Link href="#" sx={{ color: "white" ,textDecoration: "none"}}>
                  {i18n.t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "white" ,textDecoration: "none"}}>
                  {i18n.t("footer.usage")}
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "white" ,textDecoration: "none" }}>
                  {i18n.t("footer.FAQ")}
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "white" ,textDecoration: "none"}}>
                  {i18n.t("footer.Contact")}
                </Link>
              </li>
            </ul> */}
             <ul className="list-none p-0">
              <li>
                <Link to="/allProducts" sx={{ color: "white" }}>
                  {i18n.t("allProducts.redTitle")}
                </Link>
              </li>
              <li>
                <Link to="/category" sx={{ color: "white" }}>
                  {i18n.t("category.redTitle")}
                </Link>
              </li>

              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.usage")}
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="about" sx={{ color: "white" }}>
                  {i18n.t("footer.FAQ")}
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  sx={{ color: "white" }}
                >
                  {i18n.t("footer.Contact")}
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Download App */}
          <Grid
            item
            xs={8}
            sm={6}
            md={2}
            className="justify-center items-stretch md:justify-between md:leading-10"
          >
            <Typography variant="h6" gutterBottom className="text-white">
              {i18n.t("footer.downloadApp")}
            </Typography>
            <Typography variant="body2" gutterBottom className="text-gray-500 ">
              {i18n.t("footer.save")}
            </Typography>
            <div className="flex flex-row gap-2 my-4">
            <ChooseSVG name={'QrCode'} /> 
              <div>
                <Link href="#">
                <ChooseSVG name={'Android'} />
                </Link>
                <Link href="#">
                <ChooseSVG name={'Apple'} />
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-4 flex items-center space-x-6">
              <Link href="#" className="mr-4">
              <ChooseSVG name={'Face'} />
                </Link>
              <Link href="#" className="mr-4">
              <ChooseSVG name={'Twitter'} /> 
              </Link>
              <Link href="#" className="mr-4">
              <ChooseSVG name={'Instagram'} /> 
              </Link>
              <Link href="#" className="mr-4">
              <ChooseSVG name={'Linked'} />
                            </Link>
              <div className="mt-8 flex items-center"></div>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Copyright */}
      <hr className="w-full border-gray-800 my-4" />
      <Typography variant="body2" className=" text-center text-gray-600">
        {i18n.t("footer.copyrights")}
      </Typography>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        {success ? (
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {success}
          </Alert>
        ) : (
          <Alert
            onClose={() => setOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        )}
      </Snackbar>
    </footer>
  );
};

export default Footer;
