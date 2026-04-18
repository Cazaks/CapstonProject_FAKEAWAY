import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import DashboardLayout from "./pages/dashboard/DashboardLayout";
// import DashboardHome from "./pages/dashboard/DashboardHome";

import EventPages from "./pages/eventlayout/EventsPageLayout";
// import EventCards from "./pages/eventlayout/EventCards";
// import ListOfEvents from "./pages/eventlayout/ListOfEvents";
import CreateEvents from "./pages/eventlayout/CreateEvents";
import TicketLayout from "./pages/tickethomepage/TicketLayout";
import EventTickets from "./pages/tickethomepage/EventTickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />


        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* <Route index element={<DashboardHome />} /> */}

          <Route path="events" element={<EventPages />} />
          {/* <Route path="events/list" element={<ListOfEvents />} /> */}
          {/* <Route path="events/:eventId" element={<EventCards />} />
          <Route path="events/:eventId/postpone" element={<EventCards />} /> */}
          <Route path="create-event" element={<CreateEvents />} />
          <Route path="tickets" element={<TicketLayout />} />
          <Route path="tickets/:eventId" element={<EventTickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
