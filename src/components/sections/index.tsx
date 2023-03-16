import Hero from '@/components/sections/home/Hero'
import Newsletter from '@/components/sections/Newsletter'
import ComIntro from '@/components/sections/home/ComIntro'
import LatestNews from '@/components/sections/home/LatestNews'
import RelevantTopics from '@/components/sections/home/RelevantTopics'
import WhyJoinUs from '@/components/sections/WhyJoinUs'
import CtaBounty from '@/components/sections/CtaBounty'
import AppContainer from '@/components/atoms/AppContainer'
import MainContainer from '@/components/atoms/MainContainer'
export default function Section({sections}) {
     return (<AppContainer>
     {sections.map((section, i: number) => {
        switch(section.__component){
            case "slices.hero":
                return <Hero data={section} key={i} />
            case "slices.com-intro":
                return <ComIntro data={section} key={i} />
            case "slices.why-join-us":
                return <WhyJoinUs data={section} key={i} />
            case "slices.cta":
                return <CtaBounty data={section} key={i} />
            default:
                throw Error("Unknown component")
            }
        })}
     </AppContainer>)
}
