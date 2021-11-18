const axios = require('axios');
getUser = githubUserName => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.github.com/users/${githubUserName}`)
            .then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err);
            });
    });
};
getRepo = (githubUserName, repoName) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.github.com/repos/${githubUserName}/${repoName}`)
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
    });
};
getContributors = (githubUserName, repoName) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.github.com/repos/${githubUserName}/${repoName}/contributors`)
            .then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
    });
};
module.exports = {
    getUser,
    getRepo,
    getContributors
};