import React, { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Button, Typography,
  Box, Divider, Link, Icon, Grid,
} from '@strapi/design-system';
import {
  ArrowRight, Facebook, Github, Twitter, Globe,
} from '@strapi/icons';

import theodore from '../assets/images/theodore.png';
import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.png';
import profile3 from '../assets/images/profile3.png';
import profile4 from '../assets/images/profile4.png';

import topRightSvg from '../assets/images/strapi-bg-top-right-2.svg';
import bottomLeftSvg from '../assets/images/strapi-bg-bottom-left.svg';

import AppContext from '../Context/Context';

export default function Hero() {
  const { theme } = useContext(AppContext);
  return (
    <div className="screen-height  sm:h-full image-bg relative" style={{ background: `url(${theme === 'dark' ? '' : 'bg-white'})` }}>
      <div className="h-full flex flex-row sm:justify-between md:px-10 lg:px-32">
        <div className="hidden md:flex w-1/2  mx-5 flex-col  justify-center">
          <h1 className="font-bold w-full sm:hidden md:hidden lg:block text-white lg:mt-28">
            <Typography color="neutral1000" variant="alpha" style={{ fontSize: '4em', fontWeight: 'bolder' }}>Welcome to Strapi Community</Typography>
          </h1>
          <h1 className="font-bold w-full sm:hidden lg:hidden md:block text-white lg:mt-28">
            <Typography color="neutral1000" variant="alpha" style={{ fontSize: '4em', fontWeight: 'bolder' }}>Welcome to Strapi Community</Typography>
          </h1>
          <h1 className="font-bold w-full lg:hidden md:hidden sm:block   text-white md:mt-28">
            <Typography color="neutral1000" variant="alpha" style={{ fontSize: '2em', fontWeight: 'bolder' }}>Welcome to Strapi Community</Typography>
          </h1>
          <div className="my-5">
            <Grid gap={5}>
              <div>
                <Link to="https://strapi.io/" className="bg-white rounded-full p-2">
                  <Icon width={`${25 / 16}rem`} height={`${25 / 16}rem`} color="buttonPrimary600" as={Github} />
                </Link>
              </div>
              <div>
                <Link to="https://strapi.io/" className="bg-white rounded-full p-2">
                  <Icon width={`${25 / 16}rem`} height={`${25 / 16}rem`} color="buttonPrimary600" as={Twitter} />
                </Link>
              </div>
              <div>
                <Link to="https://strapi.io/" className="bg-white rounded-full p-2">
                  <Icon width={`${25 / 16}rem`} height={`${25 / 16}rem`} color="buttonPrimary600" as={Facebook} />
                </Link>
              </div>
              <div>
                <Link to="https:/./strapi.io/" className="bg-white rounded-full p-2">
                  <Icon width={`${25 / 16}rem`} height={`${25 / 16}rem`} color="buttonPrimary600" as={Globe} />
                </Link>
              </div>
            </Grid>
          </div>
          <div className="flex  w-full my-5">
            <Button size="L" className="shadow-xl" style={{ padding: '30px' }}>Join The Discord</Button>
          </div>
          {/* Featured content */}
          <div className="">
            <p className="">
              <Typography variant="alpha">How To Create a Book Ratings app with Strapi Ratings Plugin</Typography>
            </p>
            <p className="mt-10 md:block lg:hidden border-l-8 mb-3 font-bold"><Typography variant="beta">How To Create a Book Ratings app with Strapi Ratings Plugin</Typography></p>
            <p className="my-5 relative z-10"><Button className="shadow-xl" variant="secondary" size="M" endIcon={<ArrowRight />}>Continue Reading...</Button></p>
          </div>
          <Box padding={8}>
            <Divider />
          </Box>

        </div>
        <div className="w-full md:w-1/2  lg:w-1/3 h-2/4 md:mt-20 sm:mt-10">
          <div className="p-4  h-full mx-5 parent  relative scatter-bg flex">

            <div className={`${theme === 'dark' ? 'shadow-sm p-1 shadow-black' : ' custom-shadow-1 '} h-24 w-24  rounded-full div1 absolute z-10 left-10`}>
              <img alt="hero" className="w-full  h-full rounded-full object-cover" src={theodore} />
            </div>
            <div className={`${theme === 'dark' ? ' shadow-sm p-1 shadow-black ' : ' custom-shadow-2  rounded-full '} h-20 w-20  div2 custom-shadow absolute z-10 top-28 right-0`}>
              <img alt="hero" className="w-full h-full object-cover" src={profile1} />
            </div>
            <div className={`${theme === 'dark' ? 'text-white' : ' text-defaultcol'} text-focus-in font-extrabold absolute z-30 left-0 bottom-1/4 flex flex-col justify-center text-center items-center w-full `}>
              <TypeAnimation
                sequence={[
                  'Strapi Community!',
                ]}
                wrapper="div"
                cursor={false}
                repeat={0}
                style={{ fontSize: '3em', marginBottom: '5px', textAlign: 'center' }}
              />
              <TypeAnimation
                sequence={[
                  'Made by developers',
                  5000,
                  'For Developers',
                  5000,
                  'One Community', // Types 'One'
                  5000, // Waits 1s
                  'We are the best!', // Deletes 'One' and types 'Two'
                  5000, // Waits 2s
                  'One Family', // Types 'Three' without deleting 'Two'
                  5000,
                  'Various diversities',
                  5000,
                  () => {
                    // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor
                repeat={Infinity}
                style={{ fontSize: 'thin' }}
              />

            </div>
            <div className={`${theme === 'dark' ? 'shadow-sm p-1 shadow-black' : ' custom-shadow-2 '}  h-20 w-20 rounded-full div4 custom-shadow absolute z-10 top-56 left-0 md:-left-20`}>
              <img alt="hero" className="w-full h-full object-cover" src={profile3} />
            </div>
            <div className={`${theme === 'dark' ? 'shadow-sm p-1 shadow-black' : ' custom-shadow-1 '}  h-24 w-24 rounded-full div1 absolute z-10 -bottom-20 right-7`}>
              <img alt="hero" className="w-full h-full rounded-full object-cover" src={profile4} />
            </div>

            <div className={`${theme === 'dark' ? 'shadow-sm p-1 shadow-black' : ' custom-shadow-1 '} h-44 w-44 absolute -bottom-28 z-10 sm:-bottom-52 flex  rotate-in-center rounded-full p-2 div3 `}>
              <img alt="hero" className="w-full rounded-full h-full object-cover" src={profile2} />
            </div>

          </div>
        </div>
      </div>

      <div style={{ padding: '40px', paddingBottom: '20px', bottom: '12%' }} className="absolute  z-30 md:hidden   flex flex-col justify-center items-center w-full">
        <div className="flex justify-center">
          <Button size="L" className="shadow-xl heartbeat" style={{ padding: '30px' }}>Join The Discord</Button>
        </div>
        <div className="md:hidden bottom-10 text-center px-5 relative z-10 my-10">
          <p className="my-5 font-thin"><Typography variant="delta">How To Create a Book Ratings app with Strapi Ratings Plugin</Typography></p>
          <p className="w-full flex justify-center"><Button className="text-center" variant="secondary" size="M" endIcon={<ArrowRight />}>Continue Reading...</Button></p>
        </div>
      </div>
      <img alt="hero" src={topRightSvg} className="absolute  top-0 right-0 md:right-10 w-40 z-0" />
      <img alt="hero" src={bottomLeftSvg} className="absolute z-0  bottom-28 md:bottom-10 w-40 h-40 -left-7 md:left-5" />
    </div>
  );
}
