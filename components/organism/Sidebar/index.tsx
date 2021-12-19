import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem icon="ic-menu-overview" active title="Overview" />
                    <MenuItem icon="ic-menu-transaction" title="Trancaction" />
                    <MenuItem icon="ic-menu-message" title="Messages" />
                    <MenuItem icon="ic-menu-card" title="Card" />
                    <MenuItem icon="ic-menu-reward" title="Rewards" />
                    <MenuItem icon="ic-menu-setting" title="Settings" />
                    <MenuItem icon="ic-menu-log-out" title="Log Out" />
                </div>
                <Footer />
            </div>
        </section>
    )
}

export default Sidebar;