import React, {Component} from 'react'
import SideBar from './SideBar'
import Info from './Info'
import './styles.css'
import logo from './logo.JPG'

import {connect} from 'react-redux'
import {getSale} from '../redux'


class Layout extends Component{
    render(props){
        //console.log(this.props.d)
        //console.log(this.props)
        let d=this.props;
        return( 
            <div>
             <div className="topnav" >
             <img src={logo} className='topLogo'/>     
            </div>   
            <SideBar d={d}/>
            <Info d={d}/>
            </div>
            )
    }
}

const mapStateToProps=state=>{
    return state
}

const mapDispatchToProps=dispatch=>{
    return {
        getSale: ()=>dispatch(getSale())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);