const express = require('express');
const path = require('path');
const simpleGit = require('simple-git');
const {promisify} = require('util');
const pnpm = require('@pnpm/exec').default

const app = express();
const port = 3000;

/* app.get('/api/update/:package/:version', async (req, res) => {
    try {
        const {package, version} = req.params;
        const packagePath = path.resolve('packages', package);
        const git = simpleGit(packagePath); 
        const gitPull = promisify(git.pull.bind(git));
        const gitCheckout = promisify(git.checkout.bind(git));
        await gitCheckout('master');
        await gitPull();
        await gitCheckout(`tags/${version}`);
        
        res.send(packagePath);
    }
    catch(ex) {
        res.send(`Error, ${ex.message}`);
    }
}); */

// getting from github for now
const getPackage = async (package, version) => {
    const packagePath = path.resolve('packages', package);
    const git = simpleGit(packagePath); 
    const gitPull = promisify(git.pull.bind(git));
    const gitCheckout = promisify(git.checkout.bind(git));

    await gitCheckout('master');
    await gitPull();
    await gitCheckout(`tags/${version}`);
}

app.get('/api/update/:package/:version', async (req, res) => {
    try {
        const {package, version} = req.params;

        await getPackage(package, version);
        await pnpm(['install', '-r']);
 
        res.send('Done');
    }
    catch(ex) {
        console.dir(ex)
        res.send(`Error, ${ex}`);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))