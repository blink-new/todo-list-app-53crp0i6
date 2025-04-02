
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export const PRICING_PLANS = {
  free: {
    name: "Free",
    price: 0,
    features: ["5 Todo Lists", "Basic Features", "7-day History"],
  },
  pro: {
    name: "Pro",
    price: 10,
    features: [
      "Unlimited Todo Lists",
      "Advanced Features",
      "Team Collaboration",
      "Priority Support",
      "Custom Tags",
      "Unlimited History",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: 29,
    features: [
      "Everything in Pro",
      "Advanced Analytics",
      "Custom Integrations",
      "Dedicated Support",
      "SLA Guarantee",
      "Custom Branding",
    ],
  },
};