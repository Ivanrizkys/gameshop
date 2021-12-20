import Sidebar from "@/components/organism/Sidebar";
import TransactionContent from "@/components/organism/TransactionContent";
import type { NextPage } from "next";

const Transaction: NextPage = () => {
    return (
        <>
            <section className="transactions overflow-auto">
                <Sidebar activeProps="transaction" />
                <TransactionContent />
            </section>
        </>
    )
}

export default Transaction;