const mapping: Record<string, string> = {
  organizations: 'organization',
  skills: 'skill',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
