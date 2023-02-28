import React from 'react';
import { Typography } from '@strapi/design-system';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function CommunitySpotlights() {
  return (
    <div id="spotlight" className="my-20 relative px-8 md:px-10 lg:px-32">
      <div className="my-5 w-full ">
        <Typography variant="alpha"><p className="my-10 text-defaultcol dark:text-white text-center sm:text-left">Community Spotlight</p></Typography>
        <div className="grid gap-1 gap-y-10 sm:grid-cols-1 md:grid-cols-3 ">
          <a className="inline-block w-full rounded-md shadow-2xl relative" href="https://strapi.io/blog/community-spotlight-2-shahin-rostami">
            <div className="">
              <LazyLoadImage
                width="100%"
                height="192px"
                alt="star"
                placeholderSrc="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Ryan_(1)_e9479e4cb2.png"
                effect="blur"
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Ryan_(1)_e9479e4cb2.png"
                className="absolute sm:h-full rounded-lg"
              />
              <div className="flex flex-col justify-start h-60 my-5 sm:my-0 p-3">
                <Typography variant="beta"><p className="text-defaultcol dark:text-white font-bold text-center my-3">Community Spotlight #2 - Shahin Rostami</p></Typography>
                <Typography variant="epsilon"><p className="text-center">Shahin Rostami is a Senior Academic in Data Science and AI who's discovered Strapi. He is...</p></Typography>
              </div>
            </div>
          </a>
          <a className="inline-block w-full rounded-md shadow-2xl relative" href="https://strapi.io/blog/community-spotlight-4-ryan-belke">
            <div>
              <LazyLoadImage
                width="100%"
                height="192px"
                alt="star"
                placeholderSrc="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Ryan_(2)_dc8e1dad24.png"
                effect="blur"
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Ryan_(2)_dc8e1dad24.png"
                className="absolute sm:h-full rounded-lg"
              />
              <div className="flex flex-col justify-start h-60 my-5 sm:my-0 p-3">
                <Typography variant="beta"><p className="text-defaultcol dark:text-white font-bold text-center my-3">Community Spotlight #2 - Ryan Belke</p></Typography>
                <Typography variant="epsilon"><p className="text-center">Ryan Belke is a member of the Strapi community and creator of the Cooking a...</p></Typography>
              </div>
            </div>
          </a>

          <a className="inline-block w-full rounded-md shadow-2xl  relative" href="https://strapi.io/blog/community-spotlight-2-shahin-rostami">
            <div>
              <LazyLoadImage
                width="100%"
                height="192px"
                alt="star"
                placeholderSrc="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Alessandro_80467f0f89.png"
                effect="blur"
                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Alessandro_80467f0f89.png"
                className="absolute sm:h-full rounded-lg"
              />
              <div className="flex flex-col justify-start h-60 my-5 sm:my-0 p-3">
                <Typography variant="beta"><p className="text-defaultcol dark:text-white font-bold text-center my-3">Community Spotlight #5 - Alessandro Valerani</p></Typography>
                <Typography variant="epsilon"><p className="text-center">In the Strapi community for years, Alex the Entreprenerd helps aspiring programmers land their first job in tech...</p></Typography>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
