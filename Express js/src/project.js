const express = require('express')
const app = express();
const path = require('path')
const port = 8000;
const hbs = require('hbs')                 //required to require for using partials
const requests = require('requests')

//built in middleware
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../template/views');      //view directory name changed
const partialsPath = path.join(__dirname, '../template/partials');      //view directory name changed

//To set the view engine
app.set('view engine', "hbs");
app.set('views', templatePath);      //assigning that the views folder is now at template path
hbs.registerPartials(partialsPath)    // To register the partials



app.set(express.static(templatePath))

//Template engine route
app.get('/', (req, res) => {
    res.render("index" , {
        name : "Nishant"
    })
});

app.get('/about', (req, res) => {
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=ff1bc4683fc7325e9c57e586c20cc03e`
      )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
          console.log(`city name is = ${arrData[0].name} & temprature is =  ${arrData[0].main.temp}` );
          res.write(`city name is = ${arrData[0].name} & temprature is =  ${arrData[0].main.temp}`);
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });
});

app.get('/gallary', (req, res) => {
    res.render("gallary" , {
        name : "Nishant"
    })
});

app.get('/contact', (req, res) => {
    res.render("contact" , {
        name : "Nishant"
    })
});

app.get('*', (req, res) => {
    res.render("404" , {
        error : "Oops! Page couldn't be Found"
    })
});

// app.get('/' , (req , res)=>{
//     res.send("Hello from the express server")
// })

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})  