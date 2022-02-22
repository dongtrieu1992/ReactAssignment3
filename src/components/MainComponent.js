import React, { Component } from 'react';
import Staff from './StaffComponent';
import StaffDetail from './StaffdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DEPARTMENTS,ROLE,STAFFS} from '../shared/staffs.jsx'
import { Switch, Route } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        staffs: STAFFS,
        role:ROLE,
        depart:DEPARTMENTS
    };
  }

  render() {
    
    const DishWithId = ({match}) => {
      return(
          <StaffDetail dish={this.state.staffs.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          />
      );
    };
    return (
      <div>
        <Header/>
        <Switch>
              <Route exact path='/' component={() => <Staff Staff={this.state.staffs} />} />  
              <Route path='/staff/:dishId' component={DishWithId} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;