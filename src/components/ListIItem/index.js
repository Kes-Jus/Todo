import React from "react"
import "./item.css"
 

class ListItem extends React.Component{

    constructor(props){
      super(props)
       this.handelDeleteX = this.handelDeleteX.bind()

   }
     handelDeleteX=(event)=> { 
  
     let li= event.target .parentNode
     let ul =li.parentNode
       ul.removeChild(li) 
    
 }
    render(){
        return(
            <li >{this.props.text}
            <a href="#"  onClick={this.handelDeleteX}>[x]</a></li>
        )
    }
}

export default ListItem
