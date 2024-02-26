/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import StayUpdated from "./pages/StayUpdated";
import ThanksMessage from "./pages/ThanksMessage";
import NoPage from "./pages/NoPage";

function App() { 

  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/thanks"
          element={
            <ThanksMessage
              email={email}
              setEmail={setEmail}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />

        <Route
          path="/"
          element={
            <StayUpdated
              email={email}
              setEmail={setEmail}
              setIsActive={setIsActive}
            />
          }
        />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
