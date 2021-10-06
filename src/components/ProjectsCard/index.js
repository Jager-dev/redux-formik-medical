import React from 'react';

const ProjectsCard = ({item}) => {
  return (
    <div className='border' key={item.id}>
      <div className='project-img-case'>
        <img className='project-img w-100' src={item.image} alt=""/>
      </div>
      <div className='p-3'>
        <h4 className='mb-3'>{item.title}</h4>
        <p className='project-desc text-secondary'><i className='bx bxs-user me-2' style={{fontSize: '20px'}}/>{item.supervisor}</p>
        <p className='project-desc text-secondary'><i className='bx bx-ruble me-2' style={{fontSize: '20px'}}/>{item.manager}</p>
        <p className='project-desc text-secondary'><i className='bx bxs-calendar me-2' style={{fontSize: '20px'}}/>{item.start_date}</p>
        <p className='project-desc text-secondary'><i className='bx bxs-calendar me-2' style={{fontSize: '20px'}}/>{item.end_date}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;