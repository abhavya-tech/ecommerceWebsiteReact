import Button from "../../components/button/Button";
import SignIn from "../../components/sign-in-form /SignIn";
import SignUp from "../../components/sign-up-form/SignUp";
import "./authenticat-styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default Authentication;
