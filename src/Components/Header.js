import React, { useState, useContext } from 'react';
import {
  Typography, Box, Button,
  Icon, SearchForm, Searchbar, ToggleCheckbox,
  Stack,
} from '@strapi/design-system';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Moon, Sun,
} from '@strapi/icons';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import scrollSmooth from 'scroll-smooth';
import SubNavigation from './SubNav';
import strapiMonogramLogo from '../assets/images/Strapi.monogram.logo.png';
import AppContext from '../Context/Context';

export default function Header() {
  const {
    theme, themeDark, themeLight, searchValue, setSearchValue,
  } = useContext(AppContext);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);
  const location = useLocation();

  const scrollTo = (elmId) => {
    setIsSubNavOpen(false);
    scrollSmooth.to(document.querySelector(elmId), {
      duration: 1500,
      offset: -140,
    });
  };
  return (
    <Box background="neutral0" className="sticky top-0 z-40">
      <div className="flex items-center justify-between p-5">
        <div className="w-1/3 sm:w-1/6 flex items-center">
          <img className="w-10 h-10" src={strapiMonogramLogo} alt="logo" />
          <Link to="/" className="ml-4"><Typography variant="alpha">Strapi</Typography></Link>
        </div>

        <div className="w-2/3 sm:w-5/6 flex justify-end items-center border">
          <div className="hidden lg:block w-4/6 mr-5">
            <SearchForm>
              <Searchbar name="searchbar" onClear={() => setSearchValue('')} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} clearLabel="Clearing the plugin search" placeholder="e.g: strapi-plugin-abcd">
                Searching for a plugin
              </Searchbar>
            </SearchForm>
          </div>
          <div className="hidden md:block">
            <Stack horizontal spacing={4}>
              <NavLink to="/articles" className=" hover:bg-secondary p-2 px-5 rounded dark:hover:bg-defaultcol border">
                <Typography>Articles</Typography>
              </NavLink>
              <NavLink to="/plugins" className=" hover:bg-secondary p-2 px-5 rounded dark:hover:bg-defaultcol border">
                <Typography>Plugins</Typography>
              </NavLink>
              <NavLink to="/about" className=" hover:bg-secondary p-2 px-5 rounded dark:hover:bg-defaultcol border">
                <Typography>About</Typography>
              </NavLink>
              <NavLink to="/bounties" className=" hover:bg-secondary p-2 px-5 rounded dark:hover:bg-defaultcol border">
                <Typography className="w-32">Bounties</Typography>
              </NavLink>
              <NavLink to="/repos" className=" hover:bg-secondary p-2 px-5 rounded dark:hover:bg-defaultcol border">
                <Typography className="w-fit">Repositories</Typography>
              </NavLink>

              {location.pathname === '/' ? (
                <div to="" className=" group hover:bg-secondary dark:hover:bg-defaultcol p-2 px-5 rounded-md border w-3/4 flex flex-col justify-center items-center transition-all duration-300">
                  <div>
                    <Typography className="flex items-center justify-center">
                      <span> More </span>
                      <MdOutlineKeyboardArrowDown />
                    </Typography>
                    <div className="invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:scale-90 h-0 group-hover:h-96 absolute left-0 w-full transition-all duration-300 bg-transparent scale-50">
                      <div className="bg-white mt-10 shadow-2xl dark:group-hover:bg-defaultcol flex flex-row  rounded-2xl  h-full p-20 relative z-20 transition-all duration-300">
                        <div className="flex flex-col justify-center space-y-10 mr-32 w-1/6">
                          <Link to="/" onClick={() => { scrollTo('#meet_the_community'); }}>
                            <Typography color="secondary" variant="epsilon" className="flex space-x-5">
                              <img alt="community" src="https://api-prod.strapi.io/uploads/Icon_Name_human_centred_COLOR_Y_SIZE_S_51ff49dfec_5dfc2a67c8.svg" />
                              <span className="hover:font-bold">Meet The Community</span>
                            </Typography>
                          </Link>
                          <Link onClick={() => { scrollTo('#articles'); }} to="/">
                            <Typography color="secondary" variant="epsilon" className="flex space-x-5 group">
                              <img alt="community" src="https://api-prod.strapi.io/uploads/Icon_Name_writer_COLOR_P_SIZE_S_a5238fc8ed_5369df102d.svg" />
                              <span className="hover:font-bold">Featured Community Articles</span>
                            </Typography>
                          </Link>
                          <Link onClick={() => { scrollTo('#plugins'); }} to="/">
                            <Typography color="secondary" variant="epsilon" className="flex space-x-5">
                              <img alt="community" src="https://api-prod.strapi.io/uploads/Icon_Name_software_engineers_COLOR_B_SIZE_S_b13384a79f_1_3d92008940.svg" />
                              <span className="hover:font-bold">Latest Community Plugins</span>
                            </Typography>
                          </Link>
                          <Link onClick={() => { scrollTo('#open_source'); }} to="/">
                            <Typography color="secondary" variant="epsilon" className="flex space-x-5">
                              <img alt="community" src="https://api-prod.strapi.io/uploads/Icon_Name_8_COLOR_P_SIZE_S_ca1d33396e_3d5fa1f45c.svg" />
                              <span className="hover:font-bold">Community Opensource Roadmap</span>
                            </Typography>
                          </Link>
                        </div>
                        <div className="flex flex-col justify-start space-y-10 mr-32 w-1/6">
                          <Link onClick={() => { scrollTo('#news'); }} to="/">
                            <Typography color="secondary" variant="epsilon" className="flex space-x-5">
                              <img alt="community" src="https://api-prod.strapi.io/uploads/Icon_Name_Blog_COLOR_P_SIZE_S_1fd7451d3f_d46e30d21d.svg" />
                              <span className="hover:font-bold">Community  News</span>
                            </Typography>
                          </Link>
                          <Link onClick={() => { scrollTo('#spotlight'); }} to="/">
                            <Typography color="secondary" variant="epsilon" className="flex space-x-5">
                              <img alt="community" src="https://api-prod.strapi.io/uploads/Icon_Name_confetti_COLOR_Y_SIZE_S_e3eea25274_e203ddd54e.svg" />
                              <span className="hover:font-bold">Community  Spotlight</span>
                            </Typography>
                          </Link>
                          <Link onClick={() => { scrollTo('#stars'); }} to="/">
                            <Typography color="secondary" variant="epsilon" className="flex space-x-5">
                              <img alt="community" src="https://api-prod.strapi.io/uploads/Icon_Name_User_COLOR_B_SIZE_S_fa186bdf5f_6111b4d037.svg" />
                              <span className="hover:font-bold">Community  Stars</span>
                            </Typography>
                          </Link>
                        </div>

                        <div className="flex flex-col space-y-10 w-1/6 absolute right-24">
                          <Typography><p>THE ANNUAL USER CONFERENCE FOR THE STRAPI COMMUNITY</p></Typography>
                          <div>
                            <img alt="community" src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapiconf_Home_Page_2_5c102e6177.png" />
                          </div>
                          <Button className="bg-defaultcol flex items-center justify-center"><Typography>Watch now</Typography></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
                : null}
            </Stack>
          </div>
          <div className=" w-28 flex justify-center ml-10">
            <ToggleCheckbox
              label="Activate dark mode"
              onLabel={<Icon className="cursor-pointer" width={3} height={3} color="alternative500" as={Moon} />}
              offLabel={<Icon className="cursor-pointer" width={3} height={3} color={`${theme === 'dark' ? 'alternative500' : 'alternative500'}`} as={Sun} />}
              checked={theme === 'dark'}
              onChange={() => (theme === 'light' ? themeDark() : themeLight())}
            >
              ""
            </ToggleCheckbox>
          </div>
          <div className="block md:hidden ml-5">
            <button type="button" onClick={() => { setIsSubNavOpen(!isSubNavOpen); }} className="border  shadow">
              <RiMenu3Fill className="text-defaultcol" size={35} />
            </button>
          </div>

        </div>
      </div>
      <div onClick={() => { setIsSubNavOpen(false); }} className={`${isSubNavOpen ? 'block translate-x-0' : ' hidden '}  absolute z-50 left-0 p-5 w-full bg-black bg-opacity-80 h-screen -translate-x-0`}>
        <button type="button" onClick={() => setIsSubNavOpen(!isSubNavOpen)}><AiOutlineCloseCircle size={35} fill="white" /></button>
      </div>
      <div className={`${isSubNavOpen ? 'block' : 'invisible translate-x-full'} block md:hidden fixed top-0 z-50 right-0 transition-all duration-100`}>
        <SubNavigation setIsSubNavOpen={setIsSubNavOpen} isSubNavOpen={isSubNavOpen} />
      </div>

    </Box>
  );
}
