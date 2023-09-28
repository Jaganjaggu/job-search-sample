import React from 'react'
import './JobList.css'

function JobList({ jobs }) {
    return (
        <>
            <div className='card-section'>
                {jobs.map((job) => (

                   <div className='card-content'>
                        <div className='card'>
                            <div className='job-titles'>{job.title}</div>
                            <div className='job-company'>{job.company}</div>
                            <div className='job-location'>{job.location}</div>
                            <div className='job-description'>{job.description}</div>
                        </div>
                   </div>

                ))}
            </div>
        </>
    )
}

export default JobList