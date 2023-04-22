
import React from "react"

import type { Metadata } from 'next'
import { fetchAPI } from "@/utils/api";
import Sections from "@/components/sections";

export const metadata: Metadata = {
  title: 'Layout',
  description: 'Welcome to Next.js',
  icons: [{ rel: "icon", url: "/strapi-.svg" }]
};

export default async function Page() {
  const data = await fetchAPI("/pages/1",
  { 
    populate: {
      sections: { 
        on: {
          "slices.hero": { 
            populate: "*"
          },
          "slices.com-intro": {
            populate: "*"
          },
          "slices.why-join-us": {
            populate: {
              button: true,
              image: true,
              whyJoin: {
                populate: {
                  icon: true
                }
              }
            }
          },
          "slices.cta": {
            populate: "*"
          }
        }
      }
    }
  } )
  return (
    <Sections sections={data.data.attributes.sections}/>
  );
}