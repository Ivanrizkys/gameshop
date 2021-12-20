import TransactionDetailContent from "@/components/organism/TransactionDetailContent";
import type { NextPage } from "next";

const TransactionDetail: NextPage = () => {
    return (
        <>
            <section className="transactions-detail overflow-auto">
                <TransactionDetailContent />
            </section>
        </>
    )
}

export default TransactionDetail;