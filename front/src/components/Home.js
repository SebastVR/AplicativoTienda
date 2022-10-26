import React, { Fragment } from 'react';

export const Home = () => {
  return (
    <Fragment>
      <h4 id="encabezados_productos"> Ultimos productos</h4>
      <section id="productos" className="container mt-5">
        <div className="row">
          {/*Producto 1*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/lenguajes.png" alt="Lenguajes"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>Lenguajes de programación</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$150.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>
          {/*Producto 2*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/js.jpeg" alt="JS"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>Java Script</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$75.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>
          {/*Producto 3*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/python.jpeg" alt="Python"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>Python</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$70.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>
          {/*Producto 4*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/java.jpeg" alt="Java"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>Java</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$80.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>
          {/*Producto 5*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/django.jpeg" alt="Django"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>Django</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$75.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>
          {/*Producto 6*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/c++.png" alt="C++"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>C++</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$85.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>
          {/*Producto 7*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/html.png" alt="Html"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>Html</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$65.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>
          {/*Producto 8*/}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
              <img className="card-img-top mx-auto" src="./images/react.png" alt="React"></img>
              <div className="card-body d-flex flex-column">
                <h5 id="titulo_producto"><a href='http://localhost:3000'>React</a></h5>
                <div className="rating mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span id="No_de_opiniones"> 5 reviews</span>
                </div>
                <p className="card-text">$65.000</p><a href='http://localhost:3000' id="view_btn" className="btn btn-block">
                  Ver detalle
                  </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Fragment>
  );
};

export default Home
