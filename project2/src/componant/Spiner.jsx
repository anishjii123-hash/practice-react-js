import React from 'react'

const Spiner = () => {
  return (
    <div>
   <div className=" screen-full m-70 text-center">
  <div className="spinner-border " role="status"style={{ width: "8rem", height: "8rem"}} >
    <span className="visually-hidden ">Loading...</span>
  </div>
</div>
    </div>
  )
}

export default Spiner
