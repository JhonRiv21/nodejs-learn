exports.sucess = (req, res, message = '', status = 200) => {
  res.status(status).send({
    error: false,
    status,
    body: message
  })
}

exports.error = (req, res, message = 'Internal error', status = 500) => {
  res.status(status).send({
    error: false,
    status,
    body: message
  })
}
