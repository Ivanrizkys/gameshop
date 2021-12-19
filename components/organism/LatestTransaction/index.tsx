import TableRow from "./TableRow";

const LatestTransaction = () => {
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <thead>
                        <tr className="color-palette-1">
                            <th className="text-start" scope="col">Game</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow image="overview-1" title="Mobile Legends" gameCategory="Mobile" price={250000} item={200} status="Pending"/>
                        <TableRow image="overview-2" title="Call of Dutty: Modern Warfare" gameCategory="Dekstop" price={740000} item={550} status="Success"/>
                        <TableRow image="overview-3" title="Clash of Clans" gameCategory="Mobile" price={120000} item={100} status="Failed"/>
                        <TableRow image="overview-4" title="The Royal Game" gameCategory="Mobile" price={200000} item={225} status="Pending"/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LatestTransaction;