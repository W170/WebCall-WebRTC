export const config = {
  host: process.env.HOST || 'https://swapi.co/api',
  endpoints: {
    films: {
      default: '/films',
    },
  },
}
