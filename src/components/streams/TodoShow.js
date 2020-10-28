import React from 'react';
import {connect} from 'react-redux';
import {fetchTodo} from '../../actions';
import flv from 'flv.js';

class TodoShow extends React.Component{
    constructor(props){
        super(props);
        this.videoRef=React.createRef();
    }
    componentDidMount(){
        
        this.props.fetchTodo(this.props.match.params.id);
        this.buildPlayer();
       
    }
    componentDidUpdate(){
        this.buildPlayer();
    }
    componentWillUnmount(){
        this.player.destroy();
    }
    buildPlayer(){
        if(this.player || !this.props.stream){
            return;
        }
        const {id}=this.props.match.params;
        this.player= flv.createPlayer({
            type:'flv',
            url:'http://localhost:8000/live/${id}.flv'
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();


    }
    render(){
        if(!this.props.stream){
            return <div>Loading....</div>;
        }
    return(
        <div>
            <video ref={this.videoRef} style={{width:'100%'}} controls={true}/>
            <h1>{this.props.stream.title}</h1>
            <h4>{this.props.stream.title}</h4>
        </div>
    );
}
}
const mapStateToProps=(state,ownProps)=>{
 return {stream:state.todos[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchTodo})(TodoShow);



