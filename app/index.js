"use strict";

const config = require("./config"),
      logger = require("log4js").getLogger("index"),
      express = require('express'),
	  app = express()
;
////////////////////////////////////////////////////////////////////////////// Public folders
app.use(express.static('public'));
app.use('/bower',express.static('bower_components'));

////////////////////////////////////////////////////////////////////////////// Global Routes
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

////////////////////////////////////////////////////////////////////////////// Start Server itself
app.listen(config.port, () => {
	logger.trace('App started [port: %s]', config.port);
});

