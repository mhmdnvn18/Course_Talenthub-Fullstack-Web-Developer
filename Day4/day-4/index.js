const express = require("express");
// cara untuk memberi tahu file js kita bahwa kita akan pakai suatu package/applikasi namanya express

const app = express();
// kita bikin servernya

const port = 3000;
// define port

let dataMovies = [
  {
    id: 1,
    title: "The Drag Knight",
    year: 2019,
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
    description: "Pilem tentang manusia kostum kelelawar",
  },
  {
    id: 2,
    title: "The simson movie",
    year: 2015,
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlhIzSJgt2_SPYjQz8eya-rHd1Zgqj6cGpcN_H056pZgcAQYEu5RDZ3qokP-7dUVH52E_npA",
    description: "Pilem kartun",
  },
  {
    id: 3,
    title: "Manusia salmon",
    year: 2013,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGYnRys6-w8cl6KWyyZEar6yMVrqfdPyqZx3SjdQwfoogmtfz2e4Nxv4124tU0NUvRc4jlAeGMT7ow8E-8VR80rfCUqWIxwu5S_vlj4Q",
    description: "Pilem indo",
  },
];

//? routing / endpoint
// get -> ambil data
// post -> ngirim data

app.get("/", (request, response) => {
  response.send("Hello World! Welcome back to mobile legends");
});

app.get("/movies", (request, response) => {
  response.json(dataMovies);
});

// :id -> params
app.get("/movies/:id", (request, response) => {
  const filteredMovie = dataMovies.find((element) => {
    return element.id == request.params.id;
  });

  response.json(filteredMovie);
});

// routing

// function untuk menjalankan expressnya di port yg tadi
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// === equal value dan tipe data
// == equal value

// console.log(10 === "10");
// console.log(10 == "10");
