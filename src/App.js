import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import AppRouter from "./components/router";
import { auth } from "./fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setIsLoggedIn(true);

        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });

  }, []);

  return (
    <div>
      { init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "Loading..." }
    </div>
  );
}

export default App;
