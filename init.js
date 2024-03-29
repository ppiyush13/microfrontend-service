const path = require('path');
const simpleGit = require('simple-git');
const {promisify} = require('util');

const getPackage = async (package) => {
    const packagePath = path.resolve('packages');
    const git = simpleGit(packagePath);
    const gitClone = promisify(git.clone.bind(git));

    await gitClone(`https://github.com/ppiyush13/${package}.git`);
}

getPackage('container');
getPackage('app1');
getPackage('app2');
getPackage('app3');
getPackage('app4');