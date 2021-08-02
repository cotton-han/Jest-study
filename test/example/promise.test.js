describe('Promise test practice', () => {
  test('resolves to lemon', () => {
    // return 문을 추가해야합니다.
    return expect(Promise.resolve('lemon')).resolves.toBe('lemon')
  })

  test('resolves to lemon(async, await)', async () => {
    await expect(Promise.resolve('lemon')).resolves.toBe('lemon')
  })

  test('rejects to octopus', () => {
    return expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')
  })

  test('rejects to octopus(async, await)', async () => {
    await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')
  })
})
