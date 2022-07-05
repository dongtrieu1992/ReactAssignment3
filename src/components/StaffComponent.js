import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  Input,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  Label,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staffs.jsx";
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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      SearchVal: " ",
      name: " ",
      doB: " ",
      salaryScale:1,
      startDate: "0",
      department: "Sale",
      annualLeave: 0,
      overTime: 0,
      salary:500000,
      image: "/assets/images/alberto.png",
      modal: false,
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
        annualLeave: false,
        overTime: false,
        salary: false,
      },
    };
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(name, doB, salaryScale, startDate, annualLeave, overTime, salary) {
    const error = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      annualLeave: "",
      overTime: "",
      salary: "",
    };

    if (this.state.touched.name && name.length < 3)
      error.name = "Yêu cầu nhiều hơn 2 ký tự";
    else if (this.state.touched.name && name.length > 30)
      error.name = "Yêu cầu ít hơn 30 ký tự";
    if (this.state.touched.doB && doB.length < 1) error.doB = "Yêu cầu nhập";
    if (this.state.touched.salaryScale && salaryScale.length < 1)
      error.salaryScale = "Yêu cầu nhập";
    if (this.state.touched.startDate && startDate.length < 1)
      error.startDate = "Yêu cầu nhập";
    if (this.state.touched.annualLeave && annualLeave.length < 1)
      error.annualLeave = "Yêu cầu nhập";
    if (this.state.touched.overTime && overTime.length < 1)
      error.overTime = "Yêu cầu nhập";
    if (this.state.touched.salary && salary.length < 1)
      error.salary = "Yêu cầu nhập";
    return error;
  }

  handleSubmit(event) {
    let id =0;
    switch (this.state.department ){
       case "HR": id=1; break;
       case "Marketing": id=2; break;
       case "IT": id=3; break;
       case "Finance": id=4; break;
       default: id=0;
    };
    const newStaff = {
      name:this.state.name,
      doB:this.state.doB,
      startDate:this.state.startDate,
      department:DEPARTMENTS[id],
      salaryScale:this.state.salaryScale,
      annualLeave:this.state.annualLeave,
      overTime:this.state.overTime,
      image:this.state.image
    };
    this.props.onAdd(newStaff);
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ SearchVal: this.input.value.toLowerCase() });
    this.input.value = "";
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const error = this.validate(
      this.state.name,
      this.state.doB,
      this.state.salaryScale,
      this.state.annualLeave,
      this.state.startDate,
      this.state.overTime,
      this.state.salary
    );
    const menu = this.props.Staff.filter((staff) => {
      if (this.state.SearchVal === " ") return staff;
      else if (staff.name.toLowerCase().includes(this.state.SearchVal))
        return staff;
      return 0;
    }).map((staff) => {
      return <RenderMenuItem key={staff.id} dish={staff} />;
    });

    return (
      <div className="container" style={{ paddingTop: "10px" }}>
        <div className="row">
          <div className="col-md-6 col-sm-12 row">
            <div className="col-10 col-sm-8 ">
              <h2>Nhân Viên</h2>
            </div>
            <div className="col-2 col-sm-4 align-middle">
              <Button color="secondary" size="md" onClick={this.toggle}>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                  <h5>Thêm Nhân Viên</h5>
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Label htmlFor="name" md={5}>
                        <h6>Tên</h6>
                      </Label>
                      <Col md={7}>
                        <Input
                          type="text"
                          name="name"
                          valid={error.name === ""}
                          invalid={error.name !== ""}
                          value={this.state.name}
                          onBlur={this.handleBlur("name")}
                          onChange={this.handleInputChange}
                        />
                        <FormFeedback>{error.name}</FormFeedback>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="doB" md={5}>
                        <h6>Ngày sinh</h6>
                      </Label>
                      <Col md={7}>
                        <Input
                          type="date"
                          name="doB"
                          valid={error.doB === ""}
                          invalid={error.doB !== ""}
                          value={this.state.doB}
                          onBlur={this.handleBlur("doB")}
                          onChange={this.handleInputChange}
                        />
                        <FormFeedback>{error.doB}</FormFeedback>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="startDate" md={5}>
                        <h6>Ngày vào công ty</h6>
                      </Label>
                      <Col md={7}>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          valid={error.startDate === ""}
                          invalid={error.startDate !== ""}
                          value={this.state.startDate}
                          onBlur={this.handleBlur("startDate")}
                          onChange={this.handleInputChange}
                        />
                        <FormFeedback>{error.startDate}</FormFeedback>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="department" md={5}>
                        <h6>Phòng ban</h6>
                      </Label>
                      <Col md={7}>
                        <Input
                          type="select"
                          name="department"
                          value={this.state.department}
                          onChange={this.handleInputChange}
                        >
                          <option>Sale</option>
                          <option>HR</option>
                          <option>Marketing</option>
                          <option>IT</option>
                          <option>Finance</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="salaryScale" md={5}>
                        <h6>Hệ số lương</h6>
                      </Label>
                      <Col md={7}>
                        <Input
                          type="number"
                          name="salaryScale"
                          valid={error.salaryScale === ""}
                          invalid={error.salaryScale !== ""}
                          value={this.state.salaryScale}
                          onBlur={this.handleBlur("salaryScale")}
                          onChange={this.handleInputChange}
                        />
                        <FormFeedback>{error.salaryScale}</FormFeedback>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="annualLeave" md={5}>
                        <h6>Số ngày nghỉ còn lại</h6>
                      </Label>
                      <Col md={7}>
                        <Input
                          type="number"
                          id="annualLeave"
                          name="annualLeave"
                          valid={error.annualLeave === ""}
                          invalid={error.annualLeave !== ""}
                          onBlur={this.handleBlur("annualLeave")}
                          value={this.state.annualLeave}
                          onChange={this.handleInputChange}
                        />
                        <FormFeedback>{error.annualLeave}</FormFeedback>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="overTime" md={5}>
                        <h6>Số ngày đã làm thêm</h6>
                      </Label>
                      <Col md={7}>
                        <Input
                          type="number"
                          id="overTime"
                          name="overTime"
                          valid={error.overTime === ""}
                          invalid={error.overTime !== ""}
                          onBlur={this.handleBlur("overTime")}
                          value={this.state.overTime}
                          onChange={this.handleInputChange}
                        />
                        <FormFeedback>{error.overTime}</FormFeedback>
                      </Col>
                    </FormGroup>
                    <br></br>
                    <FormGroup check row>
                      <Col sm={{ size: 10, offset: 1 }}>
                        <Button color="primary" type="submit" value="submit">
                          Thêm
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <Form onSubmit={this.handleSearch}>
              <div className="row">
                <div className="col-10">
                  <Input
                    name="Search"
                    type="text"
                    placeholder="Search"
                    innerRef={(input) => (this.input = input)}
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
