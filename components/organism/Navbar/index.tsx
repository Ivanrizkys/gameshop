import Image from "next/image";
// import Item from "./Item";
import Auth from "./Auth";
import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <section>
          <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
              <div className="container-fluid">
                  <Image src="/icon/logo.svg" width={60} height={60}/>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                          <NavItem title="Home" active href="/"/>
                          <NavItem title="Games" href="/"/>
                          <NavItem title="Rewards" href="/"/>
                          <NavItem title="Discover" href="/"/>
                          <NavItem title="Global Rank" href="/"/>
                          <Auth isLogin/>
                      </ul>
                  </div>
              </div>
          </nav>
        </section>
    )
}

export default Navbar;