import React from "react";
import "./Services.css";
import { Row, Col } from "antd";
import { Card } from "antd";
import plan from "../../images/plan.jpg";
import discuss from "../../images/discuss.jpg";
import execute from "../../images/execute.jpg";
import { Fade } from "react-awesome-reveal";

const { Meta } = Card;

function Services() {
  return (
    <div className="component-block">
      <div className="container-wrapper">
        <Fade duration={1000}>
          <div className="title-container" id="services">
            <h1> Services</h1>
          </div>
          <Row gutter={[16, 16]} className="image-content">
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="example" src={plan} />}>
                <Meta title="Service 1" description="sample text" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="example" src={discuss} />}>
                <Meta title="Service 2" description="sample text" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
              <Card hoverable cover={<img alt="example" src={execute} />}>
                <Meta title="Service 3" description="sample text" />
              </Card>
            </Col>
          </Row>
        </Fade>
      </div>
    </div>
  );
}

export default Services;
