import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography, Checkbox, Button, Badge,
} from '@strapi/design-system';
import { BsSearch } from 'react-icons/bs';
import bounties from '../utils/bounties';
import hunters from '../utils/names';
import imageSample from '../assets/images/image-sample.png';

export default function Bounties() {
  const [key, setkey] = useState('');
  const [price, setPrice] = useState(false);
  const [tag, setTag] = useState(false);

  return (
    <div className=" my-20 relative px-8 md:px-10 lg:px-32">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center relative z-10 my-10">
        <div className="w-full sm:w-1/2 ">
          <Typography variant="alpha"><p className="mt-5 text-defaultcol text-center sm:text-left dark:text-white">Community Bounty Page</p></Typography>
        </div>
        <div className="my-5 w-full sm:w-5/6 flex flex-col sm:flex-row justify-center sm:justify-end items-center">
          <div className="relative w-full sm:w-1/2">
            <input onChange={(e) => { setkey(e.target.value); }} className="p-2 pr-5 w-full rounded-md " placeholder="search for bounty" />
            <BsSearch className="absolute text-slate-300 top-2 right-2 text-lg" />
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-full h-fit  md:w-1/3 p-10 shadow-md flex flex-col space-y-10">
          <div>
            <Button> Top Bounties</Button>
          </div>

          <div>
            <Typography>SortBy</Typography>
            <Checkbox onValueChange={(value) => setPrice(value)} value={price}>Price</Checkbox>
            <Checkbox onValueChange={(value) => setTag(value)} value={tag}>Tag</Checkbox>
          </div>
          <div>
            <Typography>Top Hunters</Typography>
            {hunters.map((name) => (
              <div className="rounded shadow p-2 my-5 relative">
                <Typography>{name.name}</Typography>
                <Badge className="">
                  $
                  {name.hunts}
                </Badge>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3  p-1 sm:p-5">
          {bounties.map((bounty) => (
            <div className="my-10 py-10 p-5 md:p-10 w-full shadow-2xl flex flex-col md:flex-row items-start relative">
              <div className="w-full sm:w-1/6">
                <div>
                  <img alt="sample" className="" src={imageSample} />

                </div>
              </div>
              <div className="w-full md:w-5/6 h-full ml-0 md:ml-5 flex flex-col">
                <div className="h-full my-2"><Typography variant="beta">{bounty.title}</Typography></div>
                <div>
                  <Typography>{bounty.content}</Typography>
                </div>
              </div>
              <div className="absolute right-0 top-0">
                <Badge>{bounty.tag}</Badge>
              </div>
              <div className="absolute bottom-0 right-0">
                <Badge>
                  <Typography>
                    <span className="p-4">
                      $
                      {bounty.prize}
                    </span>
                  </Typography>
                </Badge>
              </div>
              <Link className="absolute bottom-0 left-0 border" to="/bounty-submission"><Button>Submit</Button></Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
