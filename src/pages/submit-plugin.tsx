import AppContainer from "@/components/atoms/AppContainer";
import Paragraph from "@/components/atoms/Paragraph";
import Title from "@/components/atoms/Title";
import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import GroupForm from "@/components/form/GroupForm";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import RadioButton from "@/components/form/RadioButton";
import TextArea from "@/components/form/TextArea";

export default function SubmitPlugin() {
  return (
    <section className="relative py-16">
      <div className="absolute top-20 left-0">
        <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopLeft"></div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleBottomRight"></div>
      </div>
      <AppContainer className="relative pt-16">
        <div className="mx-auto max-w-2xl px-5 sm:px-10 lg:px-12 py-10 sm:py-14 rounded-xl bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard">
          <div>
            <Title>
              Submit my plugin
            </Title>

            <Paragraph className="pt-8">
              Make sure to review our guidelines before submitting your plugin.
              <br />
              <a href="#" target={"_blank"} className="text-primary flex w-max items-center gap-2">
                READ THE GUIDELINES
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={15} fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </Paragraph>
          </div>
          <div className="pt-10">
            <form action="" className="space-y-7">
              <GroupForm>
                <Label htmlFor="pluginName" text="Plugin Name" required />
                <Input variant="default" type={"text"} id="pluginName" placeholder="" />
              </GroupForm>
              <GroupForm>
                <Label htmlFor="npmUrl" text="npm package URL" required />
                <Input variant="default" type={"text"} id="npmUrl" placeholder="" />
                <span className="text-gray-400">Paste the URL of {"your plugin's"} page on npmjs.com</span>
              </GroupForm>
              <GroupForm>
                <Label htmlFor="repoUrl" text="Repository URL " required />
                <Input variant="default" type={"text"} id="repoUrl" placeholder="" />
                <span className="text-gray-400">Paste the URL of your plugin on a site like GitHub</span>
              </GroupForm>

              <GroupForm>
                <Label htmlFor="description" text="Repository URL " required />

                <TextArea variant="default" id="description">
                </TextArea>
                <span className="text-gray-400">Max 150 characters</span>
              </GroupForm>

              <div className="flex flex-col">
                <h3 className="text-title dark:text-gray-100">What prompted you to submit this plugin? <span className="text-red-600">*</span></h3>
                <div className="space-y-2 pt-5">
                  <RadioButton name="submitfor" id="sub1" label="I attended a webinar on Strapi plugins" />
                  <RadioButton name="submitfor" id="sub2" label="I attended a webinar on Strapi plugins" />
                  <RadioButton name="submitfor" id="sub3" label="I attended a webinar on Strapi plugins" />
                  <RadioButton name="submitfor" id="sub4" label="I attended a webinar on Strapi plugins" />
                  <RadioButton name="submitfor" id="sub5" label="I attended a webinar on Strapi plugins" />
                </div>
              </div>

              <div className="pt-6 pb-3">
                <Checkbox id="readcond" label={
                  <>
                    I agree with <a href="#" target={"_blank"} className="text-primary">{"Strapi's"} Terms and Conditions</a>
                  </>
                } labelRequired />
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full flex justify-center">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </AppContainer>
    </section>
  )
}
