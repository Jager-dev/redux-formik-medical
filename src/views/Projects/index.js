import React, {useEffect, useState} from 'react';
import './index.css'
import {useForm} from "react-hook-form";
import axios from "axios";
import Spinner from "../../components/Spinner";
import ModalWindow from "../../components/ModalWindow";
import ProjectsCard from "../../components/ProjectsCard";


const Projects = () => {
  const [projects, setProjects] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const {reset} = useForm()
  const [img, setImg] = useState({})
  const [cName, setClassName] = useState('jsGridView')

  const onSend = (data) => {
    delete data.img
    delete data.file
    data.image = img.url
    axios.post("https://6115f1058f38520017a38640.mockapi.io/projects", data)
      .then(({data: project}) => {
        setProjects([...projects, project])
        setModalIsOpen(false)
        reset()
      })
  }

  useEffect(() => {
    axios("https://6115f1058f38520017a38640.mockapi.io/projects")
      .then(({data}) => {
        setProjects(data)
        setIsLoading(false)
      })
  }, [])

  const handleFile = (e) => {
    const formData = new FormData()
    formData.append("file", e.target.files[0])
    formData.append("upload_preset", "jager0123")
    axios.post("https://api.cloudinary.com/v1_1/ulan0123/image/upload", formData)
      .then(({data}) => setImg(data))
  }



  if (isLoading) {
    return (
      <Spinner/>
    )
  }

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
      <ModalWindow handleFile={handleFile} onSend={onSend} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
    </>
  );
}

export default Projects;

