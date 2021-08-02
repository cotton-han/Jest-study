import axios from 'axios'
import axiosUser from '@/mock/axiosUser'

describe('jest.fn(), jest.spyOn() test practice', () => {
  test('findOne returns a user', async () => {
    // When
    const user = await axiosUser.findOne(1)

    // Then
    expect(user).toHaveProperty('id', 1)
    expect(user).toHaveProperty('name', 'Leanne Graham')
  })

  test('findOne fetches data from the API endpoint', async () => {
    // Given
    const spyGet = jest.spyOn(axios, 'get')

    // When
    await axiosUser.findOne(1)

    // Then
    expect(spyGet).toBeCalledTimes(1)
    expect(spyGet).toBeCalledWith('https://jsonplaceholder.typicode.com/users/1')
  })

  // NOTE: 위의 2개의 test는 "테스트는 언제 실행되든 항상 같은 결과를 내야한다."에 위배된다.
  test('findOne returns what axios get returns', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: 'Dale Seo'
      }
    })

    const user = await axiosUser.findOne(1)
    expect(user).toHaveProperty('id', 1)
    expect(user).toHaveProperty('name', 'Dale Seo')
  })
})
