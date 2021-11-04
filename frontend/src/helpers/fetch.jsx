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

export function fetchDeleteTask(id, token, task) {
  const response = fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(task)
  })
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => error)

  return response;
}

export function fetchUpdateTask(id, token, newTask) {
  const response = fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(newTask)
  })
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => error)

  return response;
}

export function fetchNewTask(token, newTask) {
  const response = fetch('http://localhost:3001/tasks', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(newTask)
  })
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => error)

  return response;
}