export function sucess (req, res, message = '', status = 200) {
  res.status(status).send({
    error: false,
    status,
    body: message
  })
}

export function error (req, res, message = 'Internal error', status = 500) {
  res.status(status).send({
    error: false,
    status,
    body: message
  })
}
