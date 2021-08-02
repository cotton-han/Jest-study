import axios from 'axios'
import axiosUser from '@/mock/axiosUser'
import { register, deregister } from '@/mock/userService'
import { sendEmail, sendSMS } from '@/mock/messageService'

jest.mock('@/mock/messageService')
jest.mock('axios')

describe('jest.mock() test practice', () => {
  beforeEach(() => {
    sendEmail.mockClear()
    sendSMS.mockClear()
  })

  const user = {
    email: 'test@email.com',
    phone: '012-345-6789'
  }

  test('register sends messages', () => {
    // When
    register(user)

    // Then
    expect(sendEmail).toBeCalledTimes(1)
    expect(sendEmail).toBeCalledWith(user.email, '회원 가입을 환영합니다!')

    expect(sendSMS).toBeCalledTimes(1)
    expect(sendSMS).toBeCalledWith(user.phone, '회원 가입을 환영합니다!')
  })

  test('deregister sends messages', () => {
    // When
    deregister(user)

    // Then
    expect(sendEmail).toBeCalledTimes(1)
    expect(sendEmail).toBeCalledWith(user.email, '탈퇴 처리 되었습니다.')

    expect(sendSMS).toBeCalledTimes(1)
    expect(sendSMS).toBeCalledWith(user.phone, '탈퇴 처리 되었습니다.')
  })

  test('findOne returns what axios get returns', async () => {
    // Given
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        name: 'Dale Seo'
      }
    })

    // When
    const user = await axiosUser.findOne(1)

    // Then
    expect(user).toHaveProperty('id', 1)
    expect(user).toHaveProperty('name', 'Dale Seo')
    expect(axios.get).toBeCalledTimes(1)
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/users/1')
  })
})
