import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'

function RenderMenuItem({dish}){
            function toCommas(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };
            const salaryCal = (a,b) =>{
                let x= a*3000000+b*(200000/8);
                return x.toFixed(0);
            };
      return(
                <Card style ={{margin:"10px 0 0 0"}} >
                    <CardTitle>{dish.name}</CardTitle>
                      <CardBody>
                        <CardText>Mã nhân viên :    {dish.id}</CardText>
                        <CardText>Hệ số lương  :    {dish.salaryScale}</CardText>
                        <CardText>Số giờ làm thêm : {dish.overTime}</CardText>
                        <CardBody style={{background:"LightGray", width:"60%"}}>
                            <CardText><b>Lương :</b> {toCommas(salaryCal(dish.salaryScale,dish.overTime))}</CardText>
                        </CardBody>
                     </CardBody>
                </Card>
            );
      }
const Salary = (props) => {
              const menu = props.salary.map((section) => {
                return (
                  <div  className="col-lg-4 col-md-6 m1">
                         <RenderMenuItem dish={section}/>
                  </div>
                );
            });

            return (
                <div className="container">
                     <div className="row">
                        <Breadcrumb  style={{background:"none"}}>
                            <BreadcrumbItem ><Link to="/">Nhân viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                        </Breadcrumb>       
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );

}  


export default Salary;