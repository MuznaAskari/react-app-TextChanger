import React from 'react'

export default function Alert(props) {
    const capitilize = (word) => {
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         {capitilize(props.alert.type)} : {props.alert.msg}
      </div>
    </div>}
    </div>
  )
}
