import { Link } from 'react-router-dom';
import {
  Typography, Box, Button, Divider,
} from '@strapi/design-system';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import plugins from '../utils/plugins';
import 'react-lazy-load-image-component/src/effects/blur.css';
import lazyImage from '../assets/images/feature.jpg';

import centeredBg from '../assets/images/strapi-bg-centered.svg';

export default function Plugins() {
  return (
    <div id="plugins" className=" my-60 relative px-8 md:px-10 lg:px-32">
      <Typography variant="alpha"><p className="mt-5 text-defaultcol dark:text-white text-center sm:text-left">Latest Community Plugins</p></Typography>
      <Box paddingBottom={8} paddingTop={4}>
        <Divider className="w-full sm:w-1/2" />
      </Box>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {plugins.slice(0, 6).map((plugin) => (
          <div key={plugin.id} className=" group h-64 relative rounded-2xl shadow-lg dark:shadow-black">
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
      <div className="flex items-center justify-center my-10"><Link to="/plugins"><Button className="shadow-xl" style={{ padding: '20px' }} size="L">More Plugins...</Button></Link></div>
      <img alt="centeredbg" src={centeredBg} className="absolute w-32 h-32 hidden sm:block bottom-0 left-0 z-0" />

    </div>
  );
}
