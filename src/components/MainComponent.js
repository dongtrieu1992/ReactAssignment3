import React,{Component} from 'react';
import Staff from './StaffComponent';
import StaffDetail from './StaffdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Section from './SectionComponent';
import Salary from './SalaryComponent';
import { Switch, Route } from 'react-router-dom';
// import {connect } from 'react-redux';
import {DEPARTMENTS,ROLE,STAFFS} from '../shared/staffs.jsx'


// const mapStateToProps = state =>{
//      return {
//       staffs: state.staffs,
//       role:state.role,
//       depart:state.depart
//      }
// }
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      role:ROLE,
      depart:DEPARTMENTS
    };
    this.addStaff = this.addStaff.bind(this);
  }
  
  addStaff =(staff) =>{
    const id=Math.floor(Math.random()*1000+1);
    const newStaff ={id,...staff}
    this.setState({
       staffs:[...this.state.staffs,newStaff]
    });
    console.log(newStaff);
    console.log(this.state.staffs);
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
              <Route exact path='/' component={() => <Staff onAdd={this.addStaff} Staff={this.state.staffs} />} />  
              <Route path='/staff/:dishId' component={DishWithId} />
              <Route path='/section' component={()=><Section section={this.state.depart}/>} />
              <Route path='/salary' component={()=><Salary salary={this.state.staffs}/>} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default 
// withRouter(connect(mapStateToProps)(
  Main;
  // ));