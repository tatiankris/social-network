import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./CommonButton.module.scss"
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type CommonButtonPropsType = DefaultButtonPropsType & {
    onClick?: () => void,
    onBlur?: () => void,
    className?: string,
    text?: string,
}

const CommonButton = ({onClick, onBlur, className, text, ...restProps}: CommonButtonPropsType) => {

    const onClickCallback = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(e)// если есть пропс onClick
         // то передать ему е (поскольку onClick не обязателен)
    }

    const superClassName = `${className} ${s.commonButton}`


    return (
        <button onClick={onClickCallback} onBlur={onBlur} className={superClassName}>{text}</button>
    )
}

export default CommonButton;