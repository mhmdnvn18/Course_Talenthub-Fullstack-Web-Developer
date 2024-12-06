const express = require('express');
//cara kita memberu tahu file kota bahwa kita akan pake suatu package/aplikasi namanya express

const app = express();
//kita bikin servernya

const port = 3000;
//define port

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get("/movies", (request,response)=>
    let dataMovies = [
        {
        title: "the Dark Knight",
        year: 2019,
        imgUrl:"",
        description:"Pilem tentang manusia kostum kelelawar"
        }
    ]
    response.send(dataMovies)
});

//Routing

//function untuk menjalankan expressnya di port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});