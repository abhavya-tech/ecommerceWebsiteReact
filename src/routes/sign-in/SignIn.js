import Button from "../../components/button/Button";
import SignUp from "../../components/sign-up-form/SignUp";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./signin-styles.scss";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>
        <span>Sign In Page</span>

        <Button type="google-sign-in" onClick={logGoogleUser}>
          Sign in with Google Popup
        </Button>
        <SignUp />
      </div>
    </>
  );
};

export default SignIn;
