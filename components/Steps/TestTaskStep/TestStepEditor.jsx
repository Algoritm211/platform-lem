import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Button, Col, Container, Modal, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

const TestStepEditor = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h3 className="editor-lesson-title mt-5 mb-3">Write your question down below</h3>
      <Editor
        apiKey={'j2rcg8qaqco0x9y81b1jn5dc0ze3phyfbapmnra5q59deqml'}
        // initialValue={currentStep.body}
        init={{
          // height: 500,
          width: '100%',
          min_height: 300,
          borderRadius: '8px',
          selector: 'textarea',
          plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            `undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help`,
        }}
        // onEditorChange={(content) => setTextContent(content)}
      />
      <h3 className="editor-lesson-title mt-5 mb-3">Write possible answers</h3>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} style={{ borderRadius: '8px' }}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Single answer
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Multiple answers
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="form-check d-flex profile-courses-one my-3 align-items-center">
        <input className="checkbox-editor mx-3" type="checkbox" value="" id="flexCheckDefault"/>
        <input
          className={'input-checkbox-editor'}
          // value={formik.values.title}
          // onChange={formik.handleChange}
          type="variant"
          placeholder="Variant"
          name="variant"
          id="variant"/>
        <div style={{ margin: 'auto 20px' }}>
          <a style={{ textDecoration: 'none' }}>
            <button className="lesson-delete-btn d-flex" onClick={() => setShow(true)}>
              <i className="fas fa-trash-alt"/>
            </button>
          </a>
        </div>
      </div>
      <div className="form-check d-flex profile-courses-one my-3 align-items-center">
        <input className="checkbox-editor mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <input
          className={'input-checkbox-editor'}
          // value={formik.values.title}
          // onChange={formik.handleChange}
          type="variant"
          placeholder="Variant"
          name="variant"
          id="variant"/>
        <div style={{ margin: 'auto 20px' }}>
          <a style={{ textDecoration: 'none' }}>
            <button className="lesson-delete-btn d-flex" onClick={() => setShow(true)}>
              <i className="fas fa-trash-alt"/>
            </button>
          </a>
        </div>
      </div>
      <Button variant="primary" style={{ borderRadius: '8px', width: '70px' }}>
        <i className="fas fa-plus"/>
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body closeButton>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <img className="content-image" src="/bucket.png" alt="photo"/>
              </Col>
              <Col xs={12} md={6} className="d-flex" style={{ alignItems: 'center' }}>
                <div className="m-auto">
                  <h3 className="profile-welcome-title d-block">Are you sure?</h3>
                  <span className="modal-task-subtitle d-block">Do you want to permanently delete everything now?</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" style={{ borderRadius: '8px' }}>Yes, delete</Button>
          <Button onClick={() => setShow(false)} className="btn-primary" style={{ borderRadius: '8px' }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TestStepEditor
