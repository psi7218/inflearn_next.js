import React from 'react'

const page = (props) => {
  // console.log(props);
  
  return (
    <div>playlist {props.searchParams.list}</div>
  )
}

export default page