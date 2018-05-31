class App extends React.Component{
    constructor(props){
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.addToDone= this.addToDone.bind(this);
        this.getBackToToDoList = this.getBackToToDoList.bind(this);

        this.state={
            myTodoList:[],
            myDoneList:[],
        }
    }

    addToDo(e){
        this.state.myTodoList.push(this.textInput.value);//add the value to the list to do
        
        this.setState({
            myTodoList:this.state.myTodoList    
        })
        
    }
    
    addToDone(e){
        
        this.state.myDoneList.push(e.target.parentElement.textContent)//go to the parent of the span to get the text content ;
        window.Helper.deleteElement(e)//remove the element from the todo list
        this.setState({
            myDoneList:this.state.myDoneList
        })
    }

    renderMap(arr){
        return arr.map(x=><div  id="insideList" key ={`item${x}`}>{x}
        <span id="done" onClick={this.addToDone}></span>
        <span id="delete" onClick={window.Helper.deleteElement}></span>
        </div>);
    }
    getBackToToDoList(content){
        this.state.myTodoList.push(content.textContent);
        window.Helper.deleteElement;
        this.setState({
            myTodoList:this.state.myTodoList    
        })

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
                </div>
                <div id="list">
                    {this.renderMap(this.state.myTodoList)}
                    <Done handle ={this.getBackToToDoList} doneList ={this.state.myDoneList} /> 
                </div>    
            </div>
        )
    }
}
class Done extends React.Component{
    constructor(props){
        super(props);
        this.addToToDoList =this.addToToDoList.bind(this);
    }
    addToToDoList(e){
        this.props.handle(e.target.parentElement);
    }
    renderMapDone(arr){
        return arr.map(x=><div id="insideListDone" key ={`item${x}`}>{x}
        <span id="delete" onClick={window.Helper.deleteElement}></span>
        <span id="reDo" onClick={this.addToToDoList}></span>
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


