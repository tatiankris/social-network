import React from "react";
import styles from "../../Users/Users.module.css";


export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {
                pages.map(p => <span
                    className={currentPage === p ? styles.selectedPage : ""}
                    onClick={() => onPageChanged(p)}
                > {p}</span>)
            }
        </div>

    )
}

export default Paginator;