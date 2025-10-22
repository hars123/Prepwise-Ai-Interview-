import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";

// Load the Clerk publishable key from the environment
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Throw an error if the key is missing
if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Missing Publishable Key! Make sure VITE_CLERK_PUBLISHABLE_KEY is set in your .env.local"
  );
}

// Get the root element from index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found in index.html");
}

// Render the app
createRoot(rootElement).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
