export const ApiEndpoints = {
  companyRegister: '/companies/register',
  studentRegister: '/students/register',
  login: '/api/user/login'
  editUser: (id: string) => `/api/user/edit/${id}`,
  domains: '/domains',
  openPositions: '/open-positions/domain'

};