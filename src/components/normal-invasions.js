import React from 'react';

class NormalInvasions extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    size: window.innerWidth > 720 ?
  (260.0 / 1920) * window.innerWidth :
  (550.0 / 1920) * window.innerWidth
   }
 }

 circleOne = () => {
   this.setState({ size:
     window.innerWidth > 720 ?
   (260.0 / 1920) * window.innerWidth :
   (550.0 / 1920) * window.innerWidth});
   const ctx = this.circleL.getContext('2d');
   //To keep the number from going negative
   let percent = this.props.percentAttack < 0 ? 0 : this.props.percentAttack;
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

 circleTwo = () => {

   const ctx = this.circleR.getContext('2d');
   //To keep the number from going negative
   let percent = this.props.percentDefense < 0 ? 0 : this.props.percentDefense;
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

 onResize = () => {
   this.circleOne();
   this.circleTwo();
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

       <figure className="attackreward">
         <img src={require(`../icons/${this.props.attackIcon}.svg`)}
         className="icon"
         alt=""/>
         <img src={this.props.attackimage}
          className="reward"
          alt=""/>
         <canvas
           ref={(canvas) => { this.circleL = canvas; }}
           width={this.state.size} height={this.state.size}>
           </canvas>
           <p>{this.props.percentAttack.toFixed(1)}%</p>
         <figcaption>{this.props.attackReward}</figcaption>
       </figure>

       <figure className="defendreward">
         <img src={require(`../icons/${this.props.defendIcon}.svg`)}
         className="icon"
         alt=""/>
         <img src={this.props.defendimage}
          className="reward"
          alt=""/>
         <canvas
           ref={(canvas) => { this.circleR = canvas; }}
           width={this.state.size} height={this.state.size}>
           </canvas>
           <p>{this.props.percentDefense.toFixed(1)}%</p>
         <figcaption>{this.props.defendReward}</figcaption>
       </figure>

     </section>
   )
 }
}

export default NormalInvasions;
