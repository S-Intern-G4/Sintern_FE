export const ApiEndpoints = {
  version: '/api/version/get-version',
  addUser: '/api/user/add-user',
  loginUser: '/api/user/login',
  getUserById: (id: string) => `/api/user/display/${id}`,
  editUser: (id: string) => `/api/user/edit/${id}`
};