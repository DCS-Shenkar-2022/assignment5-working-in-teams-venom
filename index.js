const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.param('githubUserName', (req, res, next, value) => {
    const regex = /^[a-zA-Z]+$/g;
    const checkParam = regex.test(req.params.githubUserName);
    if (!checkParam) {
        return res.status(500).send('invalid params!')
    }
    next();
});

app.get('/api/v1/githubUser/:githubUserName', (req, res) => {
    res.send(`Connecting to:${req.params.githubUserName}`);
});

app.get('/api/v1/githubUser/:githubUserName/avatar', (req, res) => {
    res.send(`${req.params.githubUserName}`);
});


app.param('repoName', (req, res, next, value) => {
    const regex = /^[a-zA-Z]+$/g;
    const checkParam = regex.test(req.params.repoName);
    if (!checkParam) {
        return res.status(500).send('invalid params!')
    }
    next();
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName', (req, res) => {
    res.send(` ${req.params.githubUserName} / repo/ ${req.params.repoName}`);
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers', (req, res) => {
    res.send(` ${req.params.githubUserName} / repo/ ${req.params.repoName}`);
});

app.all('*', (req, res) => res.send('Global handler forall routes'));

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});

console.log(`Listening on port ${port}`);