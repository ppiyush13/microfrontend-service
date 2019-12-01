const express = require('express');

const app = express();
const port = 12002;

app.get('/api/app2/user', async (req, res) => {
    try {
        console.log('invovked app2');
        res.send({
            user: 'Piyush',
            app: 'APP2',
        });
    }
    catch(ex) {
        console.dir(ex)
        res.send(`Error, ${ex}`);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))