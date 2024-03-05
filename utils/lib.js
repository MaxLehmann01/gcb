/* Direct-Exports */
export const routeNotFound = (req, res, next) => {
  const err = { 
    message: `Route ${req.method}::${req.originalUrl} not found`, 
    status: 404 
  };

  next(err);
};

export const getCorsWhitelist = () => process.env.CORS_WHITELIST.split(',');

export const getCorsOpts = () => {
  const corsWhitelist = getCorsWhitelist();

  return { 
    credentials: true, 
    origin: (origin, callback) => { 
      if(corsWhitelist.includes(origin) || !origin) callback(null, true);
      else callback(new Error('not allowed by Cors!'));
    }
  }
}

/* Default-Export */
export default { routeNotFound, getCorsWhitelist, getCorsOpts }