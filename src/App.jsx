import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import DashBoardLayout from "./pages/dashboard/DashBoardLayout";
// import DashboardHome from "./pages/dashboard/DashboardHome";

import EventPages from "./pages/eventlayout/EventsPageLayout";
import CreateEvents from "./pages/eventlayout/CreateEvents";

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

          <Route path="events" element={<EventPages />} />

          <Route path="create-event" element={<CreateEvents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
