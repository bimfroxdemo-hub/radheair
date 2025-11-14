// src/components/NotFound.jsx
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiAlertCircle, FiHome } from "react-icons/fi";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 - attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-6">
      <div className="mx-auto max-w-xl rounded-2xl bg-white/80 p-8 shadow-lg ring-1 ring-gray-200 sm:p-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-100 sm:h-24 sm:w-24">
            <FiAlertCircle
              className="h-10 w-10 sm:h-12 sm:w-12"
              aria-hidden="true"
            />
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Page not found
            </h1>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              We can't find <span className="font-medium text-gray-800">{location.pathname}</span>
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Return to home"
            >
              <FiHome className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>

            <a
              href="mailto:support@example.com"
              className="text-sm text-gray-600 underline-offset-2 hover:underline"
            >
              Contact support
            </a>
          </div>

          <small className="mt-4 text-center text-xs text-gray-400">
            If you typed the address manually, double-check it and try again.
          </small>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
