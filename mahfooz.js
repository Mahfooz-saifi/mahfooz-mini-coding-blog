
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  
      <title>Mahfooz Blog</title>
      <link rel="icon" href="mahfoozlogo.png.jpg" type="image/gif" sizes="16*16">
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><b>Mahfooz</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact.html">Contact Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/email.html">Email Us</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    topics
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">programing</a></li>
                    <li><a class="dropdown-item" href="#">coding</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">supports</a>
                    <li><a class="dropdown-item" href="#">Right for us</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div id="carouselExampleDark" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="https://source.unsplash.com/1400x300/?nature,programing">
              <div class="carousel-caption d-none d-md-block">
                <h5>Mahfooz Blog</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus laboriosam ipsam voluptate necessitatibus recusandae doloremque ullam veniam magni. Perspiciatis sapiente velit possimus necessitatibus! Deserunt perferendis fugit cupiditate soluta sunt?</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://source.unsplash.com/1400x300/?programming,python" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Mahfooz Blog</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://source.unsplash.com/1400x300/?code,water" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Mahfooz Blog</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <button class="btn btn-outline-primary" type="submit">web doblopment</button>
        <button class="btn btn-outline-success" type="submit">python</button>
        <button class="btn btn-outline-info" type="submit">machine learning</button>
       
        
  
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
      -->
    </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});