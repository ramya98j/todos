import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import TodoCreate from './streams/TodoCreate';
import TodoDelete from './streams/TodoDelete';
import TodoEdit from './streams/TodoEdit';
import TodoList from './streams/TodoList';
import Header from './Header';
import history from '../history';

const App = () => {
  return(
      <div className="ui container">
          
          <Router history={history}>
          <div>
          <Header/>
          <Switch>
              <Route path="/" exact component={TodoList}/>
              <Route path="/todos/new" exact component={TodoCreate}/>
              <Route path="/todos/edit/:id" exact component={TodoEdit}/>
              <Route path="/todos/delete/:id" exact component={TodoDelete}/>
              </Switch>
          </div>
          </Router>
        
      </div>
  );
};
export default App;