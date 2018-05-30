// var data ={
//     myList:[]
// }

class App extends React.Component{
    constructor(props){
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.addToDone= this.addToDone.bind(this)
        this.state={
            myList:[],
            myList2:[]
        }
    }

    addToDo(){
        this.state.myList.push(this.textInput.value)
        this.setState({
            myList:this.state.myList    
        })
        
    }

    addToDone(e){
        
        this.state.myList2.push(e.target.parentElement.textContent);
        this.setState({
            myList2:this.state.myList2
        })
    }

    renderMap(arr){
        return arr.map(x=><div  id="insideList" key ={`item${x}`}>{x}<span id="done" onClick={this.addToDone}></span></div>);
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
                <Bom doneList ={this.state.myList2} />
            </div>
        )
    }
}
class Bom extends React.Component{
    constructor(props){
        super(props);
    }
    renderMapDone(arr){
        return arr.map(x=><div id="insideListDone" key ={`item${x}`}>{x}</div>);
    }
    render(){
        return(
            <div id="doneList">
                {this.renderMapDone(this.props.doneList)} 
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);


