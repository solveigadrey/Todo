// var data ={
//     myList:[]
// }

class App extends React.Component{
    constructor(props){
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.state={
            myList:[]
        }
    }

    addToDo(){
        this.state.myList.push(this.textInput.value)
        this.setState({
            myList:this.state.myList    
        })
        
    }

    renderMap(arr){
        return arr.map(x=><div key ={`item${x}`}>{x}</div>);
    }
    render(){
       
        return(
            <div>
                <h1>ToDo List</h1>

                <div id ="toDo">
                    <input ref={(input)=>{
                        this.textInput=input;
                    }}/>
                    <button onClick={this.addToDo}>add</button>

                    <div id="list">
                        {this.renderMap(this.state.myList)}
                    
                    </div>
                </div>

                <div id ="bom">
                
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);


