import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

const PORT = 5000;

app.get('/', (req: Request, res: Response) => {
    res.send({'message': 'Hola mundo'})
})

app.listen(PORT, () => {
    console.log('Server running...')
})