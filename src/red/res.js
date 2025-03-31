exports.sucess = (req, res, message, status) => {
    const statusCode = status || 200;
    const messageOk = message || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: messageOk,
    })
}

exports.error = (req, res, message, status) => {
    const statusCode = status || 500;
    const messageError = message || 'Internal error';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: messageError,
    })
}
