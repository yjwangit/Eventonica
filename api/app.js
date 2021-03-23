var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
var app = express();
app.use(express.json())
const pgp = require("pg-promise")({});
// This is the path to DB 
var db = pgp("postgres://localhost:5432/eventonica");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
// catch 404 and forward to error handler


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.get("/events", async (req, res) => {
  try { const events = await db.any("SELECT * FROM events;", [true]); console.log({ events }); res.json(events); } catch (e) { console.log(e); }
});
app.post("/events", async (req, res) => {
  const _events = req.body;
  const _eventsSchema = {
    eventName: _events.title,
    eventDate: _events.date,
    location: _events.location,
    category:_events.category
  };
  const result = await db.any("INSERT into events (eventname,eventdate,category,location)VALUES("+_eventsSchema.eventName+","+_eventsSchema.eventDate+","+_eventsSchema.category+","+_eventsSchema.location+")",[true])
  res.status(200).send({msg:'successful'})
})


app.use(function(req, res, next) {
  next(createError(404));
});
app.listen(9000);




module.exports = app;
