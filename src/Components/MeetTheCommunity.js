import {
  Divider, Typography,
} from '@strapi/design-system';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import womanLaughing from '../assets/images/strapi-bg-woman-laughing.jpeg';
import womanPressingLaptop from '../assets/images/woman-pressing-laptop.jpeg';
import bottomLeft from '../assets/images/strapi-bg-bottom-left-1.svg';
import doubleBg from '../assets/images/strapi-double-bg.svg';

export default function MeetTheCommunity() {
  return (
    <div id="meet_the_community" className="my-32 sm:my-60  relative px-8 md:px-10 py-10 lg:px-32 bg-white dark:bg-defaultcol">
      <div className="w-full flex justify-center p-0 sm:px-20 lg:px-60 relative z-10">
        <div>
          <Typography variant="alpha"><p className="mt-5 text-defaultcol dark:text-white font-extrabold text-center">Meet The Community</p></Typography>
          <Typography>
            <p className="mt-5 text-2xl text-center">
              Our mission is to create an environment where developers can help and get help from one another. Here’s a few ways you can connect, contribute and learn.
            </p>
          </Typography>

          <div className="grid grid-cols-1 gap-y-10 my-10">
            <a href="https://github.com/strapi/strapi-meetups" data-aos="fade-up">
              <div className="shadow rounded-md p-5">
                <div className="flex items-center justify-start space-x-5 font-bold my-5">
                  <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                  <Typography variant="beta"><p className="text-defaultcol dark:text-white">Strapi Meetups</p></Typography>
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
            </a>
            <a href="https://app.livestorm.co/strapi" data-aos="fade-up">
              <div className="shadow rounded-md p-5">
                <div className="flex items-center justify-start space-x-5 font-bold my-5">
                  <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                  <Typography variant="beta"><p className="text-defaultcol dark:text-white">Strapi Online Meetups</p></Typography>
                </div>
                <div className="my-5 flex justify-end md:space-x-12">
                  <div className="hidden md:block" />
                  <Typography variant="epsilon" className="w-full ">
                    Watch the previous Strapi online Meetups or sign up for the next ones to stay up to date with the latest releases and features!
                  </Typography>
                </div>
                <Divider className="block w-full md:hidden" />
              </div>
            </a>
            <Link to="/articles" data-aos="fade-up">
              <div className="shadow  rounded-md p-5">
                <div className="flex items-center justify-start space-x-5 font-bold my-5">
                  <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                  <Typography variant="beta"><p className="text-defaultcol dark:text-white">Tutorials</p></Typography>
                </div>
                <div className="my-5 flex justify-end md:space-x-12">
                  <div className="hidden md:block" />
                  <Typography variant="epsilon" className="w-full ">
                    Learn how to build your Strapi project with step-by-step tutorials written by the Strapi community.
                  </Typography>
                </div>
                <Divider className="block w-full md:hidden" />
              </div>
            </Link>
            <a href="https://forum.strapi.io/" data-aos="fade-up">
              <div className="shadow rounded-md p-5">
                <div className="flex items-center justify-start space-x-5 font-bold my-5">
                  <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                  <Typography variant="beta"><p className="text-defaultcol dark:text-white">Strapi Forum</p></Typography>
                </div>
                <div className="my-5 flex justify-end md:space-x-12">
                  <div className="hidden md:block" />
                  <Typography variant="epsilon" className="w-full ">
                    Leverage the community knowledge to learn how Strapi can help you smooth your workflow.
                  </Typography>
                </div>
                <Divider className="block w-full md:hidden" />
              </div>
            </a>
            <a href="https://strapi.io/showcases" data-aos="fade-up">
              <div className="shadow  rounded-md p-5">
                <div className="flex items-center justify-start space-x-5 font-bold my-5">
                  <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                  <Typography variant="beta"><p className="text-defaultcol dark:text-white">Showcase</p></Typography>
                </div>
                <div className="my-5 flex justify-end md:space-x-12">
                  <div className="hidden md:block" />
                  <Typography variant="epsilon" className="w-full ">
                    The Strapi community is always building amazing websites, apps, IoT devices, and more! Discover them here.
                  </Typography>
                </div>
                <Divider className="block w-full md:hidden" />
              </div>
            </a>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 my-20">
        <div id="open_source" data-aos="fade-right">
          <Typography variant="beta">
            <p className="text-defaultcol dark:text-white text-3xl">Open-source gives power to the people</p>
          </Typography>
          <Typography><p className="text-lg my-5">We are great believers and contributors to open source and its philosophy. The Strapi project is not only fully open-source and available to all under an MIT license, our product roadmap and design system are also public!</p></Typography>
          <a href="https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration">
            <button type="button" className="button">
              <Typography color="neutral0">
                <span className="hover:text-white">Check the roadmap</span>
              </Typography>
            </button>
          </a>
        </div>
        <div id="news" data-aos="fade-left">
          <Typography variant="beta">
            <p className="text-defaultcol dark:text-white text-3xl">Community News</p>
          </Typography>
          <Typography><p className="text-lg my-5">Get the latest Strapi news by email. The Strapi Weekly is a newsletter with the latest news on the Strapi world and the agenda for the upcoming weeks.</p></Typography>
          <a href="https://strapi.io/email-updates">
            <button type="button" className="button">
              <Typography>
                <span className="hover:text-white">Signup for newsletter</span>
              </Typography>
            </button>
          </a>
        </div>
      </div>
      <img className="absolute w-80 hidden lg:block z-0 top-0 left-0" src={womanLaughing} alt="woman laughing" />
      <img className="absolute w-72 hidden lg:block  bottom-96 right-0 z-0" src={womanPressingLaptop} alt="woman pressing laptop" />
      <img className="absolute w-40 hidden lg:block bottom-96 left-0 z-0" src={bottomLeft} alt="background" />
      <div className="hidden lg:block w-80 h-96 bg-white dark:bg-defaultcol absolute top-0 z-10 left-0" style={{ clipPath: 'polygon(100% 1%, 0% 100%, 100% 100%)' }} />
      <div className="hidden lg:block w-96 h-96 bg-white dark:bg-defaultcol absolute right-0 bottom-96 z-10" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }} />

    </div>
  );
}
