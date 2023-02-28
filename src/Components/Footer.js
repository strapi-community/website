import {
  Box, Divider, Typography, Icon,
} from '@strapi/design-system';
import {
  FaGithub, FaTwitter, FaYoutube, FaDiscord, FaInstagram, FaFacebook, FaTwitch, FaLinkedin,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="p-10 md:px-10 lg:px-32">
      <Box paddingBottom={8} paddingTop={4}>
        <Divider className="w-full" />
      </Box>
      <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between">
        <div className="flex flex-col lg:flex-row space-x-5 items-center justify-center w-2/5">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Typography><p className="text-sm  my-5">© 2023, Strapi</p></Typography>
          </div>
          <div className="flex w-1/2 space-x-5 items-center justify-center">
            <Typography><p className="text-sm hover:text-defaultcol cursor-pointer">License</p></Typography>
            <Typography><p className="text-sm hover:text-defaultcol cursor-pointer">Terms</p></Typography>
            <Typography><p className="text-sm hover:text-defaultcol cursor-pointer">Privacy</p></Typography>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-20 justify-center items-center">
          <Typography><p className="my-5 text-sm hover:text-defaultcol cursor-pointer">Join us on</p></Typography>
          <div className="flex flex-row :flex-col md:flex-row my-5 space-x-5 w-3/5 justify-center items-center md:justify-end">
            <div className="flex space-x-5">
              <Typography><FaGithub className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
              <Typography><FaTwitch className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
              <Typography><FaTwitter className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
              <Typography><FaFacebook className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
            </div>
            <div className="flex space-x-5 my-5">
              <Typography><FaInstagram className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
              <Typography><FaYoutube className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
              <Typography><FaLinkedin className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
              <Typography><FaDiscord className="text-xl hover:text-defaultcol cursor-pointer" /></Typography>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
