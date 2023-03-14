import AppContainer from "@/components/atoms/AppContainer";
import Paragraph from "@/components/atoms/Paragraph";
import Title from "@/components/atoms/Title";
import Member from "@/components/cards/Member";
import { MemberProps } from "@/types";



const members: MemberProps[] = [
  {
    profilepicture: "/images/defaultAvatar.jpg",
    name: "John Doe",
    description: "FullStack Developer",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      github: "#",
    }
  },
  {
    profilepicture: "/images/defaultAvatar.jpg",
    name: "John Doe",
    description: "FullStack Developer",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      github: "#",
    }
  },
  {
    profilepicture: "/images/defaultAvatar.jpg",
    name: "John Doe",
    description: "FullStack Developer",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      github: "#",
    }
  },
  {
    profilepicture: "/images/defaultAvatar.jpg",
    name: "John Doe",
    description: "FullStack Developer",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      github: "#",
    }
  },
]

export default function ActiveContributors() {
  return (
    <section className="relative pt-12 sm:pt-20 md:pt-32">
      <div className="absolute top-20 left-0">
        <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopLeft"></div>
      </div>
      <AppContainer className="pt-14 pb-6 relative">
        <div className="text-center mx-auto max-w-2xl space-y-6">
          <Title>
            Active members
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita porro assumenda, ne
          </Paragraph>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2  pt-12 sm:pt-16 md:pt-20">

          {members.map((member, index) => (
            <Member key={index} {...member} />
          ))
          }
        </div>
      </AppContainer>
    </section>
  )
}
