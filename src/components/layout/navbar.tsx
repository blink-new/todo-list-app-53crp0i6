
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

export function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <CheckCircle className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">TaskMaster</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <div className="flex gap-2">
                <Link to="/sign-in">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/sign-up">
                  <Button>Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}