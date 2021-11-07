export const ApiEndpoints = {
  version: '/api/version/get-version',
  companyRegister: '/api/company-register',
  studentRegister: '/api/student-register',
  login: '/api/user/login'
  editUser: (id: string) => `/api/user/edit/${id}`,
  domains: '/domains',
  openPositions: '/open-positions/domain'

};