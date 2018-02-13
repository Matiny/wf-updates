import React, {Component} from 'react';

class Darvo extends Component {
  constructor(){
    super();

    this.state = {
      size: (300.0 / 1920) * window.innerWidth,
      thepercent: "?",
      hora: "Loading...",

    };
  }

  timer = () => {

    let eta = Date.parse(this.props.time) - Date.now();

    let seconds = Math.round((eta/1000) % 60);
    let minutes = Math.floor( (eta/1000/60) % 60 );
    let hours = Math.floor( (eta/(1000*60*60)) % 24 );
    let days = Math.floor( eta/(1000*60*60*24) );

    this.setState({
      //Prevent the state from dropping below 0
      hora: minutes < 0 ? "Expired" : `${days >= 1? days + " days" : ""} ${hours >= 1? hours + " hrs" : ""} ${minutes} min ${seconds} sec`
    });
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

  componentDidUpdate() {
    //1st divide out!
    const division = Math.floor(this.props.sold / this.props.total * 100.0);
    //Next, keep checking if the dynamic props are different from the established state!
    if (this.state.thepercent !== division) {
      this.setState({
        thepercent: division
      });
    }
  }

  componentDidMount() {
    this.intervalFunc = setInterval(() => {
      this.timer();
      this.makeCircle();
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalFunc);
  }

  render(){
    return(
      <main>
        <div className="close-button" onClick={this.props.close}>Back to Menu</div>
        <header>{this.props.whichEvent.toUpperCase()}</header>
        {
          this.props.theData.map(
            item => {
              return (
                <section key={item.id} className="darvoBox">
                  <h1>{item.item} || {item.discount}% Off</h1>
                  <figure className="leftfigure">
                    <img src={require("../icons/platinum.png")} alt=""/>
                    <figcaption>
                      Sale: {item.salePrice} Platinum</figcaption>
                  </figure>
                  <figure className="countdown-single">
                    <canvas
                      ref={(canvas) => { this.loadCircle = canvas; }}
                      width={this.state.size} height={this.state.size}>
                    </canvas>
                    <p>{this.state.thepercent}% <br/> Sold</p>
                    <figcaption>{this.state.hora}</figcaption>
                  </figure>
                </section>
              )
            }
          )
        }
      </main>
    )
  }


}

export default Darvo;
