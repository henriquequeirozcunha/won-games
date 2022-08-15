const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
const data = { jwt: '123', user: { email: 'lorem@ipsum.com' } }

useSession.mockImplementation(() => {
  return { data }
})
