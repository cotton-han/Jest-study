describe('error test practice', () => {
  function getUser (id) {
    if (id <= 0) {
      throw new Error('Invalid ID')
    }
    return {
      id,
      email: `user${id}@test.com`
    }
  }

  test('throw when id is non negative', () => {
    // expect 안에서 함수로 꼭 감싸줘야 함
    expect(() => getUser(-1)).toThrow()
    expect(() => getUser(-1)).toThrow(/Invalid/)
    expect(() => getUser(-1)).toThrow('Invalid')

    expect(() => getUser(-1)).toThrow(/^Invalid ID$/)
    expect(() => getUser(-1)).toThrow(new Error('Invalid ID'))

    expect(() => getUser(-1)).toThrow(Error)
  })
})
