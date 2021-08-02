describe('match test practice', () => {
  test('mentions grapefruit', () => {
    expect('grapefruit is good').toMatch(/grapefruit/)
    expect('grapefruits').toMatch('fruit')
  })

  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white'
    }
  }
  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      wallColor: expect.stringMatching(/white|yellow/)
    }
  }

  test('the house has my desired features', () => {
    expect(houseForSale).toMatchObject(desiredHouse)
  })

  test('the number of elements must match exactly', () => {
    expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([{ foo: 'bar' }, { baz: 1 }])
  })

  test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
    expect([{ foo: 'bar' }, { baz: 1, extra: 'quux' }]).toMatchObject([
      { foo: 'bar' },
      { baz: 1 }
    ])
  })
})
