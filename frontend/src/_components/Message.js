import React from 'react'

const Message = (props) => {
    return (
            <div className={`alert alert-${props.type}`}>
                {props.message}
            </div>
    )
}

export default Message