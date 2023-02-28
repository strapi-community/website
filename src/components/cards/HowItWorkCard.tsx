import Image from 'next/image'
import Paragraph from '../atoms/Paragraph'

export default function HowItWorkCard(
    { imgUrl, headtitle, title, description }: { imgUrl: string, headtitle:string, title: string, description: string }
) {
    return (
        <div className='relative children:relative group'>
            <span className="!absolute inset-0 rounded-xl bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition group-hover:scale-105 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></span>
            <div className="py-8 px-4 md:px-5 relative overflow-hidden">
                <Image width={80} height={80} alt={`icon illustration - ${title}`} src={imgUrl} className="w-auto h-16 md:h-20" />
                <div className='pt-10'>
                    <span className='text-primary pb-2'>
                        {headtitle}
                    </span>
                    <h2 className="text-title dark:text-gray-100 text-xl  font-semibold md:line-clamp-3 ">
                        {title}
                    </h2>
                </div>
                <Paragraph className="pt-6 line-clamp-3">
                    {description}
                </Paragraph>
            </div>
        </div>
    )
}
