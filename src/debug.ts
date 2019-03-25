import {main} from './index'

main({
  rest: {
    port: +(process.env.PORT || 3000),
    host: process.env.HOST,
    openApiSpec: {
      // useful when used with OASGraph to locate your application
      setServersFromRequest: true,
    },
  },
}).catch(err => {
  console.error('Cannot start the application.', err);
  process.exit(1);
});