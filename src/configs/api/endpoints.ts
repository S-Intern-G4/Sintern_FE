export const ApiEndpoints = {
  user: (token: string) => `/user/${token}`,
  students: (id: string) => `/students/${id}`,
  companies: (id: string) => `/companies/${id}`,
  companyRegister: '/companies/register',
  studentRegister: '/students/register',
  login: '/login',
  domains: '/domains',
  openPositions: '/open-positions/domain',
  positions: (id: string) => `open-positions/company/${id}`,
  cv: (id: string) => `/students/${id}/cv`,
  applyOpenPosition: '/applications',
  uploadCv: '/students/upload-cv',
  updateCompany: '/companies/update',
  updateStudent: 'students/update',
  addQuizz: '/quizzes',
  studentsAppliers: (openInternPositionID: string) => `/applications/${openInternPositionID}`,
  getTestResults: (openPositionId) => `/open-positions/${openPositionId}/test-results`
};
