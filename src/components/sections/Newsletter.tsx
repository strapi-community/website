import AppContainer from "../atoms/AppContainer";
import Paragraph from "../atoms/Paragraph";
export default function Newsletter() {
  return (
    <AppContainer className="pt-28 pb-12 relative">

      <div className="relative py-10 sm:py-12 md:py-20 px-8 bg-[#f6fafe] dark:bg-darkCard rounded-xl">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 blur-3xl opacity-70 absolute left-0 top-0"></div>
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-purple-600 blur-3xl opacity-70 absolute right-0 bottom-0"></div>
        <div className="mx-auto flex flex-col items-center max-w-4xl w-full relative text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-title dark:text-white">Community News</h1>
          <div className="pt-8 mx-auto max-w-xl">
            <Paragraph>
            Get the latest Strapi news by email. The Strapi Weekly is a newsletter with the latest news on the Strapi world and the agenda for the upcoming weeks.
            </Paragraph>
          </div>

          <div className="pt-10 w-full mx-auto max-w-md md:max-w-xl">
            <form className="flex md:flex-row flex-col gap-2">
              <input type="email" placeholder="johndoe@gmail.com" className="py-3 px-6 rounded-lg outline-none w-full bg-gray-100 border-gray-200/70 dark:border-gray-700 dark:bg-darkBg border-2 transition focus:!border-primary text-text dark:text-gray-300 focus:bg-white dark:focus:bg-darkCard" />
              <button type="submit" className="outline-none border-2 border-transparent w-full md:w-max flex justify-center md:min-w-max px-3 sm:px-6 py-3 rounded-lg bg-primary text-white">
                <span></span>
                <span>Subscribe</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </AppContainer>
  )
}
