import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  GoogleAuthProvider,
} from "firebase/auth";
import i18n from "../common/Translation";
import PropTypes from 'prop-types';
import { svgArray } from "../common/ChooseSVG";
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
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await 
      // Attempt to create a new user account
      await createUserWithEmailAndPassword(auth, email, password);
      // Send email verification
      await sendEmailVerification(userCredential.user);
      setSuccess("Account created successfully!");
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

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Sign up with Google
      await signInWithPopup(auth, provider);
      setSuccess("Signed up with Google successfully!");
      setOpen(true);
    } catch (error) {
      setError(error.message);
      setOpen(true);
    }
  };

  return (
    <div className="relative flex justify-center md:justify-start items-center md:mt-14 mb-36 mt-40 md:gap-32 ">
      <ChooseSVG name={'Sign'} />
      <div className="flex flex-col gap-6 items-start justify-center">
        <h1 className="text-4xl font-medium font-inter ">
          {i18n.t("signUpPage.title")}
        </h1>
        <p>{i18n.t("signUpPage.enter")}</p>
        <form
          className="flex flex-col gap-6 w-72 md:w-96"
          onSubmit={handleSignUp}
        >
          <TextField
            label={i18n.t("signUpPage.email")}
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            label={i18n.t("signUpPage.password")}
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            sx={{
              color: "white",
              fontSize: "16px",
              bgcolor: "hsla(0, 68%, 56%, .9)",
              textTransform: "none",
              padding: "16px 0",
              borderRadius: "4px",
              fontWeight: "500",
              width: "100%",
              marginTop: "1rem",
              ":hover": {
                bgcolor: "hsla(0, 68%, 56%, 1)",
                fontWeight: "500",
              },
            }}
            variant="contained"
            color="primary"
            className="my-2"
          >
            {i18n.t("signUpPage.createAccount")}
          </Button>
        </form>

        <div className="w-72 md:w-96">
          <Button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center gap-4"
            sx={{
              color: "black",
              fontSize: "16px",
              bgcolor: "white",
              textTransform: "none",
              padding: "16px 0",
              borderRadius: "4px",
              fontWeight: "500",
              width: "100%",
              border: "1px solid hsla(0, 0%, 0%, 0.4)",
              ":hover": {
                bgcolor: "hsla(0, 0%, 0%, 1)",
                color: "white",
                fontWeight: "500",
              },
            }}
          >
            {/* Google Icon SVG */}
            <ChooseSVG name={'Google'} />
            <span> {i18n.t("signUpPage.withGoogle")}</span>
          </Button>
        </div>

        <p className="text-gray-600 mx-auto">
          {i18n.t("signUpPage.haveAccount")}{" "}
          <Link
            to="/login"
            className="ml-2 text-gray font-medium hover:underline"
          >
            {i18n.t("signUpPage.login")}
          </Link>
        </p>
      </div>
      {/* <div className="absolute top-0 right-0"> */}
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
    </div>
    // </div>
  );
};
export default SignUp;
