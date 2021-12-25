import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import LogIn from "../routes/LogIn";
import SignUp from "../routes/SignUp";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <BrowserRouter>
      <Routes>
        { isLoggedIn ? (
          <Route path="/" element={ <Home userObj={userObj} /> } />
        ) : (
          <>
            <Route path="/" element={ <LogIn /> } />
            <Route path="SignUp" element={ <SignUp /> } />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;