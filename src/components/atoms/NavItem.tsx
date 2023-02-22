import Link from "next/link";
import { isExternal } from "util/types";
type itemType = {
  text: string,
  href: string,
  externalLink?: boolean
}
function ExternalLink({ text, href }: itemType) {
  return <a href={href === "" ? "#" : href} rel="noreferrer" target="_blank" className="transition flex items-center gap-1 hover:text-primary dark:hover:text-white">
    {text}
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-box-arrow-in-up-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
        />
        <path
          fillRule="evenodd"
          d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
        />
      </svg>
    </span>
  </a>
}

function NextLink({ text, href }: itemType) {
  return <Link href={href === "" ? "#" : href} className="transition hover:text-primary dark:hover:text-white">
    <span className="flex items-center gap-0.5">
      {text}
    </span>
  </Link>
}
export default function NavItem({ text, href, externalLink }: itemType) {
  return (
    <li>
      {!externalLink ? (
        <NextLink text={text} href={href} />
      ) : null
      }
      {externalLink ?
        (
          <ExternalLink text={text} href={href} />
        ) : null

      }
    </li>
  )
}
