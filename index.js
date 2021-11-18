const express = require("express");
const { getUser } = require("./getApi");
const { getUser, getRepo, getContributors } = require("./getApi");
const app = express();
const port = process.env.PORT || 8080;

app.get('/api/v1/githubUser/:githubUserName', (req, res) => {
    res.send(`Connecting to:${req.params.githubUserName}`);
});

app.get('/api/v1/githubUser/:githubUserName/avatar', (req, res) => {
    res.send(`${req.params.githubUserName}`);
});


app.get('/api/v1/githubUser/:githubUserName/:repoName', (req, res) => {
    getRepo(req.params.githubUserName, req.params.repoName)
        .then(data => {
            console.log(data);
            res.send(data);
        }).catch(() => {
            res.send("Repo Not Exist");
        });
});

app.get('/api/v1/githubUser/:githubUserName/:repoName/contributers', (req, res) => {
            getUserRepoContributors(req.params.githubUserName, req.params.repoName)
                .then(data => {
                    console.log(data);
                    res.send(data);
                }).catch(err => {
                    console.log(err)
                    res.status(400).send('incorrect paramters')
                });


            app.param('repoName', (req, res, next, value) => {
                        const regex = /^[a-zA-Z]+$/g;
                        const checkParam = regex.test(req.params.repoName);