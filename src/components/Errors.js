import React from 'react';
import ErrorContext from '../contexts/ErrorContext';

const Errors = () => {
    return (
        <ErrorContext.Consumer>
            {(errors) => {
               if (errors.length) {
                   return (
                   <div id='error-container'>
                       <ul>
                           {errors.map((error, i) => {
                               return (
                               <li key={`error-${i + 1}`}>{error}</li>
                               );
                           })}
                       </ul>
                   </div>
                   );
               } else {
                   return (
                   <div id='error-container' className='hidden'>
                   </div>
                   );
               }
            }}
        </ErrorContext.Consumer>
    )
}

export default Errors;