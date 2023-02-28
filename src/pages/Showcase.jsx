import React, { useEffect, useState } from "react";
import axios from "axios";
import GitStar from "../assets/icons/star.svg";
import GitFork from "../assets/icons/git-fork.svg";
import GitIssues from "../assets/icons/circle-dot.svg";
import FileCode from "../assets/icons/file-code-2.svg";

export default function Showcase() {
  const [repos, setrepos] = useState([]);

  useEffect(() => {
    async function getRepo() {
      const result = await axios("https://api.github.com/orgs/strapi-community/repos");
      setrepos(result.data);
    }
    getRepo();
  }, []);

  return (
    <div className="my-10">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-4 text-darkPrimary">Showcase</h1>
        <p className="text-neutral-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eum dignissimos
          laudantium?
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-darkPrimary inline-block mr-1">
          Community repositories
          </h1>
          <span className="text-neutral-700">( {repos.length} )</span>
        </div>
        <div className="">
          <input
            className="w-72 p-2 bg-neutral-100 focus:bg-neutral-0 rounded focus:outline-none border border-neutral-0 focus:border-primary-600"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-between">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-primary-100 max-w-sm w-96 p-5 mb-10 rounded flex flex-col justify-between"
          >
            <div className="mb-4">
              <a href={repo.html_url}>
                <h2 className="text-lg font-bold text-darkPrimary">{repo.name}</h2>
              </a>
              <p className="mt-4 text-neutral-600">{repo.description}</p>
            </div>

            <div className="mt-4 flex flex-row items-center justify-between text-neutral-700">
              <p className="flex items-center">
                  <img src={FileCode} alt="FileCode" className="w-5 mr-0.5" />
                  {repo.language}
                </p>
              <div className="flex space-x-4">
                <p className="flex items-center">
                  <img src={GitStar} alt="Star" className="w-5 mr-0.5" />
                  {repo.stargazers_count}
                </p>
                <p className="flex items-center">
                  <img src={GitFork} alt="Fork" className="w-5 mr-0.5" />
                  {repo.forks_count}
                </p>
                <p className="flex items-center">
                  <img src={GitIssues} alt="Issues" className="w-5 mr-0.5" />
                  {repo.open_issues_count}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
