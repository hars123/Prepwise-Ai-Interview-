import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/publicLayout";
import Home from "./routes/home";
import AuthenticationLayout from "./layouts/authlayout";

import SignInpage from "./routes/SignInpage";
import SignUppage from "./routes/SignUppage";

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
          <Route path="/signin" element={<SignInpage />} />
          <Route path="/signup" element={<SignUppage />} />
        </Route>

        {/* Protected routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
