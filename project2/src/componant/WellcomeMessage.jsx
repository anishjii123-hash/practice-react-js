import React from 'react'

const WellcomeMessage = ({OnGetPostFromServer}) => {
  return (
    <div>
        <center className="m-20" ><h1>There are no posts ! ...</h1>
        <button type="button" className="btn btn-primary" onClick={OnGetPostFromServer}> Get Post from Server</button> </center>
    </div>
  )
}

export default WellcomeMessage
