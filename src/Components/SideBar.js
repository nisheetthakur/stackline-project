import React,{Component} from "react"
import './styles.css'



class SideBar extends Component{

    render(props){
        let d=this.props.d;
        return (
            <div className="sidebar">
                 <img src={d.image} className='img'/>
                 <div>
                     <p className='title'>{d.title}</p>
                     <p className='subtitle'>{d.subtitle}</p>
                     <p className='tag'>
                         {d.tags.map((tag,i)=>(
                             <span key={i} className='tag'>{tag} |     </span>
                         ))}
                     </p>
                 </div>
                </div>
        )
    }
}

export default SideBar;