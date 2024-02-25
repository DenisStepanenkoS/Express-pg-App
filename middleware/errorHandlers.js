module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  console.log('err :>> ', err);
  res.status(err.status ?? 500).send(err.message ?? 'Sever Error');
};
