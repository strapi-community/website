import { useState } from 'react';
import {
  Typography, Accordion, AccordionContent,
  AccordionToggle, Box, Divider,
  AccordionGroup,
} from '@strapi/design-system';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';
import { BsStars, BsFillCheckCircleFill } from 'react-icons/bs';
import stars from '../utils/stars';

import specialBg from '../assets/images/strapi-special-bg.svg';

export default function CommunityStars() {
  const [expandedID, setExpandedID] = useState(null);
  const handleToggle = (id) => () => {
    setExpandedID((s) => (s === id ? null : id));
  };
  return (
    <div id="stars" className="my-20 relative px-8 md:px-10 lg:px-32">
      <Typography variant="alpha"><p className="mt-5 text-defaultcol dark:text-white text-center sm:text-left">Community Stars</p></Typography>
      <Box paddingBottom={8} paddingTop={4}>
        <Divider className="w-full sm:w-1/2" />
      </Box>
      <div className="text-center">
        <Typography variant="beta">
          The Strapi users going above and beyond for the community.
          Positively impacting the community in a meaningful way.
        </Typography>
      </div>
      <div className="grid gap-x-0 gap-y-10 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {stars.map((star) => (
          <div key={star.id} className="w-full flex justify-center">
            <div className=" group h-72 w-full sm:w-64 relative rounded-2xl shadow-lg dark:shadow-black">
              <div className="group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-defaultcol rounded-2xl absolute h-72 w-full z-10 transition-all duration-300" />
              <div className=" h-72 w-full  relative z-20 p-5 mt-5 rounded-2xl text-center">
                <div className="flex justify-center w-full">

                  <div className="relative">
                    <span className="absolute -right-10">
                      <BsStars size={20} className="dark:text-white text-defaultcol" />
                    </span>
                    <LazyLoadImage
                      width="116px"
                      height="116px"
                      alt="star"
                      placeholderSrc={star.imageSrc}
                      effect="blur"
                      src={star.imageSrc}
                      className="absolute w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <Typography variant="beta" color="secondary"><p className="my-5">{star.name}</p></Typography>
                <Typography variant="delta" color="secondary"><p className="my-5 flex justify-center items-center space-x-3 ">{star.links.reverse().map((link) => <span key={link.toString()}>{link === 'linkedin' ? <TfiLinkedin /> : <TfiTwitterAlt />}</span>)}</p></Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-10 "><Typography variant="beta"><p className="my-5 text-defaultcol dark:text-white text-3xl">Contribute to the Strapi Community</p></Typography></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

        <div>
          <div className="flex items-center justify-start space-x-5 font-bold my-5">
            <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
            <Typography variant="beta"><p className="text-defaultcol dark:text-white"> Meetups & Events</p></Typography>
          </div>
          <div className="my-5 flex justify-end md:space-x-12">
            <div className="hidden md:block" />
            <Typography variant="epsilon">
              Start a local meetup or speak at
              conferences & meetups around the
              world. We're here to help.
            </Typography>
          </div>
          <Divider className="block w-full md:hidden" />
        </div>
        <div>
          <div className="flex items-center justify-start space-x-5 font-bold my-5">
            <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
            <Typography variant="beta"><p className="text-defaultcol dark:text-white"> Pull Requests & Issues</p></Typography>
          </div>
          <div className="my-5 flex justify-end md:space-x-12">
            <div className="hidden md:block" />
            <Typography variant="epsilon" className="w-full ">
              Send in bug
              fixes, reproduce
              bugs or add to
              documentation.
            </Typography>
          </div>
          <Divider className="block w-full md:hidden" />
        </div>

        <div>
          <div className="flex items-center justify-start space-x-5 font-bold my-5">
            <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
            <Typography variant="beta"><p className="text-defaultcol dark:text-white"> Technical Content</p></Typography>
          </div>
          <div className="my-5 flex justify-end md:space-x-12">
            <div className="hidden md:block" />
            <Typography variant="epsilon" className="w-full ">
              Share your
              knowledge by
              creating video
              or written
              technical
              content.
            </Typography>
          </div>
          <Divider className="block w-full md:hidden" />
        </div>
      </div>
      <div className="my-5">
        <Box className="my-10" padding={8} background="neutral0">
          <AccordionGroup>
            <Accordion expanded={expandedID === 'acc-2'} onToggle={handleToggle('acc-2')} id="acc-2" size="L">
              <AccordionToggle title="Free Enterprise Version" togglePosition="right" />
              <AccordionContent>
                <Box padding={3}>
                  <Typography>The Community Stars will have a free license to use the Strapi Enterprise Edition with advanced custom roles.</Typography>
                </Box>
              </AccordionContent>
            </Accordion>
            <Accordion expanded={expandedID === 'acc-3'} onToggle={handleToggle('acc-3')} id="acc-3" size="S">
              <AccordionToggle title="Swag and Recognition" togglePosition="right" />
              <AccordionContent>
                <Box padding={3}>
                  <Typography>The Community Stars will have an Exclusive Swag Pack, Recognition on Strapi’s website, Twitter & Online Channels, and opportunities to mentor hackathons & attend conferences for free. All steps towards recognizing them as leaders in their fields.</Typography>
                </Box>
              </AccordionContent>
            </Accordion>
            <Accordion expanded={expandedID === 'acc-4'} onToggle={handleToggle('acc-4')} id="acc-4" size="S">
              <AccordionToggle title="Support and Mentorship" togglePosition="right" />
              <AccordionContent>
                <Box padding={3}>
                  <Typography>The Community Stars will have a larger role to play in the feature development and testing of the project. Strapi also, when applicable, offers help towards becoming a Strapi contributor or even maintainer.</Typography>
                </Box>
              </AccordionContent>
            </Accordion>
            <Accordion expanded={expandedID === 'acc-5'} onToggle={handleToggle('acc-5')} id="acc-4" size="S">
              <AccordionToggle title="Resources and Recommendations" togglePosition="right" />
              <AccordionContent>
                <Box padding={3}>
                  <Typography>The Community Stars get resources and support in their areas of interest and Strapi will offer them professional recommendations for the amazing work they put into their community activity.</Typography>
                </Box>
              </AccordionContent>
            </Accordion>
          </AccordionGroup>
        </Box>
      </div>
      <img src={specialBg} alt="special-bg" className="absolute hidden sm:blockv  -top-32 z-0 right-0" />
    </div>
  );
}
