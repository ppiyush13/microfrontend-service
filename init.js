const getPackage = async (package) => {
    const packagePath = path.resolve('packages');
    const git = simpleGit(packagePath);
    const gitClone = promisify(git.clone.bind(git));

    await gitClone(`https://github.com/ppiyush13/${package}.git`);
}

getPackage('container');