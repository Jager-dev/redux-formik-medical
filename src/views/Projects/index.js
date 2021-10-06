import React, {useEffect, useState} from 'react';
import './index.css'
import axios from "axios";
import Spinner from "../../components/Spinner";
import ModalWindow from "../../components/ModalWindow";
import ProjectsCard from "../../components/ProjectsCard";
import {getProjects} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";


const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cName, setClassName] = useState('jsGridView')

  const projects = useSelector(s => s.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, [])

  return (
    <>
      <div className="d-flex justify-content-between mt-3 mb-3">
        <h2>Проекты</h2>
        <button className="add_btn" onClick={() => setModalIsOpen(true)}>Добавить проект</button>
      </div>
      <div>
        <button onClick={() => setClassName('jsListView')}
                className='btn btn-sm btn-outline-primary me-3 mb-3 border-0' style={{fontSize: '35px'}}>
          <i className='bx bx-list-ul'/></button>

        <button onClick={() => setClassName('jsGridView')}
                className='btn btn-sm btn-outline-primary me-3 mb-3 border-0' style={{fontSize: '28px'}}>
          <i className='bx bxs-grid'/></button>
      </div>
      <div className={cName}>
        {
          projects.map((item) =>
            <ProjectsCard key={item.id} item={item} />
          )
        }
      </div>
      <ModalWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
    </>
  );
}

export default Projects;

