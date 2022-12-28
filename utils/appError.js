class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode || 500;
    this.statusMessage = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    //returns a string that represents the location of that particular error in the call.
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
