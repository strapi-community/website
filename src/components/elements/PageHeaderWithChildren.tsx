import { ReactNode } from "react";
import AppContainer from "../atoms/AppContainer";
import Paragraph from "../atoms/Paragraph";

export default function PageHeaderWithChildren({ headtext, title, subtext, children }: { headtext?: string, title: string, subtext: string, children: ReactNode }) {
    return (
        <section className="relative pt-16 pb-28 w-full">
            <div className="absolute top-20 left-0">
                <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopLeft"></div>
            </div>
            <div className="absolute bottom-0 right-0">
                <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleBottomRight"></div>
            </div>
            <AppContainer className="relative children:relative">
                <div className="absolute top-0 w-full left-0">
                    <div className="w-full max-w-7xl bg-gradient-to-tr from-primary h-20 blur-3xl"></div>
                </div>
                <div className="lg:pt-5 text-center mx-auto max-w-2xl relative">
                    <div>
                        {headtext !== "" && headtext !== null ? (
                            <div className="flex pb-6 justify-center">
                                <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-darkCard text-gray-600 dark:text-white">
                                    {headtext}
                                </span>
                            </div>
                        ) : null
                        }
                        <h1 className="font-bold leading-snug text-title1 dark:text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                            {title}
                        </h1>
                        {subtext !== "" ? (
                            <div className="p-10 text-center mx-auto max-w-4xl">
                                <Paragraph>
                                    {subtext}
                                </Paragraph>
                            </div>
                        ) : null
                        }
                    </div>
                </div>
                {children}
            </AppContainer>
        </section>
    )
}
