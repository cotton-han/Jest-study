describe('toBe, toEqual test practice', () => {
  test('the best flavor is not coconut', () => {
    // Given
    const bestFlavor = jest.fn(() => 'banana')

    // When, Then
    expect(bestFlavor()).not.toBe('coconut')
  })

  test('adding works sanely with decimals', () => {
    // 0.2 + 0.1 = 0.30000000000000004
    // 5자리의 정밀도로 비교
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
  })

  test('to be defined', () => {
    // Given
    const fn = () => ''

    // Then
    expect(fn()).toBeDefined()
    // 아래도 똑같이 동작하지만 undefined를 참조하지 않는 것이 좋다.
    // expect(fn()).not.toBe(undefined)
  })

  test('to be undefined', () => {
    // Given
    const fn = () => {}

    // Then
    expect(fn()).toBeUndefined()
    // 아래도 똑같이 동작하지만 undefined를 참조하지 않는 것이 좋다.
    // expect(fn()).toBe(undefined)
  })

  test('number 0 is falsy but string 0 is truthy', () => {
    expect(0).toBeFalsy()
    expect('0').toBeTruthy()
  })

  test('Numeric comparison', () => {
    expect(12).toBeGreaterThan(10)
    expect(12).toBeGreaterThanOrEqual(12)
    expect(10).toBeLessThan(12)
    expect(10).toBeLessThanOrEqual(10)
  })

  test('class instanceof', () => {
    // Given
    class A {}

    // Then
    expect(new A()).toBeInstanceOf(A)
    expect(() => {}).toBeInstanceOf(Function)
    // expect(new A()).toBeInstanceOf(Function) // -> error
  })

  test('null', () => {
    // Given
    const getNull = () => null

    // Then
    expect(getNull()).toBeNull()
  })

  test('NaN', () => {
    expect(NaN).toBeNaN()
    expect(1).not.toBeNaN()
  })
})
