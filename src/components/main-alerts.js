import React from 'react';
import AlertsBox from './alertsbox';

const Alerts = (props) => {

    return (
      <main className="content">
        <div className="close-button" onClick={props.close}>Back to Menu</div>
        <header>{props.whichEvent.toUpperCase()}</header>
        <div className="grid">
          {props.theData.map(alert => {

            let endNumber = Date.parse(alert.expiry);
            let startNumber = Date.parse(alert.activation);
            //Check if alert is active
            return Date.now() > startNumber && Date.now() < endNumber ?
              <AlertsBox
                deadline={alert.expiry}
                activate={alert.activation}
                image={alert.mission.reward.thumbnail}
                reward={alert.mission.reward.itemString}
                credits={alert.mission.reward.credits}
                type={alert.mission.type}
                sector={alert.mission.node}
                key={alert.id}/>
                :null
          })}
        </div>
      </main>
    );

}

export default Alerts;
