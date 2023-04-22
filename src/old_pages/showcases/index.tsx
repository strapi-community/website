import AppContainer from "@/components/atoms/AppContainer";
import ShowCase from "@/components/cards/ShowCase";
import PageHeader from "@/components/elements/PageHeader";
import { CommunityRepos } from "@/types";
import { InferGetStaticPropsType } from 'next';

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/orgs/strapi-community/repos');
  const repositories: CommunityRepos = await res.json();

  return {
    props: {
      repositories,
    },
  };
};

const Showcases = ({ repositories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageHeader title="Amazing work from Strapi Community" headtext="Showcases" subtext="" />
      <AppContainer className="pt-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 ">
          {Object.entries(repositories).map(([key, repo]) => (
            <ShowCase key={repo.id} {...repo} />
          ))}
        </div>
      </AppContainer>
    </>
  )
}

export default Showcases