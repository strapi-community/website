import { useState } from 'react';
import {
  Typography,
} from '@strapi/design-system';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BsSearch } from 'react-icons/bs';
import plugins from '../utils/plugins';
import 'react-lazy-load-image-component/src/effects/blur.css';
import doubleTopLeft from '../assets/images/double-top-left.svg';
import centeredBg from '../assets/images/strapi-bg-centered.svg';

export default function Plugins() {
  const [key, setkey] = useState('');
  return (
    <div className=" my-60 relative px-8 md:px-10 lg:px-32">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center relative z-10 my-10">
        <div className="w-full sm:w-1/2 ">
          <Typography variant="alpha"><p className="mt-5 text-defaultcol text-center sm:text-left dark:text-white">Latest Community Plugins</p></Typography>
        </div>
        <div className="my-5 w-full sm:w-5/6 flex flex-col sm:flex-row justify-center sm:justify-end items-center">
          <div className="relative w-full sm:w-1/2">
            <input onChange={(e) => { setkey(e.target.value); }} className="p-2 pr-5 w-full rounded-md " placeholder="search for plugin" />
            <BsSearch className="absolute text-slate-300 top-2 right-2 text-lg" />
          </div>
        </div>
      </div>
      {plugins.find((item) => item.title.toLowerCase().includes(key.trim().toLowerCase())) ? null
        : (
          <div className="text-center p-20">
            <Typography><p className="text-red-500">No Plugin found!</p></Typography>
          </div>
        )}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {plugins
          .filter((item, index) => {
            if (key.trim() === '') {
              return item;
            }
            if (item.title.toLowerCase().includes(key.trim().toLowerCase())) {
              return item;
            }

            return null;
          })
          .map((plugin) => (
            <div className=" group h-64 relative z-10 rounded-2xl shadow-lg dark:shadow-black">
              <div className="group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-defaultcol rounded-2xl absolute h-64 w-full z-10 transition-all duration-300" />
              <div className=" h-64 w-full  relative z-20 p-5 rounded-2xl">
                <LazyLoadImage
                  width="80px"
                  height="80px"
                  alt="plugin"
                  placeholderSrc={plugin.imageSrc}
                  effect="blur"
                  src={plugin.imageSrc}
                  className="block max-w-full h-auto rounded-lg"
                />
                <Typography variant="beta" color="secondary"><p className="my-5">{plugin.title}</p></Typography>
                <Typography variant="delta" color="secondary"><p className="my-5">{plugin.content}</p></Typography>
              </div>
            </div>
          ))}
      </div>
      <img alt="centered" src={centeredBg} className="absolute w-32 h-32 hidden sm:block bottom-0 left-0 z-0" />
      <img alt="doubletopleft" src={doubleTopLeft} className="absolute top-0 left-0 w-32 h-32 hidden md:block  z-0" />
    </div>
  );
}
