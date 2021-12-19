import LatestTransaction from "../LatestTransaction";
import Categories from "./Categories";

const OverviewContent = () => {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Categories icon="ic-dekstop" prize={18000500}>
                                Game <br /> Dekstop
                            </Categories>
                            <Categories icon="ic-mobile" prize={8455000}>
                                Game <br /> Mobile
                            </Categories>
                            <Categories icon="ic-other" prize={5000000}>
                                Other <br /> Categories
                            </Categories>
                        </div>
                    </div>
                </div>
                <LatestTransaction />
            </div>
        </main>
    )
}

export default OverviewContent;