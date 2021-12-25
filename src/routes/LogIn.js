import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../fbase";
import { SignUpBtn, SocitialBtn } from "../styles/LoginStyle";
import { Input, SignWrap } from "../styles/SignStyle";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { target: {value} } = event;
    const { target: {name} } = event;

    if(name === 'email') {
      setEmail(value);
    }else{
      setPassword(value);
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log(auth.currentUser.displayName);
    } catch(error) {
      setError(error.message);
    }
  }

  const onSocialClick = async (event) => {
    const { target: {name} } = event;

    let provider;
    if(name === "google") {
      provider = new GoogleAuthProvider();
    }else if(name === "github"){
      provider = new GithubAuthProvider();
    }

    await signInWithPopup(auth, provider);
  }

  return (
    <>
      <SignWrap>
        <div className="signBox">
          <h1>Log In</h1>
          <form onSubmit={onSubmit}>
            <Input type="email" name="email" onChange={onChange} value={email} required placeholder="Email" />
            <Input type="password" name="password" onChange={onChange} value={password} required placeholder="Password" />
            <Input type="submit" value="Log In" className="submitBtn" />
            {error}
          </form>
          <SignUpBtn>
            <Link to="/SignUp">회원가입</Link>
          </SignUpBtn>

          <SocitialBtn>
            <button onClick={onSocialClick} name="google">Google LogIn</button>
            <button onClick={onSocialClick} name="github">Github LogIn</button>
          </SocitialBtn>
        </div>
      </SignWrap>
    </>
  );
}

export default LogIn;