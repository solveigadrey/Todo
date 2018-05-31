class App extends React.Component{
    constructor(props){
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.addToDone= this.addToDone.bind(this)
        this.state={
            myTodoList:[],
            myDoneList:[]
        }
    }

    addToDo(){
        this.state.myTodoList.push(this.textInput.value)
        this.setState({
            myTodoList:this.state.myTodoList    
        })
        
    }

    addToDone(e){
        
        this.state.myDoneList.push(e.target.parentElement.textContent)//go to the parent of the span to get the text content ;
        this.setState({
            myDoneList:this.state.myDoneList
        })
    }

    renderMap(arr){
        return arr.map(x=><div  id="insideList" key ={`item${x}`}>{x}
        <span id="done" onClick={this.addToDone}></span>
        <span id="delete" onClick={this.deleteElement}></span>
        </div>);
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
                        {this.renderMap(this.state.myTodoList)}    
                    </div>
                </div>
                <Bom doneList ={this.state.myDoneList} />
            </div>
        )
    }
}
class Bom extends React.Component{
    constructor(props){
        super(props);
    }
    renderMapDone(arr){
        return arr.map(x=><div id="insideListDone" key ={`item${x}`}>{x}
        <span id="delete" onClick={this.deleteElement}></span>
        <span id="reDo" onClick={this.addToDone}></span>
        </div>);
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


