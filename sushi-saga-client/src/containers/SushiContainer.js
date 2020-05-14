import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {

let makeSushiComponent=()=>{
    return props.sushis.map(currentSushi=> <Sushi key={currentSushi.id} sushi={currentSushi} onEat={props.onEat}/>)
  }


  return (
    <Fragment>
      <div className="belt">
        {
          makeSushiComponent()
        }
        <MoreButton onMore={props.onMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer