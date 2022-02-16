import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

 function  RenderDish({dish}) {
            return(
                <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
    }
    
function   RenderComment({comments}){
        if (comments != null)
        {
            const commentListItem = comments.map((comments)=>
            {
                return(
                    <li key = {comments.id}>
                        <p>{comments.comment}</p>
                        <p>--{comments.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </li>
                );
            });
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyle'>
                        {commentListItem}
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

const DishDetail = (props) => {
        if(props.dish !=null){
             return (
                <div className="row">
                    <RenderDish dish = {props.dish}/>
                    <RenderComment comments = {props.dish.comments}/>
                </div>
             );
        }
        else {
             return (<div></div>)
        }
    }


export default DishDetail;