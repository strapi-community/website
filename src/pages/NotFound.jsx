import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-darkPrimary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-800 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-neutral-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md text-neutral-600 px-3.5 py-2.5 text-sm font-semibold "
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}
