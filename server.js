var app = require('express')();
app.use(require('express-useragent').express());

app.get('/', (req, res) => {
    res.send({
        ipaddress: req.ip,
        languages: req.acceptsLanguages(),
        software: req.useragent.os
    });
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
});

