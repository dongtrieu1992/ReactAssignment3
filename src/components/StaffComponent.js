import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderMenuItem({dish}){
      return(
                <Card style ={{margin:'10px 0 0 0 '}}>
                    <Link to ={`/staff/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardTitle style ={{textAlign:'center'}}>{dish.name}</CardTitle>
                    </Link>
                </Card>
            );
      }
const Staff = (props) => {
              const menu = props.Staff.map((staff) => {
                return (
                  <div  className="col-lg-2 col-md-6 m1">
                         <RenderMenuItem dish={staff}/>
                  </div>
                );
            });

            return (
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                                <h2>Nhân Viên</h2>
                                <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );

}  


export default Staff;