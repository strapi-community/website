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
    <div>
      <a href={html_url} target="_blank" rel="noreferrer">
        {name}
      </a>
      <p>{description}</p>
      <p>Last updated at: {pushed_at}</p>
      <p>Stars: {stargazers_count}</p>
      <p>Watchers: {watchers_count}</p>
      <p>Open Issues: {open_issues_count}</p>
    </div>
  );
}
