import React from "react"
import "./item.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

 

class ListItem extends React.Component{

    constructor(props){
      super(props)
       this.handelDeleteX = this.handelDeleteX.bind()

   }
     handelDeleteX=(event)=> {
      let li= event.target .parentNode.parentNode.parentNode
      let ul = li.parentNode
      ul.removeChild(li) 

    }


    render(){
        return(
           
            <li >
            <p className="text">{this.props.text}</p>
            <a href="#"  onClick={this.handelDeleteX}><FontAwesomeIcon icon={faTrash}  size="lg"/></a>  
           {<p>{moment().format('MMMM Do YYYY, h:mm a')}</p>}
            </li>
        
        )
    }

}


export default ListItem
