import Image from "next/image";
import Link from "next/link";
import Paragraph from "../atoms/Paragraph";

type Props = {
  href: string
  publishedAt: string
  title: string
  description: string
  authorAvatar: string
  authorName: string
};
export default function FPost({
  href,
  title,
  description,
  publishedAt,
  authorAvatar,
  authorName
}: Props) {
  return (
    <div className="p-5 md:p-6 relative group">
      <span className="absolute inset-0 rounded-xl  border-gray-100/50 group ease-linear bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition group-hover:scale-105 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></span>
      <div className=" py-5 md:py-6 relative flex items-start gap-6">
        <div className="min-w-max pl-2">
          <div className="flex flex-col gap-y-1 items-center text-gray-500 dark:text-gray-300">
            <button className="outline-none transition hover:text-primary">
              <span className="sr-only">Upvote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-caret-up"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
              </svg>
            </button>
            <span>
              20
            </span>
            <button className="outline-none transition hover:text-red-600">
              <span className="sr-only">DownVote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-caret-down"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Link href={href} className="text-title dark:text-gray-100 text-xl font-semibold md:line-clamp-3 group-hover:text-primary dark:group-hover:text-primary transition ease-linear">
            {title}
          </Link>
          <Paragraph className="pt-6 line-clamp-5">{description}</Paragraph>
          <div className="flex justify-between items-center pt-6 text-gray-500 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Image src={authorAvatar} height={40} width={40} alt={"Avatar"} className={"w-8 h-8 rounded-full"} />
              <span>
                Posted by <span className="font-semibold">{authorName}</span>, {publishedAt}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
