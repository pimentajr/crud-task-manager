export async function fetchLogin(user) {
  const response = fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => error)

  return response;
}

export function fetchSignup(register) {
  const response = fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(register)
  })
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => error)

  return response;
}

export function fetchGetTasks(token) {
  const response = fetch('http://localhost:3001/tasks', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
  })
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => error)

  return response;
}