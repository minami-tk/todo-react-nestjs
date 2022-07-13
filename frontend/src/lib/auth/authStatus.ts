export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'
}

export const setAuthenticated = (token: string) => {
  localStorage.setItem('token', token)
  localStorage.setItem('isAuthenticated', 'true')
}

export const removeAuthenticated = () => {
  localStorage.removeItem('token')
  localStorage.setItem('isAuthenticated', 'false')
}