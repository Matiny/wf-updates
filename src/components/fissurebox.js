import React, {Component} from 'react';

export default class FissureBox extends Component {
  constructor() {
    super();

    this.state = {
      hora: "Loading...",
      thepercent: "?",
      size: (260.0 / 1920) * window.innerWidth
    };

  }

  timer = () => {

    let eta = Date.parse(this.props.deadline) - Date.now();

    let seconds = Math.round((eta/1000) % 60);
    let minutes = Math.floor( (eta/1000/60) % 60 );
    let hours = Math.floor( (eta/(1000*60*60)) % 24 );
    let days = Math.floor( eta/(1000*60*60*24) );

    this.setState({
      //Prevent the state from dropping below 0
      hora: minutes < 0 ? "Expired" : `${days >= 1? days + " days" : ""} ${hours >= 1? hours + " hrs" : ""} ${minutes} min ${seconds} sec`
    });
  }

  getPercent = () => {

    let num = Date.now() - Date.parse(this.props.activate);
    let den = Date.parse(this.props.deadline) - Date.parse(this.props.activate);

    let result = (num * 100) / den;

    this.setState({
      //Prevent the state from surpassing 100
      thepercent: result < 101 ? Math.floor(result) : 100
    })
  }

  makeCircle = () => {
    this.setState({ size:
      window.innerWidth > 720 ?
    (260.0 / 1920) * window.innerWidth :
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
    } , 1000)

  }

  componentWillUnmount() {
    clearInterval(this.intervalFunc);
  }

  render() {
    return (
      <section>
        <h1>{this.props.type} || {this.props.sector}</h1>
        <figure className="leftfigure">
          <img src={require(`../icons/${this.props.tier}.svg`)} alt=""/>
          <figcaption>
            {this.props.tier} Fissure
          </figcaption>
        </figure>
        <figure className="countdown">
          <p>{`${this.state.thepercent}%`}</p>
          <canvas
            ref={(canvas) => { this.loadCircle = canvas; }}
            width={this.state.size} height={this.state.size}>
          </canvas>
          <figcaption>{this.state.hora}</figcaption>
        </figure>
      </section>
    )
  }
}
