exports.errorHandler = function(err, req, res, next) {
    if (err.status === 503) err = utils.error(503);
    if (!err.status) err = utils.error(500);
    var status = err.status || 500;
    res.status(status).json({
      error: {
        errorCode: err.errorCode,
        errorType: err.errorType,
        code: err.code,
        description: err.description
      }
    });
  };

exports.error = function(code) {
    utils.error(code, undefined);
  };
exports.error = function(code, description) {
    var err = new Error();
    err.status = code;
    switch (code) {
      case 400:
        err.errorCode = 400;
        err.errorType = "MSJ";
        err.code = "001";
        err.description = "Error en mensaje de entrada.";
        break;
      case 401:
        err.errorCode = 401;
        err.errorType = "SEG";
        err.code = "001";
        err.description = "Invalid authorization code";
        break;
      case 403:
        err.errorCode = 403;
        err.errorType = "NEG";
        err.code = "003";
        err.description = "Request cannot be completed.";
        break;
      case 404:
        err.errorCode = 404;
        err.errorType = "MSJ";
        err.code = "002";
        err.description = "Trying to access a resource that do not exists.";
        break;
      case 500:
        err.errorCode = 500;
        err.description = "Internal server error.";
        break;
      default:
        err.description = "Unknow error.";
    }
    if (!description) return err;
    else {
      err.description = description;
      return err;
    }
};
