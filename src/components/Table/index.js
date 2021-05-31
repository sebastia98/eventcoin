import React from 'react';
import './index.css';

const Table = ({ tableData, headingColums, title}) => {

    const data = tableData.map((row) => {
        let rowData = [];
        let i = 0;
        for (const key in row) {
            rowData.push({
                key: headingColums[i],
                val: row[key]
            });
            i++;
        }

        return <tr className = "table-row"> {rowData.map((data) => <td className = "table-data">{data.val}</td>)}</tr>

    });

    return (
        <div className="table-container">
            <div className = "table-title">
                <h2>{title}</h2>
            </div>
            <div className= "table">
                <thead className = "table-head">
                    <tr className = "table-row">
                        {headingColums.map((col) => (
                            <th>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className = "table-body">{data}</tbody>
            </div>

        </div>
    )
}

export default Table;