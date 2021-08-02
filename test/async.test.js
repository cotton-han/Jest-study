import { fetchUser, promiseFetchUser } from '@/async/fetchUser'

describe('jest async practice', () => {
  test('fetch a user', done => {
    fetchUser(1, user => {
      expect(user).toEqual({
        id: 1,
        name: 'User1',
        email: '1@test.com'
      })
      done()
    })
  })

  test('promise fetch a user', () => {
    return promiseFetchUser(1)
      .then(user => {
        expect(user).toEqual({
          id: 1,
          name: 'User1',
          email: '1@test.com'
        })
      })
  })

  test('async await fetch a user', async () => {
    const user = await promiseFetchUser(1)
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com'
    })
  })
})
