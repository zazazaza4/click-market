module.exports = {
  app: {
    name: 'click-market',
    apiURL: `${process.env.BASE_API_URL}`,
    clientURL: process.env.CLIENT_URL
  },
  port: process.env.PORT || 3000,
  database: {
    url: process.env.MONGO_URL
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenLife: '7d'
  }
};
