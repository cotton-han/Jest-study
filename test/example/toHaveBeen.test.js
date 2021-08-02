describe('toHaveBeen test practice', () => {
  function drinkAll (callback, flavour) {
    if (flavour !== 'octopus') {
      callback(flavour)
    }
  }

  function drinkEach (callback, flavours) {
    flavours.forEach(flavour => callback(flavour))
  }

  test('drinkAll() - drinks something lemon-flavoured', () => {
    // Given
    const drink = jest.fn()

    // When
    drinkAll(drink, 'lemon')

    // Then
    expect(drink).toHaveBeenCalled()
  })

  test('drinkAll() - does not drink something octopus-flavoured', () => {
    // Given
    const drink = jest.fn()

    // When
    drinkAll(drink, 'octopus')

    // Then
    expect(drink).not.toHaveBeenCalled()
  })

  test('drinkEach() - drinks each drink', () => {
    // Given
    const drink = jest.fn()

    // When
    drinkEach(drink, ['lemon', 'octopus'])

    // Then
    expect(drink).toHaveBeenCalledTimes(2)
  })

  test('drinkAll() - drink called with lemon', () => {
    // Given
    const drink = jest.fn()

    // When
    drinkAll(drink, 'lemon')

    // Then
    expect(drink).toHaveBeenCalledWith('lemon')
  })

  test('drinkEach() - last drink must be octopus', () => {
    // Given
    const drink = jest.fn()

    // When
    drinkEach(drink, ['lemon', 'octopus'])

    // Then
    expect(drink).toHaveBeenLastCalledWith('octopus')
  })

  test('drinkEach() - drinkEach drinks each drink', () => {
    // Given
    const drink = jest.fn()

    // When
    drinkEach(drink, ['lemon', 'octopus'])

    // Then
    expect(drink).toHaveBeenNthCalledWith(1, 'lemon')
    expect(drink).toHaveBeenNthCalledWith(2, 'octopus')
  })
})
