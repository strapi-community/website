import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/common/Form";

export default function About() {
  const [members, SetMembers] = useState([]);

  useEffect(() => {
    async function getMembers() {
      const result = await axios(
        "https://api.github.com/orgs/strapi-community/members"
      );
      SetMembers(result.data);
    }
    getMembers();
  }, []);

  return (
    <div className="my-14">
      <section className="flex flex-col items-center mb-36">
        <div className="text-center md:w-1/2">
          <h3 className="font-bold mb-2 text-alternative-700">ABOUT US</h3>
          <h1 className="text-darkPrimary text-3xl font-bold mb-4">
            Strapi Community Organization
          </h1>
          <p className="text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi
            minima magnam, quasi amet minus soluta. Obcaecati facere rerum, voluptate
            consequatur sequi quod vitae repellat, delectus laboriosam, facilis
            eligendi! Quibusdam temporibus, dignissimos excepturi fuga atque asperiores
            accusamus mollitia unde molestias repellat, tempore iure, corrupti alias
            nihil culpa velit quidem in laboriosam voluptas maiores. Nihil aliquid
            assumenda veritatis, itaque dolorem cum,
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center mb-36">
        <div className="text-center md:w-2/3">
          <h3 className="font-bold mb-2 text-alternative-700">STORY US</h3>
          <h1 className="text-darkPrimary text-3xl font-bold mb-4">
            The Community Story
          </h1>
          <p className="text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi
            minima magnam, quasi amet minus soluta. Obcaecati facere rerum, voluptate
            consequatur sequi quod vitae repellat, delectus laboriosam, facilis
            eligendi! Quibusdam temporibus, dignissimos excepturi fuga atque asperiores
            accusamus mollitia unde molestias repellat, tempore iure, corrupti alias
            nihil culpa velit quidem in laboriosam voluptas maiores. Nihil aliquid
            assumenda veritatis, itaque dolorem cum,
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center mb-36">
        <div className="text-center md:w-2/3">
          <h1 className="text-darkPrimary text-3xl font-bold mb-4">Strapi Community Member</h1>
          <p className="text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore voluptates numquam. Iure, quos ipsa! Officia?</p>
          <div className="flex flex-row justify-center flex-wrap mt-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center justify-center m-5"
              >
                <img
                  src={member.avatar_url}
                  alt={member.login}
                  className="w-20 rounded-full"
                />
                <a href={member.html_url} className="mt-2 text-sm text-neutral-600 hover:text-neutral-800" >
                @{member.login}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center ">
        <div className="text-center md:w-1/2">
          <h1 className="text-darkPrimary text-3xl font-bold mb-4">Contact US</h1>
          <p className="text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore voluptates numquam. Iure, quos ipsa! Officia?</p>
              <Form />
        </div>
      </section>

    </div>
  );
}
