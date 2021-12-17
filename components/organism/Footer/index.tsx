import Link from "next/link";
import Image from "next/image";
import FooterItem from "@/components/molecules/FooterItem";

const Footer = () => {
    return (
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 text-lg-start text-center">
                            <Link href="/">
                                <a className="mb-30">
                                    <Image src="/icon/logo.svg" width={60} height={60} alt="Logo Footer"/>
                                </a>
                            </Link>
                            <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br/> untuk menjadi
                                pemenang sejati</p>
                            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                                    <ul className="list-unstyled">
                                        <FooterItem href="/">About Us</FooterItem>
                                        <FooterItem href="/">Press Release</FooterItem>
                                        <FooterItem href="/">Terms of Use</FooterItem>
                                        <FooterItem href="/">Privacy & Policy</FooterItem>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                                    <ul className="list-unstyled">
                                        <FooterItem href="/">Refund Policy</FooterItem>
                                        <FooterItem href="/">Unlock Rewards</FooterItem>
                                        <FooterItem href="/">Live Chatting</FooterItem>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                                    <ul className="list-unstyled">
                                        <FooterItem href="mailto: hi@store.gg">hi@store.gg</FooterItem>
                                        <FooterItem href="mailto: team@store.gg">team@store.gg</FooterItem>
                                        <FooterItem href="http://maps.google.com/?q=Pasific 12,Jakarta Selatan">Pasific 12,Jakarta Selatan </FooterItem>
                                        <FooterItem href="el: 02111229090">021 - 1122 -9090</FooterItem>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer;