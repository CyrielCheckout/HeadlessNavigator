const express = require('express');
const app = express();
require('dotenv').config({ path: __dirname + '/var.env' })
require('dotenv').config();
var createError = require('http-errors');
var path = require('path');
var indexRouter = require('./routes/index');
var MainRouter = require('./routes/chromeless');
const cors = require('cors');
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/chromeless', MainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});






// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;