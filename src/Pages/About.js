import { useState } from 'react';
import {
  Typography, Button, Divider, Box, TextInput, Textarea, Tooltip,
} from '@strapi/design-system';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import upstairs from '../assets/images/upstairs.png';
import plane from '../assets/images/plane.svg';
import triangleCenter from '../assets/images/triangle-center.svg';
import dotted from '../assets/images/dotted.svg';
import multikite from '../assets/images/multikite.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function YoutubeSlide({ url, isSelected }) {
  return <ReactPlayer volume={0.1} muted width="100%" url={url} controls playing={isSelected} />;
}

function YoutubeAutoplayWithCustomThumbs() {
  const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

  const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

  const customRenderThumb = (children) => children.map((item) => {
    const videoId = getVideoId(item.props.url);
    return <img alt="youtube video" src={getVideoThumb(videoId)} />;
  });

  return (
    <Carousel className="w-full" renderItem={customRenderItem} renderThumbs={customRenderThumb}>
      <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/8IE8-EbzCx4" />
      <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/Ge-dDLgafP8" />
      <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/VP4AOpECkbc" />
      <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/Ge-dDLgafP8" />
    </Carousel>
  );
}
export default function About() {
  const [message, setMessage] = useState('');
  return (
    <div className='className="my-20 relative px-3 sm:px-8 md:px-10 lg:px-32'>
      <div className="flex flex-col justify-center items-center">
        <Typography variant="beta"><p className="mt-5 dark:text-white font-extrabold text-center mdtext-left uppercase">ABOUT US</p></Typography>
        <Typography variant="alpha"><p className="mt-5 text-defaultcol dark:text-white font-extrabold text-center mdtext-left">The Community Story</p></Typography>
        <div className="my-5 w-full md:w-2/4">
          <Typography variant="epsilon">
            <p className="text-center">
              Esse cillum amet aliqua velit. Consequat ipsum mollit commodo incididunt magna. Culpa eiusmod occaecat dolor ad sunt elit enim adipisicing. Cillum ea aliquip esse est nisi aute consequat nisi cillum id eiusmod excepteur cupidatat. Do nostrud commodo et et amet eiusmod Lorem. Ea consequat qui est officia ea sit quis mollit officia ex cillum esse.
            </p>
          </Typography>
        </div>
        <div className="my-10">
          <YoutubeAutoplayWithCustomThumbs />
        </div>
      </div>
      <div className="my-20 md:my-40 flex flex-col justify-center items-center">
        <Typography variant="beta"><p className="mt-5 dark:text-white font-extrabold text-center mdtext-left uppercase">OUR VALUES</p></Typography>
        <div className="my-5 w-full md:w-2/4">
          <Typography variant="epsilon">
            <p className="text-center">
              Exercitation occaecat ullamco ullamco veniam occaecat ex dolore fugiat voluptate laboris culpa occaecat aliqua sunt. Officia anim id aliqua ad anim duis nostrud dolor quis. Fugiat cillum sint occaecat sit elit labore reprehenderit. Voluptate eu eu duis sunt cupidatat adipisicing elit.
            </p>
          </Typography>

        </div>
        <button type="button" className="button group">
          <Typography>
            <span className="group-hover:text-white">Read more in our Handbook</span>
          </Typography>
        </button>
      </div>
      <div className="my-20 md:my-40 grid grid-cols-6 gap-4">

        <div className="col-start-2 col-span-4">
          <img alt="about" src="https://cdn-images.welcometothejungle.com/7cuI0CAVUmjnxPXrF20_gUMrcNHjGi40JIL3H2rppKs/rs:auto:2000:450:/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy93ZWJzaXRlX29yZ2FuaXphdGlvbi9jb3Zlcl9pbWFnZS93dHRqX2ZyL2VuLWNmNGY4NTJjLTM1YzgtNGU4Ni1hMTBhLTU0NTI5MDg2ZDc5My5qcGc" />
        </div>
        <div className="col-start-1 col-end-7">
          <img alt="about" src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_0257_2a8182e578.jpg" />
        </div>
      </div>

      <div className="my-20 md:my-40 flex flex-col justify-center items-center relative">
        <Typography variant="beta"><p className="mt-5 dark:text-white font-extrabold text-center mdtext-left uppercase">HOW WE WORK</p></Typography>
        <div className="my-5 w-full md:w-2/4">
          <Typography variant="epsilon">
            <p className="text-center">
              Exercitation occaecat ullamco ullamco veniam occaecat ex dolore fugiat voluptate laboris culpa occaecat aliqua sunt. Officia anim id aliqua ad anim duis nostrud dolor quis. Fugiat cillum sint occaecat sit elit labore reprehenderit. Voluptate eu eu duis sunt cupidatat adipisicing elit.
            </p>
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-y-10 my-10">
          <a href="/" data-aos="fade-up">
            <div className="shadow rounded-md p-5">
              <div className="flex items-center justify-start space-x-5 font-bold my-5">
                <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                <Typography variant="beta"><p className="text-defaultcol dark:text-white">Lorem ipsum</p></Typography>
              </div>
              <div className="my-5 flex justify-end md:space-x-12">
                <div className="hidden md:block" />
                <Typography variant="epsilon" className="w-full ">
                  Incididunt nostrud Lorem Lorem qui sit sit ea in duis. Laboris incididunt est excepteur Lorem elit nostrud reprehenderit incididunt nostrud aliquip ex tempor. Culpa ea incididunt anim enim mollit aute.
                </Typography>
              </div>
              <Divider className="block w-full md:hidden" />
            </div>
          </a>
          <a href="/" data-aos="fade-up">
            <div className="shadow rounded-md p-5">
              <div className="flex items-center justify-start space-x-5 font-bold my-5">
                <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                <Typography variant="beta"><p className="text-defaultcol dark:text-white">Lorem ipsum</p></Typography>
              </div>
              <div className="my-5 flex justify-end md:space-x-12">
                <div className="hidden md:block" />
                <Typography variant="epsilon" className="w-full ">
                  Pariatur nostrud deserunt irure ipsum cillum id anim anim sit qui. Eiusmod consectetur voluptate amet laboris exercitation occaecat. Excepteur deserunt cupidatat aute dolor occaecat. Officia irure ex ipsum sit duis dolore magna.
                </Typography>
              </div>
              <Divider className="block w-full md:hidden" />
            </div>
          </a>
          <a href="/" data-aos="fade-up">
            <div className="shadow  rounded-md p-5">
              <div className="flex items-center justify-start space-x-5 font-bold my-5">
                <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                <Typography variant="beta"><p className="text-defaultcol dark:text-white">Lorem ipsum</p></Typography>
              </div>
              <div className="my-5 flex justify-end md:space-x-12">
                <div className="hidden md:block" />
                <Typography variant="epsilon" className="w-full ">
                  Amet proident duis enim qui dolor nostrud nostrud velit eu consequat culpa velit est labore. Quis Lorem minim est incididunt commodo cillum ex minim ad fugiat commodo exercitation sit qui. Anim labore elit ullamco ex magna aliqua aliquip.
                </Typography>
              </div>
              <Divider className="block w-full md:hidden" />
            </div>
          </a>
          <a href="/" data-aos="fade-up">
            <div className="shadow rounded-md p-5">
              <div className="flex items-center justify-start space-x-5 font-bold my-5">
                <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                <Typography variant="beta"><p className="text-defaultcol dark:text-white">Lorem ipsum</p></Typography>
              </div>
              <div className="my-5 flex justify-end md:space-x-12">
                <div className="hidden md:block" />
                <Typography variant="epsilon" className="w-full ">
                  Minim labore duis non laboris esse sint esse eiusmod aute ad do quis labore. Anim minim sit do pariatur ullamco ex cupidatat labore ad aliqua. Labore esse in deserunt sunt ad aute ex et in aliquip. Do et pariatur reprehenderit in aute dolore cupidatat veniam magna eiusmod do aliquip cillum aliquip. Duis consectetur aute elit sunt aute non eu. Voluptate adipisicing consequat duis ad dolor fugiat fugiat commodo tempor. Est reprehenderit consequat ex ut laboris mollit et cupidatat.
                </Typography>
              </div>
              <Divider className="block w-full md:hidden" />
            </div>
          </a>
          <a href="https://strapi.io/showcases" data-aos="fade-up">
            <div className="shadow  rounded-md p-5">
              <div className="flex items-center justify-start space-x-5 font-bold my-5">
                <Typography><BsFillCheckCircleFill className="text-orange-300 text-3xl" /></Typography>
                <Typography variant="beta"><p className="text-defaultcol dark:text-white">Lorem ipsum</p></Typography>
              </div>
              <div className="my-5 flex justify-end md:space-x-12">
                <div className="hidden md:block" />
                <Typography variant="epsilon" className="w-full ">
                  Tempor non cillum ut amet esse incididunt incididunt. Pariatur nulla eiusmod cillum laboris ea est quis consequat. Do exercitation amet exercitation anim reprehenderit Lorem ea sit in pariatur.
                </Typography>
              </div>
              <Divider className="block w-full md:hidden" />
            </div>
          </a>
        </div>
        <button type="button" className="button group">
          <Typography>
            <span className="group-hover:text-white">Read more in our Handbook</span>
          </Typography>
        </button>
        <img className="absolute hidden md:block -left-10 w-60 h-60 -bottom-10" src={triangleCenter} alt="triangle" />
        <img className="absolute hidden w-24 h-24 left-0 -bottom-28" src={dotted} alt="dotted" />

      </div>

      <div className="">
        <div className="flex justify-center">
          <Typography variant="beta"><p className="mt-5 dark:text-white font-extrabold text-center mdtext-left uppercase">TALK TO US</p></Typography>
        </div>
        <div className="my-20 flex flex-col md:flex-row items-center">
          <div className=" h-80  md:w-1/2">
            <img className="h-full w-full" src={upstairs} alt="upstairs" />
          </div>
          <div className="form-bg bg-bgForm  h-80  w-full md:w-1/2 flex flex-col justify-center p-10 rounded-2xl mt-10 md:mt-0 relative">
            <form className="flex flex-col space-y-3">
              <div>
                <Box>
                  <TextInput placeholder="Email" label=" " name="" hint="" />
                </Box>
              </div>
              <div>
                <Box>
                  <Textarea value={message} onChange={(e) => { setMessage(e.target.value); }} className="text-white bg-red-500" placeholder="What message do you have for us!" label=" " name="content" hint="" />
                </Box>
              </div>
              <div className=" h-12 group w-full  relative">
                <button type="button" className="bg-formBtn p-3 rounded relative z-10 text-white w-full h-full text-center">Send</button>
                <button type="button" className="group-hover:scale-x-105 rounded block h-full w-full bg-formBtn absolute top-0 z-0 transition-all duration-300" />
              </div>
              <div className="absolute -top-11 left-0 w-full flex justify-center sm:justify-end ">
                <img alt="plane" src={plane} className="w-20 h-20 absolute " />
              </div>
            </form>
          </div>
        </div>

      </div>
      <img src={multikite} alt="multikite" className="absolute hidden md:block right-0 top-0" />
    </div>
  );
}
