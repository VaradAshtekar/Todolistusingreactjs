import React from 'react';

const Inputval = (props) => {


    return (
     <>   
      <div className="todo">
        <li> {props.text} </li>
        <i className="fa fa-trash-o" aria-hidden="true" onClick={() => {
          props.onSelect(props.id);
        }}></i>

      </div>    
     </>
    );  


};

export default Inputval;