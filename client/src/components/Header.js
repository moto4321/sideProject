import React from 'react';
import { Col, Row } from 'reactstrap';

const Header = () => {
  return (
    <div id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>Side Project & Blog</h1>
          <p>우석이의 사이드 프로젝트 작업블로그 입니다.</p>
        </Col>
      </Row>
    </div>
  )
}

export default Header;

// 확인