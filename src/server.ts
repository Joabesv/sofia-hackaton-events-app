import { buildApp } from './app';



async function start() {
  const app = await buildApp({ 
    logger: true
  });
  try {
  app.listen({ port: 5000, host: '0.0.0.0' })
  } catch(error) {
    app.log.fatal({ error },'error on startup')
    throw error;
  }
}

start();