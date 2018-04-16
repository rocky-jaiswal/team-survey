const environmentConfiguration = (environment: string) => {

  if (environment === 'development') {
    return {
      baseURL: `http://${window.location.hostname}:3000/api`
    };
  }
  return {
    baseURL: `https://${window.location.hostname}/api`
  };
};

const Config = {
  env: environmentConfiguration(process.env.APP_ENV || 'development')
};

export default Config;
