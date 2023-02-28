import React from 'react';
import Hero from './Hero';
import Articles from './Articles';
import Plugins from './Plugins';
import CommunityStars from './CommunityStars';
import MeetTheCommunity from './MeetTheCommunity';
import CommunitySpotlights from './CommunitySpotlights';

export default function Home() {
  return (
    <div className="  border-4 border-black overflow-hidden">
      <Hero />
      <div className=" my-20">
        <MeetTheCommunity />
        <Articles />
        <Plugins />
        <CommunityStars />
        <CommunitySpotlights />
      </div>
    </div>
  );
}
