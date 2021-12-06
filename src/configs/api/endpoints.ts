export const ApiEndpoints = {
  user: (token: string) => `/user/${token}`,
  students: (id: string) => `/students/${id}`,
  companies: (id: string) => `/companies/${id}`,
  companyRegister: '/companies/register',
  studentRegister: '/students/register',
  login: '/login',
  domains: '/domains',
  positions: (id: string) => `open-positions/company/${id}`,
  openPositions: '/open-positions/domain',
  cv: (id: string) => `/students/${id}/cv`,
  applyOpenPosition: '/applications',
  uploadCv: '/students/upload-cv',
  updateCompany: '/companies/update',
  updateStudent: 'students/update'
};