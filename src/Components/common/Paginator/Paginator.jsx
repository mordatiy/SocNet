import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize=10, ...props}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil( pagesCount / portionSize );
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = ( portionNumber - 1 ) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    //console.log(portionNumber)

    return (
        <div className={styles.paginator}>
            { portionNumber > 1 &&
            <button onClick={ () => { setPortionNumber(portionNumber - 1)}} className={styles.nextprev}>
                &lt;&lt; Prev
            </button>
            }
            {pages
                .filter( p => p>=leftPortionPageNumber && p<= rightPortionPageNumber )
                .map(p => {
                return <span
                    key={'pagi_' + p}
                    className={styles.pageNavi + ` ` + (currentPage === p ? styles.selectedPage : ``)}
                    onClick={ (e) => {onPageChanged(p) } }
                >
                                        {p}
                                </span>
            })}
            { portionCount > portionNumber  &&
                <button onClick={ () => { setPortionNumber(portionNumber + 1)}} className={styles.nextprev} >
                    Next &gt;&gt;
                </button>
            }
        </div>

    )

}

export default Paginator;