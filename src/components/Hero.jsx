import React from "react";
export default function Hero() {
  return (
    <div className="h-screen relative px-6 md:px-8 -mt-16 flex items-center justify-center">
      <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-darkPrimary sm:text-6xl">
            Welcome to Strapi Community
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get started
            </a>
            <a href="https://docs.strapi.io/" className="text-base font-semibold leading-7 text-darkPrimary">
            Docs <span aria-hidden="true">→</span>
            </a>
        </div>
      </div>
    </div>
  );
}
