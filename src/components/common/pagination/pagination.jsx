
import { useState } from "react";
import style from "./pagination.module.css";

const Pagination = ({ totalCount, pageSize, currentPage, pageChange, porsionSize = 10}) => {

    let allPages = Math.ceil(totalCount / pageSize);
    let array = [];
    for (let index = 1; index <= allPages; index++) {
        array.push(index);
    }

    let porsionCount = Math.ceil(allPages / porsionSize);
    let [porsionNumber, setPorsionNumber] = useState(1);
    let leftBorder = ((porsionNumber - 1) * porsionSize)+1;
    let rightBorder = porsionSize * porsionNumber;

    return (
        <div>
            {
                porsionNumber > 1 
                && <button onClick={() => {setPorsionNumber(porsionNumber - 1)}}>Prev</button>
            }
            {array
            .filter(page => page >= leftBorder && page <= rightBorder)
            .map(page => {
                return (
                    <span className={currentPage === page ? style.current : style.page} onClick={() => pageChange(page)}>
                        {page} &nbsp;
                    </span>
                );
            })}
            {
                porsionCount > porsionNumber
                && <button onClick={()=> {setPorsionNumber(porsionNumber + 1)}}>Next</button>
            }
        </div>

    );
}


export default Pagination;

