import data from '@/beforeAfter/data'
import userService from '@/beforeAfter/userService'

describe('before after test', () => {
  afterEach(() => {
    data.users.splice(0)
  })

  beforeEach(() => {
    data.users.push(
      { id: 1, email: 'user1@test.com' },
      { id: 2, email: 'user2@test.com' },
      { id: 3, email: 'user3@test.com' }
    )
  })

  test('findAll() - find all users', () => {
    // When
    const users = userService.findAll()

    // Then
    expect(users).toHaveLength(3)
    expect(users).toContainEqual({ id: 1, email: 'user1@test.com' })
    expect(users).toContainEqual({ id: 2, email: 'user2@test.com' })
    expect(users).toContainEqual({ id: 3, email: 'user3@test.com' })
  })

  test('create() - create a user', () => {
    // Given
    const user = { id: '4', email: 'user4@test.com' }

    // When
    userService.create(user)

    // Then
    expect(data.users).toHaveLength(4)
    expect(data.users).toContainEqual(user)
  })

  test('destroy() - destroy a user', () => {
    // Given
    const id = 3
    const user = data.users.find(user => user.id === id)

    // When
    userService.destroy(id)

    // Then
    expect(data.users).toHaveLength(2)
    expect(data.users).not.toContainEqual(user)
  })
})
