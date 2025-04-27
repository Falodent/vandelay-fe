export function getPageTitle(pathname: string) {
  if (pathname.includes("tables")) return "Tables";
  return "Dashboard";
}
