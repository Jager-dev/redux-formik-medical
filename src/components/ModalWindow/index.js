import Modal from "react-modal";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

const ModalWindow = ({handleFile, onSend, setModalIsOpen, modalIsOpen}) => {
  const {register, handleSubmit, formState: {errors}} = useForm();


  const closeModal = () => {
    setModalIsOpen(false)
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
      <Form onSubmit={handleSubmit(onSend)} className="modal-window">
        <Row className="mb-3">
          <input type="file" {...register("file", {required: true})} onChange={handleFile}/>
          <button className={"btn-close"} onClick={() => setModalIsOpen(false)}>
          </button>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Название проекта</Form.Label>
            <Form.Control type="name" placeholder="Enter title"
                          autoComplete={"off"}
                          {...register("title", {required: true, minLength: 2})}
            />
            {errors.title && <span className={"error"}>*You forgot to enter the title!</span>}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Row>
            <Form.Group as={Col} controlId="formGridSupervisor">
              <Form.Label>Руководитель</Form.Label>
              <Form.Control type="name" placeholder="Enter name"
                            autoComplete={"off"}
                            {...register("supervisor", {required: true})}
              />
              {errors.supervisor && <span className={"error"}>*You forgot to enter supervisors name!</span>}
            </Form.Group>
            <Form.Group as={Col} controlId="formGridManager">
              <Form.Label>Менеджер</Form.Label>
              <Form.Control type="name" placeholder="Enter name"
                            autoComplete={"off"}
                            {...register("manager", {required: true})}
              />
              {errors.manager && <span className={"error"}>*You forgot to enter name!</span>}
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridDateStart">
            <Form.Label>Дата начала</Form.Label>
            <Form.Control type="date"
                          autoComplete={"off"}
                          {...register("start_date", {required: true})}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDateEnd">
            <Form.Label>Дата окончания</Form.Label>
            <Form.Control type="date"
                          autoComplete={"off"}
                          {...register("end_date", {required: true})}
            />
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