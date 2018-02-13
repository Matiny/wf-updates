import React, {Component} from 'react';
import Inventory from './baro-inventory';

class Baro extends Component {
  constructor(props){
    super(props);
    this.state = {
      hora: "Loading...",
      thepercent: 0,
      test: 0,
      size: (300.0 / 1920) * window.innerWidth
    }
  }

  //While Baro is absent...
  timer = () => {

    const whichOne = this.props.present ? this.props.departure : this.props.arrival;

    let eta = Date.parse(whichOne) - Date.now();

    let seconds = Math.round((eta/1000) % 60);
    let minutes = Math.floor( (eta/1000/60) % 60 );
    let hours = Math.floor( (eta/(1000*60*60)) % 24 );
    let days = Math.floor( eta/(1000*60*60*24) );

    this.setState({
      //Prevent the state from dropping below 0
      hora: minutes < 1 && days < 1 && hours < 1 ?
      "Less than 1 min" : `${days >= 1? days + " days" : ""} ${hours >= 1? hours + " hrs" : ""} ${minutes} min ${seconds} sec`
    });
  }

  getPercent = () => {

    let twoWeeks = 1036800000;

    const max = this.props.present ? Date.parse(this.props.departure):
    Date.parse(this.props.arrival);

    const min = this.props.present ?
    Date.parse(this.props.arrival):
    max - twoWeeks;

    const result = ((Date.now() - min) * 100) / (max - min);

    this.setState({
      //Prevent the state from surpassing 100
      thepercent: result < 101 ? result.toFixed(2) : 100
    })
  }

  makeCircle = () => {
    this.setState({ size:
      window.innerWidth > 720 ?
    (300.0 / 1920) * window.innerWidth :
    (550.0 / 1920) * window.innerWidth});
    const ctx = this.loadCircle.getContext('2d');
    let percent = this.state.thepercent;
    let start = 4.72;
    let cw = ctx.canvas.width;
    let ch = ctx.canvas.height;
    var diff;
    let circleXY = this.state.size/2.0,
        circleRad = this.state.size/3.0;

    diff = ((percent / 100) * Math.PI*2*10).toFixed(2);
    ctx.clearRect(0, 0, cw, ch);
    let lineGirth = window.innerWidth > 720 ? 10 : 20;
    ctx.lineWidth = (lineGirth / 1920) * window.innerWidth;
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.arc(circleXY, circleXY, circleRad, start, diff/10+start, false);
    ctx.stroke();
  }

  componentDidMount() {
    this.intervalFunc = setInterval(() => {

      this.timer();
      this.getPercent();
      this.makeCircle();
    }
      , 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalFunc);
  }

  render() {
    let character = this.props.character;
    let location = this.props.location;
    let present = this.props.present;
    return(
        <main>
          <div className="close-button" onClick={this.props.close}>Back to Menu</div>
          <header>{this.props.whichEvent.toUpperCase()}</header>
          <section className="baroBox">
            <h1>{character} || {location}</h1>
            <figure className="leftfigure">
              <img src={require("../icons/baro.png")} alt=""/>
              <figcaption>
                {present ? "Leaving in -->" : "Arriving in -->"}
              </figcaption>
            </figure>

            <figure className="countdown-single">
              <canvas
                ref={(canvas) => { this.loadCircle = canvas; }}
                width={this.state.size} height={this.state.size}>
              </canvas>
              <p>{this.state.thepercent}%</p>
              <figcaption>{this.state.hora}</figcaption>
            </figure>
          </section>
          <div className="gridBaro">
            {
              this.props.theItems.map(
                item => { return <Inventory
                  key={item.item}
                  name={item.item}
                  price={item.ducats}
                  credits={item.credits}
                  character={character}
                  location={location}/>
                }
              )
            }
          </div>

        </main>
    )
  }
}


export default Baro;
