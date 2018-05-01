import React from 'react';

import classes from './Input.sass';

const input = (props) => {
  let inputElement = null;
  let inputId = !props.id ? props.name + '_' + Math.floor(Math.random() * 10000) : props.id;
  let inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = <input id={inputId}
                            className={inputClasses.join(' ')}
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} />;
      break;
    case ('select'):
      inputElement = <select id={inputId}
                             className={inputClasses.join(' ')}
                             value={props.value}
                             onChange={props.changed}>
                       {props.elementConfig.options.map(option => (
                          <option key={option.value}
                                  value={option.value}>
                            {option.displayValue}
                          </option>
                       ))}
                     </select>;
      break;
    case ('textarea'):
      inputElement = <textarea id={inputId}
                            className={inputClasses.join(' ')}
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} />;
      break;
    default:
      inputElement = <input id={inputId}
                            className={inputClasses.join(' ')}
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed} />;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={inputId}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default input;
