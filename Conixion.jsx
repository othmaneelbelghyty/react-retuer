import React, { useState } from "react";

function Conixion() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Déconnexion</button>
      ) : (
        <button onClick={handleLogin}>Connexion</button>
      )}
    </div>
  );
}

export default Conixion;
