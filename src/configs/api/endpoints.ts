export const ApiEndpoints = {
  user: (token: string) => `/user/${token}`,
  companyRegister: '/companies/register',
  studentRegister: '/students/register',
  login: '/login',
  domains: '/domains',
  openPositions: '/open-positions/domain',
  cv: (id: string) => `/students/${id}/cv`,
  uploadCv: '/students/upload-cv'

};