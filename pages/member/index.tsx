import type { NextPage } from "next";
import Sidebar from "@/components/organism/Sidebar";
import OverviewContent from "@/components/organism/OverviewContent";

const Member: NextPage = () => {
    return (
        <>
            <section className="overview overflow-auto">
                <Sidebar />
                <OverviewContent />
            </section>
        </>
    )
}

export default Member;