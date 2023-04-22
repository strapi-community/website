import AppContainer from "@/components/atoms/AppContainer";
import BtnLink from "@/components/atoms/BtnLink";
import Title from "@/components/atoms/Title";
import FPost from "@/components/cards/FPost";

export default function RelevantTopics() {
  return (
    <AppContainer className="pt-24 md:pt-32 lg:pt-40">
      <div className="max-w-lg mx-auto text-center">
        <Title>
          Find out relevant topics on our forum
        </Title>
      </div>

      <div className=" pt-12 sm:pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mx-auto max-w-2xl lg:max-w-none lg:mx-0">
          <FPost
            href="#"
            title="Axios return error"
            publishedAt="2 hours ago"
            authorAvatar="/images/working-from-home.webp"
            authorName="John Doe"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium libero nobis ab, delectus natus vero quae blanditiis numquam expedita aspernatur sequi consequuntur eius voluptate. Perferendis obcaecati corrupti eum odio nisi?"
          />

          <FPost
            href="#"
            title="Axios return error"
            publishedAt="2 hours ago"
            authorAvatar="/images/working-from-home.webp"
            authorName="John Doe"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium libero nobis ab, delectus natus vero quae blanditiis numquam expedita aspernatur sequi consequuntur eius voluptate. Perferendis obcaecati corrupti eum odio nisi?"
          />
        </div>

        <div className="pt-12 flex justify-center">
          <BtnLink href="/blog" variant="secondary" type="fill" text="Discover more" />
        </div>
      </div>
    </AppContainer>
  )
}
