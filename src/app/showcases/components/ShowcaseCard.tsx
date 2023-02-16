import { BiStar } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import styles from "./ShowcaseCard.module.scss";

export type ShowcaseProps = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description?: string;
  url: string;
  created_at: string;
  pushed_at: string;
  git_url: string;
  homepage?: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  is_template: boolean;
  topics: Array<string>;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
};

export function ShowcaseCard({
  html_url,
  name,
  description,
  pushed_at,
  stargazers_count,
  watchers_count,
  open_issues_count,
}: ShowcaseProps) {
  return (
    <div className={styles.container}>
      <div className="mb-4">
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="sc-heading--four"
        >
          {name}
        </a>
      </div>

      <p className="mb-4">{description}</p>

      <p>Last updated at: {pushed_at}</p>
      
      <div className="flex gap-2">
        <p className="flex items-center gap-1">
          <BiStar size={14} /> {stargazers_count}
        </p>
        <p className="flex items-center gap-1">
          <RxEyeOpen size={14} /> {watchers_count}
        </p>
        <p className="flex items-center gap-1">
          <FaRegDotCircle size={14} /> {open_issues_count}
        </p>
      </div>
    </div>
  );
}
