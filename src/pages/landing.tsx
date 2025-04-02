
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Users, Zap } from "lucide-react";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Organize Your Life with{" "}
                <span className="text-blue-600">TaskMaster</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The professional task management platform that helps you stay on
                top of everything. Built for individuals and teams who want to
                achieve more.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/sign-up">
                  <Button size="lg">Get started for free</Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg">
                    View pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={<CheckCircle className="h-8 w-8" />}
                title="Smart Task Management"
                description="Organize tasks with intelligent categorization and priority management."
              />
              <Feature
                icon={<Users className="h-8 w-8" />}
                title="Team Collaboration"
                description="Work together seamlessly with shared workspaces and real-time updates."
              />
              <Feature
                icon={<Zap className="h-8 w-8" />}
                title="Powerful Automation"
                description="Save time with automated task creation and reminder systems."
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Loved by Professionals</h2>
              <div className="mt-8 flex justify-center gap-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="mt-8 text-xl italic text-gray-600">
                "TaskMaster has transformed how our team manages projects. It's
                intuitive, powerful, and actually enjoyable to use."
              </blockquote>
              <p className="mt-4 font-semibold">
                Sarah Chen, Product Manager at TechCorp
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">TaskMaster</span>
            </div>
            <p className="text-gray-500">© 2024 TaskMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="rounded-lg bg-white p-3 ring-1 ring-gray-200">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}