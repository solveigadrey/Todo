class App extends React.Component{
    constructor(props){
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.addToDone= this.addToDone.bind(this);
        this.getBackToToDoList = this.getBackToToDoList.bind(this);
        // this.addToStar = this.addToStar.bind(this);

        this.state={
            myTodoList:[],
            myDoneList:[],
        }
    }
    addToDo(){
        this.state.myTodoList.push(this.textInput.value);//add the value to the list to do
        this.setState({
            myTodoList:this.state.myTodoList    
        })   
        
    }
    
    addToDone(e){
        this.state.myDoneList.push(e.target.parentElement.parentElement.textContent)//go to the parent of the parent of the span to get the text content ;
        window.Helper.deleteElement(e)
        this.setState({
            myDoneList:this.state.myDoneList
        })
     }

    // addToStar(content){   
    //     var index =this.state.myTodoList.indexOf(content.target.parentElement.parentElement.textContent);
    //     this.state.myTodoList.unshift(index);
    //     window.Helper.deleteElement(content)
    //     this.setState({
    //         myTodoList:this.state.myTodoList
    //     })
    // }

    renderMap(arr){
        return arr.map(x=><div id="insideToDoList" key ={`item${x}`}>{x}
        <span id ="icon">
            <span id="done" onClick={this.addToDone}></span>
            <span id="delete" onClick={window.Helper.deleteElement}></span>
            {/* <span id="star" onClick={this.addToStar}></span> */}
        </span>
        </div>);
    }

    getBackToToDoList(content){
        this.state.myTodoList.push(content.textContent);

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
                <div id="lists">
                    <div id="toDoList">
                    <h2>ToDo List</h2>
                        {this.renderMap(this.state.myTodoList)}
                    </div>
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
    addToToDoList(content){
        window.Helper.deleteElement(content)
        this.props.handle(content.target.parentElement.parentElement);
        
        
    }
    renderMapDone(arr){
        return arr.map(x=><div id="insideListDone" key ={`item${x}`}>{x}
        <span id ="icon">
            <span id="delete" onClick={window.Helper.deleteElement}></span>
            <span id="reDo" onClick={this.addToToDoList}></span>  
        </span>
        </div>);
    }
    render(){
        return(
            <div id="doneList">
                <h2>Done</h2>
                {this.renderMapDone(this.props.doneList)} 
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);


