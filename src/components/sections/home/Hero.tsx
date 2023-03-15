import AppContainer from "@/components/atoms/AppContainer";
import BtnLink from "@/components/atoms/BtnLink";
import IconLink from "@/components/atoms/IconLink";
import { FacebookIco, TwitterIcon, GithubIcon, YoutubeIcon } from "@/components/icons/social";
import Image from "next/image";
import {getStrapiURL} from "@/lib/api";
export default function Hero({data}) {
    console.log(data)
    return (
        <section className="relative pt-24 sm:pt-32 lg:pt-36 w-full">
            <div className="absolute -left-32 -top-28 w-2/5 aspect-square rounded-full border-[2rem] border-primary/10"></div>
            <AppContainer >
                <div className="grid pt-6 lg:items-center lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12 w-full relative">
                    <div className="absolute top-0 w-full left-0">
                        <div className="w-full max-w-7xl bg-gradient-to-tr from-primary h-20 blur-3xl dark:opacity-80"></div>
                    </div>
                    <div className="lg:pt-5 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl lg:max-w-none relative">
                        <div>
                            <h1 className="font-bold leading-snug text-title dark:text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                                {data.title}
                            </h1>
                        </div>
                        <p className="text-text pt-6 md:text-lg dark:text-gray-200">
                            {data.description}
                        </p>
                        <div className="flex pt-8 w-full sm:w-max mx-auto lg:mx-0 justify-center lg:justify-start">
                            {  data.button !== undefined && <BtnLink text={data.button.text} href={data.button.href} variant={data.button.variant} type={data.button.type}  />}
                        </div>
                    </div>
                    <div className="relative hidden md:flex max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:h-full items-start">
                        <div className="w-full lg:h-[90%] rounded-2xl -skew-x-6  bg-white shadow-lg shadow-gray-200/60 border-4 border-gray-100/40">
                            {  data.image !== undefined &&<Image
                                src={getStrapiURL(data.image.data.attributes.url)}
                                alt="Illustratuin about"
                                width={1500}
                                height={450}
                                className="w-full h-auto lg:h-full object-cover rounded-xl skew-x-0"
                            /> }
                        </div>
                        <div className="p-6 -skew-x-6 bg-gray-100 rounded-2xl absolute -bottom-12 lg:bottom-0 left-4 shadow-lg shadow-gray-200/60 dark:shadow-transparent border-4 border-gray-200 dark:border-white">
                            <h4 className="skew-x-6 text-title pb-1">Join amazing people</h4>
                            <div className="flex -space-x-2.5 
                                        children:h-10 children:w-10 
                                        children:rounded-full 
                                        children:object-cover
                                        children:ring-1
                                        children:ring-gray-200 
                                        children:z-0
                                        children:duration-300 skew-x-6">
                                <Image
                                    src="/images/defaultAvatar.jpg"
                                    alt="Picture of the author "
                                    width={500}
                                    height={500}
                                    className="hover:z-10"
                                />

                                <Image
                                    src="/images/defaultAvatar.jpg"
                                    alt="Picture of the author "
                                    width={500}
                                    height={500}
                                    className="hover:z-10"
                                />

                                <Image
                                    src="/images/defaultAvatar.jpg"
                                    alt="Picture of the author "
                                    width={500}
                                    height={500}
                                    className="hover:z-10"
                                />

                                <Image
                                    src="/images/defaultAvatar.jpg"
                                    alt="Picture of the author "
                                    width={500}
                                    height={500}
                                    className="hover:z-10"
                                />
                                <div className="bg-primary text-white flex text-center items-center justify-center">
                                    <span className='text-xs'>+20</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </AppContainer>
        </section>
    )
}