import React from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from '../../actions';
import {Link} from 'react-router-dom';



class TodoList extends React.Component{
    componentDidMount(){
        this.props.fetchTodos();
    }
    renderAdmin(todo){
        if(todo.userId===this.props.currentUserId){
            return (<div className="right floated content">
                   <Link to={`/todos/edit/${todo.id}`} className="ui  button primary ">Edit</Link>
                   <Link to={`/todos/delete/${todo.id}`} className="ui button negitive">Delete</Link>
            </div>);
        }

    }

    renderList(){
        return this.props.todo.map(todo=>{
            return (
                <div className="item" key={todo.id}>
                    {this.renderAdmin(todo)}
                    <i class="hand point right big icon"/>
                    <div className="content">
                        
                            {todo.title}
                        
                     
                    </div>
                
                   
                </div>
            );
        })
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign:'right'}}>
                    <Link to="/todos/new" className="ui button primary">
                        Add Todo
                    </Link>
                </div>
            );
        }


    }
   render()
   {
    
    return(
       
        <div>
            <h2>What are today's plans</h2>
            <div className="ui celled list">
            {this.renderList()}
            {this.renderCreate()}
            </div>
        </div>
    );
   }
}
const mapStateToProps=(state)=>{
   return {todo: Object.values(state.todos),
          currentUserId: state.auth.userId,
          isSignedIn:state.auth.isSignedIn
};
};
export default connect(mapStateToProps,{fetchTodos})(TodoList);