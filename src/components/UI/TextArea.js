import React from 'react';
import styles from './TextArea.module.css';

const TextArea =  (props) => {
    return (
        <textarea 
            className={`${props.className} ${styles.textarea}`}
            onChange={props.onChange}
            placeholder={props.placeholder}
            cols={props.colNumber}
            rows={props.rowNumber}
            resize='none'
            value={props.value}
            readOnly={props.readonly || false}
        />
    )
}

export default TextArea;