import React from 'react'

const Language = ({name , image}) => {


    return (
        <>
            <li>
                <a className="dropdown-item d-flex align-items-center py-2" >
                    <img src={image} width="20" alt=""/><span className="ms-2">{name}</span></a>
            </li>
        </>
    )
}

export default Language