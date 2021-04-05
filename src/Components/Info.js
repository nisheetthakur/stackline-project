import React,{Component} from 'react';
import Table from './Table'
import './styles.css'

class Info extends Component{
    render(){
        let d=this.props.d;
        return (
            <div className="main-body">
                <Table d={d}/>
            </div>
        );
    }
    
}

export default Info;