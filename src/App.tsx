
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { LandingPage } from "./pages/landing";
import { Navbar } from "./components/layout/navbar";
import "./styles/globals.css";

// Get Clerk publishable key from environment variable
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* More routes will be added here */}
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;