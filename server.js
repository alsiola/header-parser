var app = require('express')();
app.use(require('express-useragent').express());

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
      ip = ip.substr(7)
    }
    res.send({
        ipaddress: ip,
        languages: req.acceptsLanguages(),
        software: req.useragent.os
    });
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
});

