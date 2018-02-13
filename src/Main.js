import React, { Component } from 'react';
import axios from 'axios';
import './styles.min.css';

import Menu from './components/menu'
import Alerts from './components/main-alerts';
import Invasions from './components/main-invasions';
import Baro from './components/main-baro';
import Darvo from './components/darvo';
import Sorties from './components/sorties';
import Fissures from './components/main-fissures';
import Cetus from './components/cetus';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      hora: "Loading...",
      whichEvent: "menu",
      alerts: [],
      invasions: [],
      baro: [],
      baroitems: [],
      arrival: {},
      departure: {},
      darvo: [],
      darvoSold: "",
      darvoTotal: "",
      darvoTime: "",
      sortie: {},
      sortieInfo: [],
      fissures: [],
      cetus: {}
    }
  }

  clickIcon = (whichEvent) => {
    this.setState({whichEvent});
  }

  axiosFunc = () => {

    axios.get('https://api.warframestat.us/pc').then(results => {
      this.setState({
        alerts: results.data.alerts,
        invasions: results.data.invasions,
        baro: results.data.voidTrader,
        baroitems: results.data.voidTrader.inventory,
        arrival: results.data.voidTrader.activation,
        departure: results.data.voidTrader.expiry,
        darvo: results.data.dailyDeals,
        darvoSold: results.data.dailyDeals["0"].sold,
        darvoTotal: results.data.dailyDeals["0"].total,
        darvoTime: results.data.dailyDeals["0"].expiry,
        sortie: results.data.sortie,
        sortieInfo: results.data.sortie.variants,
        fissures: results.data.fissures,
        cetus: results.data.cetusCycle,
      });
      setTimeout(this.axiosFunc,1000 * 60);
    });
    console.log(this.state.baroitems)
  }

  componentDidMount() {
    this.axiosFunc();
  }

  render() {
    return(
        //render components based off which event was chosen
        <div>
          {this.state.whichEvent === "menu" ?
          <Menu
            alertView={() => {this.clickIcon("alerts")}}
            baroView={() => {this.clickIcon("void trader")}}
            invasionView={() => {this.clickIcon("invasions")}}
            fissureView={() => {this.clickIcon("fissures")}}
            sortieView={() => {this.clickIcon("sorties")}}
            cetusView={() => {this.clickIcon("cetus cycle")}}
            darvoView={() => {this.clickIcon("darvo deals")}}
          />
          :
            this.state.whichEvent === "alerts" ?
          <Alerts
            whichEvent={this.state.whichEvent}
            theData={this.state.alerts}
            close={() => {this.clickIcon("menu")}}/>
          : this.state.whichEvent === "invasions" ?
          <Invasions
            whichEvent={this.state.whichEvent}
            theData={this.state.invasions}
            close={() => {this.clickIcon("menu")}}/>
          : this.state.whichEvent === "void trader" ?
          <Baro
            whichEvent={this.state.whichEvent}
            character={this.state.baro.character}
            location={this.state.baro.location}
            present={this.state.baro.active}
            departure={this.state.departure}
            arrival={this.state.arrival}
            theItems={this.state.baroitems}
            close={() => {this.clickIcon("menu")}}/>
          : this.state.whichEvent === "darvo deals" ?
          <Darvo
            theData={this.state.darvo}
            whichEvent={this.state.whichEvent}
            total={this.state.darvoTotal}
            sold={this.state.darvoSold}
            time={this.state.darvoTime}
            close={() => {this.clickIcon("menu")}}/>
          : this.state.whichEvent === "sorties" ?
          <Sorties
            theData={this.state.sortie}
            theInfo={this.state.sortieInfo}
            whichEvent={this.state.whichEvent}
            close={() => {this.clickIcon("menu")}}
          />
          :this.state.whichEvent === "fissures" ?
          <Fissures
            theData={this.state.fissures}
            whichEvent={this.state.whichEvent}
            close={() => {this.clickIcon("menu")}}
          />
          :this.state.whichEvent === "cetus cycle" ?
          <Cetus
            theData={this.state.cetus}
            deadline={this.state.cetus.expiry}
            whichEvent={this.state.whichEvent}
            close={() => {this.clickIcon("menu")}}
          />
          : null
        }
        </div>
    )
  }

}
