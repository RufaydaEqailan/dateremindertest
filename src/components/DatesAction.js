import React from 'react'
import { Row, Col } from 'react-bootstrap'
const DatesAction = ({ deleteData, vieweData }) => {
  return (
    <Row className="justify-content-center my-2 ">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={deleteData} className="btn-style p-2">مسح الكل</button>
        <button onClick={vieweData} className="btn-style p-2">عرض البيانات</button>
      </Col>
    </Row>
  )
}

export default DatesAction
