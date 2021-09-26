var express = require("express");
var path = require("path");
// var logger = require("morgan");
require("dotenv").config();
const expressValidator = require("express-validator");
const cors = require('cors')

var AdminRouter = require("./routes/Admin/Auth");
var authRouter = require("./routes/auth");
const schoolRouter = require("./routes/school/School");


var app = express().use("*", cors());
app.use(cors({ origin: true, credentials: true }));
/*  Alternative To avoid Cors errors */
// app.use((req, res, next) => {
//     console.log(req.headers)
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     // res.setHeader(
//     //   "Access-Control-Allow-Headers",
//     //   "Origin, X-Requested-With, Content-Type, Accept"
//     // );
//     // res.setHeader(
//     //   "Access-Control-Allow-Headers",
//     //   "X-Requested-With,content-type"
//     // );
//     next();
// });


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client/build")));
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());




app.use("/api/Admin/Auth", AdminRouter);
app.use("/api/auth", authRouter);
app.use("/api/school", schoolRouter);
app.use("/api/student", require("./routes/student/Student"));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// catch 404 and forward to error handler
// app.use(function(req, res, next) {

// });

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
// });

// module.exports = app;

app.listen(process.env.PORT || 8000, (err) => {
    {
        err
            ?
            console.log("error server starting ", err) :
            console.log("server up successfully");
    }
});

/* server {
#  listen 80;
#  root /var/www/react/_work/react-app/react-app/build/;
 # index index.html index.htm;
 location / {


        #proxy_http_version 1.1;
        #proxy_set_header Upgrade $http_upgrade;
        #proxy_set_header Connection 'upgrade';
        #proxy_set_header Host $host;
        #proxy_cache_bypass $http_upgrade;
        try_files $uri $uri/ /index.html;
  }
}*/