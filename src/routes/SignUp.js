import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Input, SignWrap } from "../styles/SignStyle";
import { auth } from "../fbase";

const SignUp = ({ userObj }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { target: {value} } = event;
    const { target: {name} } = event;

    if(name === 'email') {
      setEmail(value);
    }else if(name === 'password'){
      setPassword(value);
    }else if(name === 'name') {
      setName(value);
    }
  }

  let navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();

    try{
      await createUserWithEmailAndPassword(auth, email, password);
      auth.currentUser.displayName = name;
      navigate('/');
    } catch(error) {
      setError(error.message);
    }
    

    await updateProfile(auth.currentUser, {displayName: name});
  }

  return (
    <SignWrap>
      <div className="signBox signUp">
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <Input type="text" name="name" onChange={onChange} value={name} required placeholder="name" />
          <Input type="email" name="email" onChange={onChange} value={email} required placeholder="Email" />
          <Input type="password" name="password" onChange={onChange} value={password} required placeholder="Password" />
          <Input type="submit" value="Sign Up" className="submitBtn signUp" />
          {error}
        </form>
      </div>
    </SignWrap>
  );
}

export default SignUp;