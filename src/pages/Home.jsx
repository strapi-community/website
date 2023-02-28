import React from "react";
import Hero from "../components/Hero";
import StrapiForum from "../assets/icons/StrapiForum.svg";
import StrapiBlog from "../assets/icons/StrapiBlog.svg";
import StrapiTutorials from "../assets/icons/StrapiTutorials.svg";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="flex flex-col items-center mb-36">
        <div className="text-center md:w-2/3">
          <h1 className="text-darkPrimary text-3xl font-bold mb-4">How We Work</h1>
          <p className="text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi
            minima magnam, quasi amet minus soluta. Obcaecati facere rerum, voluptate
            consequatur sequi quod vitae repellat, delectus laboriosam, facilis
            eligendi! Quibusdam temporibus, dignissimos excepturi fuga atque asperiores
            accusamus mollitia unde molestias repellat, tempore iure, corrupti alias
            nihil culpa velit quidem in laboriosam voluptas maiores. Nihil aliquid
            assumenda veritatis, itaque dolorem cum,
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center mb-36">
        <div className="text-center md:w-2/3">
          <h1 className="text-darkPrimary text-3xl font-bold mb-4">Resources</h1>
          <p className="text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi
            minima magnam, quasi amet minus soluta. Obcaecati facere rerum, voluptate
            consequatur sequi quod vitae repellat, delectus laboriosam, facilis
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-6">
          
          <div className="flex flex-col justify-center items-center p-4 bg-alternative-100 sm:w-72 rounded-md m-4">
            <a href="https://forum.strapi.io/" className="flex items-center">
              <img src={StrapiForum} alt="forum" className="w-14" />
              <h1 className="text-darkPrimary text-xl font-bold ml-2">Forum</h1>
            </a>
            <p className="text-center text-neutral-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolore.
            </p>
          </div>
          
          <div className="flex flex-col justify-center items-center p-4 bg-alternative-100 sm:w-72 rounded-md m-4">
            <a href="https://strapi.io/blog" className="flex items-center">
              <img src={StrapiBlog} alt="blog" className="w-14" />
              <h1 className="text-darkPrimary text-xl font-bold ml-2">Blog</h1>
            </a>
            <p className="text-center text-neutral-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolore.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-4 bg-alternative-100 sm:w-72 rounded-md m-4">
            <a href="https://strapi.io/blog/categories/tutorials" className="flex items-center">
              <img src={StrapiTutorials} alt="tutorials" className="w-14" />
              <h1 className="text-darkPrimary text-xl font-bold ml-2">Tutorials</h1>
            </a>
            <p className="text-center text-neutral-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolore.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
