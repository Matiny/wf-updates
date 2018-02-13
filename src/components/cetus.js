import React, {Component} from 'react';

export default class Cetus extends Component {
  constructor() {
    super();
    this.state = {
      hora: "Loading..."
    }
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

  componentDidMount() {
    this.intervalFunc = setInterval(() => {
      this.timer();
      //console.log(this.props.deadline);
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalFunc);
  }

  render() {
    let time = this.props.theData.isDay ? "day" : "night";
    return (
      <main>
        <div className="close-button" onClick={this.props.close}>Back to Menu</div>
        <header>{this.props.whichEvent.toUpperCase()}</header>
        <section className="cetus">
          <h1>Current Time: {
            time.charAt(0).toUpperCase() + time.slice(1)
          }</h1>
          <figure className="daynight">
            <img src={require(`../icons/${time}.svg`)} alt=""/>
            <figcaption>
              Switches in:
            </figcaption>
            <figcaption>
              {this.state.hora}
            </figcaption>
          </figure>
        </section>
      </main>
    )
  }
}
