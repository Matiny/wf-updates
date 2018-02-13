import React from 'react';
import FissureBox from './fissurebox'


const Fissures = (props) => {
  return (
    <main className="content">
      <div className="close-button" onClick={props.close}>Back to Menu</div>
      <header>{props.whichEvent.toUpperCase()}</header>
      <div className="grid">
        {
           props.theData.sort(
            (a,b) => { return a.tierNum - b.tierNum; }
          )
          .map(
            fissure => {
              let endNumber = Date.parse(fissure.expiry);
              let startNumber = Date.parse(fissure.activation);
              //Check if alert is active
              return Date.now() > startNumber && Date.now() < endNumber ?
                <FissureBox
                  key={fissure.id}
                  deadline={fissure.expiry}
                  activate={fissure.activation}
                  sector={fissure.node}
                  tier={fissure.tier}
                  type={fissure.missionType}
                /> : null
            }
          )
        }
      </div>
    </main>
  )
}

export default Fissures;
