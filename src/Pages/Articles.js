import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Dot } from '@strapi/icons';
import {
  Divider, Typography, Box, Badge, SimpleMenu, MenuItem,
} from '@strapi/design-system';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import contents from '../utils/contents';

export default function Articles() {
  const [items, setItems] = useState(Array.from({ length: 5 }));
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState('Sort By');
  const [key, setkey] = useState('');

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
    }, 2000);
  };
  return (
    <div className="my-20 relative px-8 md:px-10 lg:px-32">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="w-full sm:w-1/2 ">
          <Typography variant="alpha"><p className="mt-5 text-defaultcol font-extrabold text-center dark:text-white sm:text-left">Featured Articles</p></Typography>
        </div>
        <div className="my-5 w-full sm:w-5/6 flex flex-col sm:flex-row justify-center sm:justify-end items-center">
          <div className="relative w-full sm:w-1/2">
            <input onChange={(e) => { setkey(e.target.value); }} className="p-2 pr-5 w-full rounded-md " placeholder="search for article" />
            <BsSearch className="absolute text-slate-300 top-2 right-2 text-lg" />
          </div>
          <div className="w-full sm:w-1/6 my-5 flex justify-start sm:justify-end">
            <SimpleMenu id="label" label={sort}>
              <MenuItem>
                Sort By
              </MenuItem>
              <MenuItem id="menuItem-az" onClick={() => setSort('A-Z')}>
                A-Z
              </MenuItem>
              <MenuItem id="menuItem-za" onClick={() => setSort('Z-A')}>
                Z-A
              </MenuItem>
              <MenuItem id="menuItem-min" onClick={() => setSort('Minutes')}>
                Minutes Read
              </MenuItem>
            </SimpleMenu>
          </div>
        </div>
      </div>
      <Box paddingBottom={8} paddingTop={4}>
        <Divider className="w-full sm:w-1/2" />
      </Box>
      {/* <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreContents}
                hasMore={hasMore}
                endMessage={<div className="flex items-center justify-center my-5"><Link to="/"><Button className="shadow-xl" style={{ padding: "20px" }} size="L" >More Articles...</Button></Link></div>}
                loader={<Loader />}
                className=""
            > */}
      {contents.find((item) => item.title.toLowerCase().includes(key.trim().toLowerCase())) ? null
        : (
          <div className="text-center p-20">
            <Typography><p className="text-red-500">No Article found!</p></Typography>
          </div>
        )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {contents
          .filter((item, index) => {
            if (key.trim() === '') {
              return item;
            }
            if (item.title.toLowerCase().includes(key.trim().toLowerCase())) {
              return item;
            }

            return null;
          })
          .sort((a, b) => {
            switch (sort) {
              case 'A-Z': return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
              case 'Z-A': return (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0);
              case 'Minutes': return parseInt(b.readMins) - parseInt(a.readMins);
              default: return null;
            }
          })
          .map((item, index) => (
            <div key={item.id} className="relative">
              <div className="w-full">
                <LazyLoadImage
                  width="100%"
                  height="100%"
                  alt="flow"
                  placeholderSrc={item.imageSrcImage}
                  effect="blur"
                  src={item.imageSrc}
                  className="block max-w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex flex-row space-x-5 my-3">
                {item.level ? (
                  <Typography variant="pi" className="flex space-x-1 items-center">
                    <Dot fontSize={5} />
                    <Badge><span>{item.level}</span></Badge>
                  </Typography>
                ) : null}
                <Typography variant="pi" className="flex space-x-1 items-center">
                  <Dot fontSize={5} />
                  <Badge>
                    <span>
                      {item.readMins}
                      {' '}
                      MIN READ
                    </span>
                  </Badge>
                </Typography>
              </div>
              <div className="my-5">
                <p className="my-5">
                  <Typography color="primary500" variant="beta"><span className=" font-extrabold">{item.title}</span></Typography>
                </p>
                <p>
                  <Typography color="neutral100" variant="epsilon" className=" text-2xl">{item.body}</Typography>
                </p>
              </div>
              <div className="my-5 flex items-center space-x-3">
                <span className=" text-defaultcol text-sm">{item.author}</span>
                <div className="flex flex-row items-center space-x-3">
                  <Dot fontSize={5} />
                  <Typography variant="pi" className=" text-defaultcol text-sm">{item.date}</Typography>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* </InfiniteScroll> */}
    </div>
  );
}
