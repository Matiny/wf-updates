import React from 'react';

const Sorties = (props) => {
  let boss = props.theData.boss
  return(
    <main>
      <div className="close-button" onClick={props.close}>Back to Menu</div>
      <header>{props.whichEvent.toUpperCase()} | {boss}</header>
      {props.theInfo.map(
        sortie => {
          return (
            <section key={sortie.modifier} className="sortieBox">
              <h1>{sortie.missionType} || {sortie.node}</h1>
              <p className="sortieText">{sortie.modifier}</p>
              <p className="sortieText desc">{sortie.modifierDescription}</p>
            </section>
          )
        }
      )}
    </main>
  )
}

export default Sorties;
