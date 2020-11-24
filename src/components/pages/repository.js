/* eslint-disable no-unused-vars */
import React, {component} from 'react';

function Repository1() {
    function onSubmit() {
       
        alert('Repository under construction!!');
    
        
      }
  return (
    <div className="faq1">
       <button className="button"  onClick={onSubmit}><img src={process.env.PUBLIC_URL+'repository.png'} alt='repository' style={{height:'15em'}}/>
       </button>
    </div>
  );
}

export default Repository1;
