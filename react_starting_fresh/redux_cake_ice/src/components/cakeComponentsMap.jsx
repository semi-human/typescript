import React from 'react'
import { buyCake, buy_ice } from '../store/actions/actions'
import { connect } from 'react-redux'
function CakeComponentsMap(props) {
  return (
    <div>
        <h1>Number of Cakes {props.numCakes}</h1>
        <button type="button" onClick={props.buyCake}>Buy Cake</button>
        <h1>Number of Ices {props.numIces}</h1>
        <button type="button" onClick={props.buy_ice}>Buy Ice</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        numCakes: state.cake.numCakes,
        numIces : state.ice.numIces
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake: () => dispatch(buyCake()),
        buy_ice : () => dispatch(buy_ice())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CakeComponentsMap);