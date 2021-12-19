interface TableRowProps {
    title: string;
    gameCategory: string,
    item: number;
    price: number;
    status: "Pending" | "Success" | "Failed";
    image: string;
}

interface SetStatusType {
    "Pending": string;
    "Success": string,
    "Failed": string
}

const TableRow = ({image, title, gameCategory, item, price, status}: TableRowProps) => {
    const setStatus: SetStatusType = {
        "Pending" : "pending",
        "Success": "success",
        "Failed": "failed"
    }
    return (
        <tr className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`}
                    width="80" height="60" alt=""/>
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{gameCategory}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
            </td>
            <td>
                <div>
                    <span className={`float-start icon-status ${setStatus[status]}`}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}</p>
                </div>
            </td>
        </tr>
    )
}

export default TableRow;