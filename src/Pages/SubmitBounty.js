import { Typography, Box, TextInput } from '@strapi/design-system';
import plane from '../assets/images/plane.svg';

export default function SubmitBounty() {
  return (
    <div className=" my-20 relative px-8 md:px-10 lg:px-32 flex flex-col justify-center items-center">
      <Typography variant="alpha"><p className="mt-5 text-defaultcol text-center sm:text-left dark:text-white my-10">Submit Bounty</p></Typography>
      <div className="form-bg  bg-bgForm  h-80  w-full md:w-1/2 flex flex-col justify-center p-10 rounded-2xl mt-10 md:mt-0 relative">
        <form className="flex flex-col space-y-3">
          <div>
            <Box>
              <TextInput placeholder="Bounty Name" label=" " name="" hint="" />
            </Box>
          </div>
          <div>
            <Box>
              <TextInput placeholder="Email address" label=" " name="" hint="" />
            </Box>
          </div>
          <div>
            <Box>
              <TextInput placeholder="Github Link to Plugin" label=" " name="" hint="" />
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
  );
}
