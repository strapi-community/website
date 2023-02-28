import http from "./httpService";
export function getPlugin() {
  return http.get("https://api.github.com/orgs/strapi-community/repos");
}
