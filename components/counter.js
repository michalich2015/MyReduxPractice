import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {inc,dec,rand} from '../actions'
import * as actions from '../actions';

const Counter=({counter,inc,dec,rand})=>{
    return(
    <div className='jumbotron'>
        <h2 >{counter}</h2>
        <button onClick={dec} className="btn btn-primary btn-large">DEC</button>
        <button onClick={inc} className="btn btn-primary btn-large">INC</button>
        <button onClick={rand} className="btn btn-primary btn-large">RAND</button>
    </div>);
};

const mapStateToProps=(state)=>{
    return{
        counter:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators(actions,dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);