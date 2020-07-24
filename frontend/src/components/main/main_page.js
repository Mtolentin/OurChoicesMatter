import React from 'react';
import '../../css/main-page.css';
import Carousel from 'react-bootstrap/Carousel';

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-page">

        <div className="splash-image">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://images.wallpaperscraft.com/image/street_traffic_urban_123634_800x600.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Restaruants</h3>
                <p>See which restaruants are still open during the pandemic.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://www.sfexaminer.com/wp-content/uploads/2019/02/f.WalkSF.0715.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Activites</h3>
                <p>Find what activites you can do during the pandemic.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://media.atre.yardi.com/2/68521/images/San-Francisco-Proper-Hotel.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Hotels</h3>
                <p>Find hotels that are open during the pandemic.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* <p id="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pharetra sem at lectus maximus rhoncus.
            Fusce ut ex vitae elit blandit cursus.
            Phasellus urna dui, sodales venenatis justo at, faucibus aliquet massa.
            Nunc et massa a arcu lobortis aliquam a et dolor.
            Nunc ullamcorper ante nec finibus elementum.
            Donec lacinia rhoncus ipsum, id tincidunt nulla semper in.
            Ut mollis a lacus eget egestas.
            Mauris tristique dapibus turpis volutpat dictum.
            Mauris tempus urna lorem, id aliquet velit elementum sed.
            Proin sapien risus, tincidunt vestibulum cursus vitae, bibendum non erat.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas vitae risus ac nisi gravida vehicula.
            Aliquam accumsan rhoncus dui ac tempus.
            Integer vitae vulputate nunc.


            Cras luctus magna odio, a sagittis lectus tincidunt et.
            Sed semper, dui sit amet condimentum ornare, ante ipsum pulvinar tellus, in blandit diam velit ac dolor.
            Fusce ac congue magna.
            In ac massa sit amet nibh consequat dapibus commodo nec nisi.
            Quisque sed nibh feugiat, maximus ante ut, facilisis sem.
            Aenean vitae varius lacus.
            Sed sagittis sem quis ligula commodo porttitor.
            Donec finibus ipsum a urna vulputate congue.


            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras lacinia nisl quis tempus cursus.
            Duis non elit enim.
            Ut molestie fringilla finibus.
            Cras finibus felis erat, eu sollicitudin mi tempus interdum.
            Nullam vitae felis eget sem ultrices mattis a eu metus.
            Duis consequat nec quam ac fermentum.
            Pellentesque ac nisi nisi.
            In hac habitasse platea dictumst.
          </p> */}
        </div>
      </div>
    );
  }
}

export default MainPage;