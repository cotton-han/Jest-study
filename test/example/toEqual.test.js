describe('toEqual test practice', () => {
  test('return a user object', () => {
    // Given
    const user = {
      id: 1,
      email: 'user@test.com'
    }

    // Then
    expect(user).toEqual({
      id: 1,
      email: 'user@test.com'
    })
  })

  test('are not semantically the same', () => {
    // Given
    const obj = {
      a: undefined, // 속성이 undefined일 경우 toEqual은 무시
      b: 1
    }

    // Then
    expect(obj).toEqual({ b: 1 })
    expect(obj).not.toStrictEqual({ b: 1 })
    expect(obj).toStrictEqual({ a: undefined, b: 1 })
  })
})
