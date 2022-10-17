import React, {useState} from "react";
import styles from "./Paginator.module.css"


export type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize: number
}

const Paginator = ({totalItemsCount, pageSize, currentPage = 1, onPageChanged, portionSize = 10,...props}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize


    return (
        <div className={styles.paginator}>{
            portionNumber > 1 &&
            <button onClick={() => setPortionNumber(--portionNumber)}>previous</button>
        }
            {
                pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => <span key={p}
                    className={ `${currentPage === p ? styles.selectedPage : ""} + ${styles.pageNumber}`}
                    onClick={() => onPageChanged(p)}
                > {p}</span>)
            }
            {
                portionNumber < portionCount &&
                <button onClick={() => setPortionNumber(++portionNumber)}>next</button>
            }

        </div>

    )
}

export default Paginator;