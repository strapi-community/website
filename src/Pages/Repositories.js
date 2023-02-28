import React, { useEffect, useState } from 'react';
import {
  Typography, Box, Divider, Badge,
} from '@strapi/design-system';
import { MdBookmark } from 'react-icons/md';
import { RiBookMarkFill } from 'react-icons/ri';
import { BiGitRepoForked } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import Loader from '../Components/Loader';

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const fetchRepos = async () => {
    try {
      setLoading(true);
      let res = await fetch('https://api.github.com/users/strapi-community/repos');
      res = await res.json();
      setRepos(res);
      setLoading(false);
    } catch (error) {
      setFetchError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      <div className="my-10 relative px-8 md:px-10 lg:px-32">
        <Typography variant="alpha"><p className="mt-5 text-defaultcol text-center sm:text-left">Latest Community repos</p></Typography>
        <Box paddingBottom={8} paddingTop={4}>
          <Divider className="w-full sm:w-1/2" />
        </Box>
        {loading ? <Loader /> : null}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div className=" group h-64 relative rounded-2xl shadow-lg dark:shadow-black">
              <div className="group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-defaultcol rounded-2xl absolute h-64 w-full z-10 transition-all duration-300" />
              <div className=" h-64 w-full  relative z-20 p-5 rounded-2xl">
                <Typography variant="beta" color="secondary"><p className="my-5">{repo.full_name}</p></Typography>
                <Typography variant="epsilon" color="secondary"><p className="my-5">{repo.description}</p></Typography>
                <div className="absolute bottom-2 flex dark:text-white">
                  <div className="flex items-center">
                    <BiGitRepoForked size={24} />
                    <span className="ml-1">{repo.forks}</span>
                  </div>
                  <div className="flex items-center ml-5">
                    <FaRegEye size={24} />
                    <span className="ml-1">{repo.watchers}</span>
                  </div>
                  <div className="flex items-center ml-5">
                    {repo.language ? <Badge><span>{repo.language}</span></Badge> : null}
                  </div>
                </div>
              </div>

            </div>
          ))}
          {fetchError && <p className="text-red-500">{fetchError}</p>}
        </div>
      </div>
    </div>
  );
}
