import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImgPlaceholder from "../assets/images/placeholder.svg";
export default function Bounty() {
  const [bounties] = useState([
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt error nostrum facilis vitae dignissimos alias nobis provident placeat dolores. Dicta!",
      tag: "Tag",
      image: "",
      prize: "200",
      html_url: "",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab perferendis voluptas repudiandae",
      tag: "Tag",
      image: "",
      prize: "200",
      html_url: "",
    },
  ]);

  return (
    <div className="my-10">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-4 text-darkPrimary">bounties</h1>
        <p className="text-neutral-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum dignissimos
          laudantium?
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-darkPrimary inline-block mr-1">
            Community bounties
          </h1>
          <span className="text-neutral-700">( {bounties.length} )</span>
        </div>
        <div className="">
          <input
            className="w-72 p-2 bg-neutral-100 focus:bg-neutral-0 rounded focus:outline-none border border-neutral-0 focus:border-primary-600"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        {bounties.map((bounty) => (
          <div
            key={bounty.id}
            className="w-full p-6 mb-4 bg-white rounded shadow overflow-hidden"
          >
            <div className="sm:flex">
              <div className="flex justify-center mb-6 sm:mb-0 sm:mr-6">
                <img
                  className="h-40 rounded-md sm:w-40"
                  src={bounty.image ? bounties.image : ImgPlaceholder}
                  alt="Image Placeholder"
                />
              </div>

              <div className="text-left sm:w-3/4">
                <Link
                  to={`/bounty/${bounty.id}`}
                  className="inline-block text-lg leading-tight font-medium text-black hover:underline"
                >
                  <h2 className="text-lg font-bold text-darkPrimary">{bounty.title}</h2>
                </Link>
                <p className="mt-2 text-slate-500">{bounty.description}</p>

                <div className="mt-5 flex justify-between">
                  <span className="p-2 bg-neutral-100 rounded">#{bounty.tag}</span>
                  <span className="p-2 bg-neutral-100 text-darkPrimary font-bold rounded">
                    ${bounty.prize}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
