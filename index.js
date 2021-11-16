
const express= require("express");
const app= express();
const port = process.env.PORT||8080;


app.get('/api/v1/githubUser/:githubUserName',(req,res)=> {
    res.send(`Connecting to:${req.params.githubUserName}`);
    console.log(`Server ready at http://localhost:${port}/api/v1/githubUser/${req.params.githubUserName}`);
    
});

app.get('/api/v1/githubUser/:githubUserName/avatar',(req,res)=> {
    res.send(`${req.params.githubUserName}`);
    console.log(`Server ready at http://localhost:${port}`);
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName',(req,res)=> {
    res.send(` ${req.params.githubUserName} / repo/ ${req.params.repoName}`);
    console.log(`Server ready at http://localhost:${port}`);
});

app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers',(req,res)=> {
    res.send(` ${req.params.githubUserName} / repo/ ${req.params.repoName} and contributers: ${contributers}`);
    console.log(`Server ready at http://localhost:${port}`);
});

app.all('*', (req,res) => res.send('Global handler forall routes'));

app.listen(port, () =>{
    console.log(`Server ready at http://localhost:${port}`);
});

console.log(`Listening on port ${port}`);

 