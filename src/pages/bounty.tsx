import AppContainer from "@/components/atoms/AppContainer";
import BtnLink from "@/components/atoms/BtnLink";
import Button from "@/components/form/Button";
import MainContainer from "@/components/atoms/MainContainer";
import BountyCard from "@/components/cards/BountyCard";
import PageHeaderWithChildren from "@/components/elements/PageHeaderWithChildren";
import HowItWorks from "@/components/sections/HowItWorks";
import Head from "next/head";
import Input from "@/components/form/Input";

export default function Bounty() {
  return (
    <>
      <Head>
        <title>Strapi-Community - Bounty </title>
      </Head>
      <PageHeaderWithChildren headtext="Bounty" title="Build plugins and get paid" subtext="">
        <div className="mx-auto pt-12 w-max">
          <BtnLink variant="primary" type="fill" text="Submit my plugin" href="/submit-plugin" />
        </div>
      </PageHeaderWithChildren>
      <AppContainer>
        <div className="relative pt-10 pb-10">
          <div className="flex justify-between items-center">
            <div className="">

            </div>

            <div className="flex md:w-96 w-full">
              <form className="relative group w-full inline-flex">
                <Input variant="default" className="w-full !bg-gray-100 dark:!bg-darkCard" type={"text"} placeholder="Search Here" />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-700 group-focus-within:text-primary transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                </span>
              </form>
            </div>

          </div>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico4.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico2.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico1.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico3.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico1.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico2.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico3.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico4.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico3.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico4.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico1.svg"
            reward="$ 250"
          />

          <BountyCard
            title="Plugin name"
            description="In soluta doloremque, dicta, quo quos quidem, temporibus totam hic asperiores delectus similique aspernatur maiores accusamus nisi labore repudiandae laborum voluptatibus molestiae."
            href="#"
            icourl="/icons/ico2.svg"
            reward="$ 250"
          />
        </div>
        <div className="pt-12 flex justify-center pb-16">
          <Button variant="secondary" className="flex items-center gap-3 group">
            Load More
            <span className="transition-[margin] ease-linear rotate-90 group-hover:mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </Button>
        </div>
      </AppContainer>

      <HowItWorks />
    </>
  )
}
