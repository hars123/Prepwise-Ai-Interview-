import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/publicLayout";
import Home from "./routes/home";
import AuthenticationLayout from "./layouts/authlayout";
import SignIn from "./routes/signIn";
import SignUp from "./routes/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public layout wrapping all public pages */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* Authentication Layout */}

        <Route element={<AuthenticationLayout />}>
          <Route path="/signin" element={<SignIn />} />
             <Route path="/signup" element={<SignUp />} />

        </Route>


        {/* Protected routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
