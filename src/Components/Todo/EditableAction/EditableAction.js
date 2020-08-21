import React from 'react'

const editableAction = (props) => {
    return(
        <p
          contentEditable={true}
          onBlur={props.blur}
          suppressContentEditableWarning={true}
          
        >{props.text}</p>
    )
}


export default editableAction; 