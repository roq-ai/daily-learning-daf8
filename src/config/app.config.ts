interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: [],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'daily learning',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
