describe('object property test practice', () => {
  test('object property', () => {
    // Given
    const houseForSale = {
      bath: true,
      bedrooms: 4,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white',
        'nice.oven': true
      },
      'ceiling.height': 2
    }

    // Then
    expect(houseForSale).toHaveProperty('bath')
    expect(houseForSale).toHaveProperty('bedrooms', 4)

    expect(houseForSale).not.toHaveProperty('pool')

    // 점 표기법을 사용한 심층 참조
    expect(houseForSale).toHaveProperty('kitchen.area', 20)
    expect(houseForSale).toHaveProperty('kitchen.amenities', [
      'oven',
      'stove',
      'washer'
    ])

    expect(houseForSale).not.toHaveProperty('kitchen.open')

    // keyPath를 포함하는 배열을 사용한 심층 참조
    expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20)
    expect(houseForSale).toHaveProperty(
      ['kitchen', 'amenities'],
      ['oven', 'stove', 'washer']
    )
    expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven')
    expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven'])
    expect(houseForSale).not.toHaveProperty(['kitchen', 'open'])

    // 키 자체에 점이있는 키 참조
    expect(houseForSale).toHaveProperty(['ceiling.height'], 2)
  })
})
