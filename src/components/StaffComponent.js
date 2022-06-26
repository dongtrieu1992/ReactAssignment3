import React,{Component} from "react";
import { Card, CardImg, CardTitle,Button, Input, Form } from "reactstrap";
import { Link } from "react-router-dom";


function RenderMenuItem({ dish }) {
  return (
    <div className="col-lg-2 col-md-6 m1">
      <Card style={{ margin: "10px 0 0 0 " }}>
        <Link to={`/staff/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardTitle style={{ textAlign: "center" }}>{dish.name}</CardTitle>
        </Link>
      </Card>
    </div>
  );
}

class Staff extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = {
      SearchVal:""
    }
  }

  handleSubmit(event) {
    const SVal = this.Search.value.toLowerCase();

    this.setState.SearchVal = SVal;
    event.preventDefault();
  }

  render() {
    const menu = this.props.Staff.map((staff) => {
      // if(this.state.SearchVal ==="") return staff;
      // else if (
      //   staff.name.toLowercase().includes()
      // )
      return <RenderMenuItem key={staff.id} dish={staff} />;
    });
    return (
      <div className="container" style={{ paddingTop: "10px" }}>
        <div className="row">
          <div className="col-6">
            <h2>Nhân Viên</h2>
          </div>
          <div className="col-6">
            <Form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-10">
                  <Input
                    type="text"
                    placeholder="Search"
                    innerRef={(input) => (this.Search = input)}
                  />
                </div>
                <div className="col-2 " style={{ paddingLeft: "0px" }}>
                  <Button type="submit" value="submit" color="primary">
                    Tìm
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <hr></hr>
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Staff;
