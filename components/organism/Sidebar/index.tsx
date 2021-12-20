import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
    activeProps: "overview" | "transaction" | "message"| "card" | "rewards" | "setting" | "log-out";
}

const Sidebar = ({activeProps}: SidebarProps) => {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem icon="ic-menu-overview" active={activeProps === "overview"} title="Overview" href="/member"/>
                    <MenuItem icon="ic-menu-transaction" title="Trancaction" href="/member/transaction" active={activeProps === 'transaction'} />
                    <MenuItem icon="ic-menu-message" title="Messages" href="/member" />
                    <MenuItem icon="ic-menu-card" title="Card" href="/member" />
                    <MenuItem icon="ic-menu-reward" title="Rewards" href="/member" />
                    <MenuItem icon="ic-menu-setting" title="Settings" href="/member/edit-profile" active={activeProps === "setting"} />
                    <MenuItem icon="ic-menu-log-out" title="Log Out" href="/member" />
                </div>
                <Footer />
            </div>
        </section>
    )
}

export default Sidebar;