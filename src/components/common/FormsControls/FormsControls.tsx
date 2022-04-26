import React, {Component, PropsWithChildren, ReactPropTypes, TextareaHTMLAttributes} from 'react';
import styles from './FormsControls.module.css'

const FormControl: React.FC<any> = ({input, meta, children, ...props}) => {

    const hasError = meta.error && meta.touched
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                {children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {

    const {input, meta, children, ...restProps} = props;

    return <FormControl{...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<any> = (props) => {

    const {input, meta, children, ...restProps} = props;

    return <FormControl{...props}><input {...input} {...restProps}/></FormControl>
}