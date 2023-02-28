import Image from 'next/image'
import { FacebookIco, GithubIcon, TwitterIcon, LinkedInIcon } from "@/components/icons/social";
import IconLink from "@/components/atoms/IconLink";
import { MemberProps } from '@/types';



export default function Member(
    { profilepicture, name, description, socialLinks }: MemberProps
) {
    return (
        <div className="relative group">
            <div className="absolute inset-0 rounded-xl group-hover:scale-105 bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition ease-linear dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></div>
            <div className="relative p-4 lg:p-5 group ">
                <Image
                    src={profilepicture}
                    className="rounded-full w-20 aspect-square md:w-24 mx-auto object-cover transiton"
                    alt="Avatar"
                    width={880}
                    height={880}
                />
                <div className="pt-6 space-y-5  text-center">
                    <div>
                        <h3 className=" text-lg md:text-xl font-semibold text-title dark:text-gray-100">
                            {name}
                        </h3>
                        <span className='text-text dark:text-gray-300'>
                            {description}
                        </span>
                    </div>

                    <div className="flex justify-center flex-wrap gap-2 text-text dark:text-gray-300">
                        {socialLinks.github && socialLinks.github !== "" ? (
                            <IconLink href="" title="Github" icon={<GithubIcon />} />
                        ) : null
                        }
                        {socialLinks.twitter && socialLinks.twitter !== "" ? (
                            <IconLink href="" title="Twitter" icon={<TwitterIcon />} />
                        ) : null
                        }
                        {socialLinks.linkedin && socialLinks.linkedin !== "" ? (
                            <IconLink href="" title="Linkedin" icon={<LinkedInIcon />} />
                        ) : null
                        }
                        {socialLinks.facebook && socialLinks.facebook !== "" ? (
                            <IconLink href="" title="Facebook" icon={<FacebookIco />} />
                        ) : null
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
