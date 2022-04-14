export default function handleResponseFromAPI(exito) {
  return exito
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
