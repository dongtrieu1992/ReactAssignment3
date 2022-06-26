import React from 'react';
import { Card, CardText, CardBody,
  CardTitle} from 'reactstrap';

function RenderMenuItem({dish}){
      return(
                <Card style ={{margin:"10px 0"}} >
                    <CardTitle style ={{fontSize:"30px"}}>{dish.name}</CardTitle>
                    <CardBody>
                        <CardText>Số lượng nhân viên : {dish.numberOfStaff}</CardText>
                    </CardBody>
                </Card>
            );
      }
const Section = (props) => {
              const menu = props.section.map((section) => {
                return (
                  <div  className="col-lg-4 col-md-6 m1">
                         <RenderMenuItem dish={section}/>
                  </div>
                );
            });

            return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );

}  


export default Section;