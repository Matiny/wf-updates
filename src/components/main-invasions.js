import React from 'react';
import NormalInvasions from './normal-invasions';
import InfestInvasions from './infest-invasions';

const Invasions = (props) => {
  return (
    <main>
      <div className="close-button" onClick={props.close}>Back to Menu</div>
      <header>{props.whichEvent.toUpperCase()}</header>
      <div className="grid">
        {
          props.theData.map(
            invasion => {
            //Check if the invasion is complete & if it's an outbreak
            return (!invasion.completed) && (!invasion.vsInfestation) ?
            <NormalInvasions
              key={invasion.id}
              sector={invasion.node}
              desc={invasion.desc}
              attackReward={invasion.attackerReward.itemString}
              defendReward={invasion.defenderReward.itemString}
              attackimage={invasion.attackerReward.thumbnail}
              defendimage={invasion.defenderReward.thumbnail}
              attackIcon={invasion.attackingFaction}
              defendIcon={invasion.defendingFaction}
              percentAttack={invasion.completion}
              percentDefense={100 - invasion.completion}
              whichEvent={props.whichEvent}
            />
            //Check if the invasion is complete & if it's an outbreak again
            : (!invasion.completed) && (invasion.vsInfestation) ?
            <InfestInvasions
            key={invasion.id}
            sector={invasion.node}
            desc={invasion.desc}
            image={invasion.defenderReward.thumbnail}
            reward={invasion.defenderReward.itemString}
            percent={invasion.completion}
            whichEvent={props.whichEvent}
          />
            : null
            }
          )
        }
      </div>


    </main>
  )
}

export default Invasions;
