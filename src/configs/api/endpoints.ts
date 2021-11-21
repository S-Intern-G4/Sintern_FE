export const ApiEndpoints = {
  user: (token: string) => `/user/${token}`,
  students: (id: string) => `/students/${id}`,
  companies: (id: string) => `/companies/${id}`,
  companyRegister: '/companies/register',
  studentRegister: '/students/register',
  login: '/login',
  domains: '/domains',
  openPositions: '/open-positions/domain',
  cv: (id: string) => `/students/${id}/cv`,
  uploadCv: '/students/upload-cv'

};