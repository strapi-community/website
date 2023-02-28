import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Dot } from '@strapi/icons';

import {
  Divider, Button, Typography, Box, Badge,
} from '@strapi/design-system';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import contents from '../utils/contents';
import Loader from './Loader';

export default function Articles() {
  const [items, setItems] = useState(Array.from({ length: 5 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreContents = () => {
    if (items.length >= contents.length) {
      const newArr = Array.from({ length: contents.length });
      setItems(newArr);
      setHasMore(!hasMore);
      return;
    }
    setTimeout(() => {
      const newArr = items.concat(Array.from({ length: 3 }));
      setItems(newArr);
    }, 500);
  };
  return (
    <div id="articles" className="my-20 relative px-8 md:px-10 lg:px-32">
      <Typography variant="alpha"><p className="mt-5 text-defaultcol dark:text-white font-extrabold text-center sm:text-left">Latest Community Articles</p></Typography>
      <Box paddingBottom={8} paddingTop={4}>
        <Divider className="w-full sm:w-1/2" />
      </Box>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreContents}
        hasMore={hasMore}
        endMessage={<div className="flex items-center justify-center my-5"><Link to="/articles"><Button className="shadow-xl" style={{ padding: '20px' }} size="L">More Articles...</Button></Link></div>}
        loader={<Loader />}
        className=""
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <div key={contents[index]?.id} className="relative">
              {contents[index]?.id}
              <div className="w-full">
                <LazyLoadImage
                  width="100%"
                  height="100%"
                  alt="flow"
                  placeholderSrc={contents[index]?.imageSrcImage}
                  effect="blur"
                  src={contents[index]?.imageSrc}
                  className="block max-w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex flex-row space-x-5 my-3">
                {contents[index]?.level ? (
                  <Typography variant="pi" className="flex space-x-1 items-center">
                    <Dot fontSize={5} />
                    <Badge><span>{contents[index]?.level}</span></Badge>
                  </Typography>
                ) : null}
                <Typography variant="pi" className="flex space-x-1 items-center">
                  <Dot fontSize={5} />
                  <Badge>
                    <span>
                      {contents[index]?.readMins}
                      {' '}
                      MIN READ
                    </span>
                  </Badge>
                </Typography>
              </div>
              <div className="my-5">
                <p className="my-5">
                  <Typography color="primary500" variant="beta"><span className=" font-extrabold">{contents[index]?.title}</span></Typography>
                </p>
                <p>
                  <Typography color="neutral100" variant="epsilon" className=" text-2xl">{contents[index]?.body}</Typography>
                </p>
              </div>
              <div className="my-5 flex items-center space-x-3">
                <span className=" text-defaultcol dark:text-white text-sm">{contents[index]?.author}</span>
                <div className="flex flex-row items-center space-x-3">
                  <Dot fontSize={5} />
                  <Typography variant="pi" className=" text-defaultcol dark:text-white text-sm">{contents[index]?.date}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
