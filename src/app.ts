import express from 'express';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.listen(port, () => console.log('Listening on port', port));