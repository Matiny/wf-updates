import React from 'react';

class InfestInvasions extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     size: window.innerWidth > 720 ?
    (260.0 / 1920) * window.innerWidth :
    (550.0 / 1920) * window.innerWidth
   }
 }

 makeCircle = () => {
   this.setState({ size:
     window.innerWidth > 720 ?
   (260.0 / 1920) * window.innerWidth :
   (550.0 / 1920) * window.innerWidth});
   const ctx = this.circle.getContext('2d');
   //To keep the number from going negative
   let percent = this.props.percent < 0 ? 0 : this.props.percent;
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

 onResize = () =>{
   this.makeCircle();
 }

 componentDidMount() {
   this.onResize();
   window.addEventListener("resize", this.onResize);
}

componentWillUnmount() {
  window.removeEventListener("resize", this.onResize);
}

 render() {
   return (
     <section>
       <h1>
         {this.props.desc.toUpperCase()} || {this.props.sector}
       </h1>
       <figure className="leftfigure">
         <img src={this.props.image} alt=""/>
         <figcaption>{this.props.reward}</figcaption>
       </figure>
       <figure className="countdown">
         <canvas
           ref={(canvas) => { this.circle = canvas; }}
           width={this.state.size} height={this.state.size}>
           </canvas>
           <p>{this.props.percent.toFixed(1)}%</p>
         <figcaption>Remaining Infested</figcaption>
       </figure>
     </section>
   )
 }
}

export default InfestInvasions;
