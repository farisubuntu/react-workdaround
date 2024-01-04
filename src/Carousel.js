function Carousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://picsum.photos/200"
              alt="frog"
            />
          </div>
          <div className="carousel-item">
            <img<div className="carousel-item">
      <img className="d-block w-100" src="https://picsum.photos/205" alt="frog" />
    </div>
              className="d-block w-100"
              src="https://picsum.photos/201"
              alt="frog"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/202"
              alt="frog"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/203"
              alt="frog"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/204"
              alt="frog"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/205"
              alt="frog"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/206"
              alt="frog"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}


export default Carousel;