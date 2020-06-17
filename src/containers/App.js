import React,{Component} from 'react'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll';
import Cardlist from '../components/Cardlist'
import "../containers/App.css"
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: ""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
          return  response.json()
        }).then(users=>{
            this.setState({robots:users})
        })
        
    }
    onsearchchange =(event)=>{
        this.setState({searchfield:event.target.value});  
    }
    render() {
        const filterRobo = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
           return <h1>Loding</h1>
        }
            return(
            
                <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <Searchbox searchChange={this.onsearchchange}/>
                <Scroll>
                <Cardlist robots={filterRobo}/>
                </Scroll>
               
                    </div>
        );  
        }
    }   


export default App;