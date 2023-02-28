import React, { useContext } from 'react';
import scrollSmooth from 'scroll-smooth';
import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
  Box,
} from '@strapi/design-system';
import { useLocation } from 'react-router-dom';
import strapiFullLogoLight from '../assets/images/Strapi.full.logo.light.png';
import strapiFullLogoDark from '../assets/images/Strapi.full.logo.dark.png';
import AppContext from '../Context/Context';
import subLinks from '../utils/sublinks';
import links from '../utils/links';

export default function SubNavigation({
  searchValue, setSearchValue, isSubNavOpen, setIsSubNavOpen,
}) {
  const { theme } = useContext(AppContext);
  const location = useLocation();

  const scrollTo = (elmId) => {
    setIsSubNavOpen(false);
    scrollSmooth.to(document.querySelector(elmId), {
      duration: 1500,
      offset: -140,
    });
  };
  return (
    <div className="bg-black bg-opacity-80 w-full pr-0">
      <Box className="w-full bg-black z-0 " style={{ overFlow: 'scroll' }} background="neutral200">
        <div className="z-50 p-5">
          <img
            className="w-44 h-auto"
            src={theme === 'dark' ? strapiFullLogoLight : strapiFullLogoDark}
            alt="logo"
          />
        </div>
        <SubNav ariaLabel="Builder sub nav">
          <SubNavHeader searchable value={searchValue} onClear={() => setSearchValue('')} onChange={(e) => setSearchValue(e.target.value)} label="Strapi Community" />
          <SubNavSections label=" ">
            <SubNavSection label="Pages">
              {links.map((link) => (
                <SubNavLink label="" onClick={() => { setIsSubNavOpen(!isSubNavOpen); }} to={link.to} active={link.active} key={link.id}>
                  {link.label}
                </SubNavLink>
              ))}
            </SubNavSection>

            {location.pathname === '/' ? (
              <SubNavSection label=" ">
                {subLinks.map((link) => (
                  <SubNavLink label=" " onClick={() => { scrollTo(link.target); }} to="/" key={link.id}>
                    <img alt="subnav" src={link.src} />
                    {link.label}
                  </SubNavLink>
                ))}
              </SubNavSection>
            )
              : null}
          </SubNavSections>
        </SubNav>

      </Box>

    </div>

  );
}
