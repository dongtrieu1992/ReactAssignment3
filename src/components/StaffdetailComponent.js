import React from 'react';
import { CardImg, CardText,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from '../dateformat';

 function  RenderDish({dish}) {
            return(
                <card>
                    <CardImg style={{ margin: "0 0 10px 0 "}} src={dish.image} alt={dish.name} />
                </card>
            );
    }
    
function  RenderComments({dishDT}){
        if (dishDT != null)
        {
            return (
                <card>
                    <CardTitle>Họ và tên: {dishDT.name}</CardTitle>
                    <CardText>Ngày sinh: {dateFormat(dishDT.doB,"dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty: {dateFormat(dishDT.startDate,"dd/mm/yyyy")} </CardText>
                    <CardText>Phòng ban: {dishDT.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại: {dishDT.annualLeave}</CardText>
                    <CardText>Số ngày làm thêm: {dishDT.overTime}</CardText>
                </card>
            );
        }
        else
            return(
                <div></div>
            );
    }

const StaffDetail = (props) => {
        if(props.dish !=null){
            return (
                <div className="container" >
                    <div className="row">
                        <Breadcrumb  style={{background:"none"}}>
                            <BreadcrumbItem ><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>       
                    </div>
                    <div className="row" >
                        <div className="col-lg-3 col-md-5 col-12">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-lg-4 col-md-5 col-12">
                            <RenderComments dishDT={props.dish}/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
             return (<div></div>)
        }
    }


export default StaffDetail;