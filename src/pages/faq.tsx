import Paragraph from "@/components/atoms/Paragraph";
import Question from "@/components/atoms/question";
import PageHeader from "@/components/elements/PageHeader";
import Head from "next/head";
import { useCallback, useState } from "react";
import AppContainer from "../components/atoms/AppContainer";

export default function Faq() {
  const [open, setOpen] = useState<string>("")

  const handleClick = useCallback(
    (val: string) => {
      setOpen(() => val === open ? "":val)
    },
    [open],
  )
  return (
    <>
      <Head>
        <title>Strapi-Community - FAQ </title>
      </Head>
      <PageHeader headtext="FAQ" title="Frequently Asked Questions" subtext="" />
      <section className="relative pt-16">
        <AppContainer>
          <div className="mx-auto max-w-3xl lg:max-w-4xl relative group">
            
            <div className="relative">
              <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                <Question
                  isOpen={open === "q1"}
                  handleEv={() => { handleClick("q1") }}
                  title="Lorem ipsum dolor sit amet"
                  description="Eligendi itaque doloremque nostrum, explicabo nesciunt ullam iusto! Deleniti ad enim in excepturi aut. Quibusdam, cum. Minus labore quas excepturi! Architecto, nulla?"
                />
                <Question
                  isOpen={open === "q2"}
                  handleEv={() => { handleClick("q2") }}
                  title="Lorem ipsum dolor sit amet"
                  description="Eligendi itaque doloremque nostrum, explicabo nesciunt ullam iusto! Deleniti ad enim in excepturi aut. Quibusdam, cum. Minus labore quas excepturi! Architecto, nulla?"
                />
                <Question
                  isOpen={open === "q3"}
                  handleEv={() => { handleClick("q3") }}
                  title="Lorem ipsum dolor sit amet"
                  description="Eligendi itaque doloremque nostrum, explicabo nesciunt ullam iusto! Deleniti ad enim in excepturi aut. Quibusdam, cum. Minus labore quas excepturi! Architecto, nulla?"
                />
                <Question
                  isOpen={open === "q4"}
                  handleEv={() => { handleClick("q4") }}
                  title="Lorem ipsum dolor sit amet"
                  description="Eligendi itaque doloremque nostrum, explicabo nesciunt ullam iusto! Deleniti ad enim in excepturi aut. Quibusdam, cum. Minus labore quas excepturi! Architecto, nulla?"
                />
              </div>
            </div>
          </div>
        </AppContainer>
      </section>
    </>
  )
}
