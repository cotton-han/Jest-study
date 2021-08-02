describe('array test practice', () => {
  test('array', () => {
    // Given
    const colors = ['Red', 'Yellow', 'Blue']

    // Then
    expect(colors).toHaveLength(3)
    expect(colors).toContain('Yellow')
    expect(colors).not.toContain('Green')
  })

  test('object array', () => {
    // Given
    const people = [{ name: 'p1', age: 16 }, { name: 'p2', age: 20 }, { name: 'p3', age: 12 }]

    // Then
    expect(people).toHaveLength(3)
    expect(people).toContainEqual({ name: 'p1', age: 16 })
    expect(people).not.toContainEqual({ name: 'p1', age: 20 })
  })
})
