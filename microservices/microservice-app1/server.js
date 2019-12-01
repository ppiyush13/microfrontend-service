const express = require('express');

const app = express();
const port = 12001;

app.get('/api/app1/user', async (req, res) => {
    try {
        console.log('invovked app1');
        res.send({
            user: 'Piyush',
            app: 'APP1',
        });
    }
    catch(ex) {
        console.dir(ex)
        res.send(`Error, ${ex}`);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))