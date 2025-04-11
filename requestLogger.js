const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const ip = req.ip;
  
    console.log(`[INFO] ${timestamp} - ${method} ${url} from ${ip}`);
    next();
  };
  
  module.exports = requestLogger;
  