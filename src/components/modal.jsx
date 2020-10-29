import React from "react";

const modal = {
  width: '500px'
}

export default (props) => {
  const {data} = props;
  console.log('no way', data)
  
  return (
      <div className={modal}>
        <div>{data.title}</div>
        <div>{data.rated}</div>
        <div></div>
        <div></div>
        <div></div>

      </div>
  ) 
}