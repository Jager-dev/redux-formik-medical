import Modal from "react-modal";
import {Button, Col, Form, Row} from "react-bootstrap";
import  { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addProject} from "../../redux/actions";

const ModalWindow = ({setModalIsOpen, modalIsOpen}) => {
  const [img, setImg] = useState({})
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      title: '',
      supervisor: '',
      manager: '',
      start_date: '',
      end_date: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      manager: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      supervisor: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: data => {
      delete data.img
      delete data.file
      data.image = img.url
      dispatch(addProject(data))
    },
  });

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleFile = (e) => {
    const formData = new FormData()
    formData.append("file", e.target.files[0])
    formData.append("upload_preset", "jager0123")
    axios.post("https://api.cloudinary.com/v1_1/ulan0123/image/upload", formData)
      .then(({data}) => setImg(data))
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal} ariaHideApp={false}>
      <Form onSubmit={formik.handleSubmit} className="modal-window">
        <Row className="mb-3">
          <input type="file" onChange={handleFile}/>
          <button className={"btn-close"} onClick={() => setModalIsOpen(false)}>
          </button>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Название проекта</Form.Label>
            <Form.Control type="name"
                          placeholder="Enter title"
                          id="title"
                          name="title"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Row>
            <Form.Group as={Col} controlId="formGridSupervisor">
              <Form.Label>Руководитель</Form.Label>
              <Form.Control type="name"
                            placeholder="Enter name"
                            id="supervisor"
                            name="supervisor"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.supervisor}
              />
              {formik.touched.supervisor && formik.errors.supervisor ? (
                <div>{formik.errors.supervisor}</div>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridManager">
              <Form.Label>Менеджер</Form.Label>
              <Form.Control type="name"
                            placeholder="Enter name"
                            id="manager"
                            name="manager"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.manager}
              />
              {formik.touched.manager && formik.errors.manager ? (
                <div>{formik.errors.manager}</div>
              ) : null}
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridDateStart">
            <Form.Label>Дата начала</Form.Label>
            <Form.Control type="date"
                          placeholder="Enter name"
                          id="start_date"
                          name="start_date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.start_date}
            />
            {formik.touched.start_date && formik.errors.start_date ? (
              <div>{formik.errors.start_date}</div>
            ) : null}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDateEnd">
            <Form.Label>Дата окончания</Form.Label>
            <Form.Control type="date"
                          placeholder="Enter name"
                          id="end_date"
                          name="end_date"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.end_date}
            />
            {formik.touched.end_date && formik.errors.end_date ? (
              <div>{formik.errors.end_date}</div>
            ) : null}
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-end">
          <Button variant="success" style={{width: "100%"}} type="submit">Добавить</Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalWindow;