import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import DashBoardLayout from "./pages/dashboard/DashBoardLayout";
// import DashboardHome from "./pages/dashboard/DashboardHome";
import CreateEvents from "./pages/eventlayout/CreateEvents";
import EventPages from "./pages/eventlayout/EventsPageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<DashBoardLayout />}>
          {/* <Route index element={<DashboardHome />} /> */}

          <Route path="create-events" element={<EventPages />}>
            <Route index element={<CreateEvents />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
