export function fetchUser (id, cb) {
  setTimeout(() => {
    const user = {
      id: id,
      name: 'User' + id,
      email: id + '@test.com'
    }
    cb(user)
  }, 100)
}

export function promiseFetchUser (id) {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = {
        id: id,
        name: 'User' + id,
        email: id + '@test.com'
      }
      resolve(user)
    }, 100)
  })
}
