import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is ready');
});

//  get a list of 5 jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'this is joke'
        },
         {
            id: 2,
            title: 'Another  joke'
        },
         {
            id: 3,
            title: 'this A other  joke'
        }];
    res.send(jokes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
}
);