import React from "react"
import List from "../../components/List/index"

const list = [{'text' : "bla bla bla"}, {'text' : "bla bla bla"}, {'text' : "bla bla bla"},{'text' : "bla bla bla"}]
class Main extends React.Component{


    render(){
        return(
           <List textlist={list}></List>
        )
    }
}

export default Main