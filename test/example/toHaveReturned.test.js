describe('toHaveReturned test practice', () => {
  test('drinks returns', () => {
    // Given
    const drink = jest.fn(() => true)

    // When
    drink()

    // Then
    expect(drink).toHaveReturned()
  })

  test('drink returns twice', () => {
    // Given
    const drink = jest.fn(() => true)

    // When
    drink()
    drink()

    // Then
    expect(drink).toHaveReturnedTimes(2)
  })

  test('drink returns La Croix', () => {
    // Given
    const beverage = { name: 'La Croix' }
    const drink = jest.fn(beverage => beverage.name)

    // When
    drink(beverage)

    // Then
    expect(drink).toHaveReturnedWith('La Croix')
  })

  test('drink returns La Croix (Orange) last', () => {
    // Given
    const beverage1 = { name: 'La Croix (Lemon)' }
    const beverage2 = { name: 'La Croix (Orange)' }
    const drink = jest.fn(beverage => beverage.name)

    // When
    drink(beverage1)
    drink(beverage2)

    // Then
    expect(drink).toHaveLastReturnedWith('La Croix (Orange)')
  })

  test('drink returns expected nth calls', () => {
    // Given
    const beverage1 = { name: 'La Croix (Lemon)' }
    const beverage2 = { name: 'La Croix (Orange)' }
    const drink = jest.fn(beverage => beverage.name)

    // When
    drink(beverage1)
    drink(beverage2)

    // Then
    expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)')
    expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)')
  })
})
