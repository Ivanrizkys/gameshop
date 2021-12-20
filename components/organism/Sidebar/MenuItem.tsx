import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
    icon: "ic-menu-card" | "ic-menu-log-out" | "ic-menu-message" | "ic-menu-overview" | "ic-menu-reward" | "ic-menu-setting" | "ic-menu-transaction",
    title: string,
    active?: boolean
    href: string
}

const MenuItem = ({icon, title, active, href = "/"}: Partial<MenuItemProps>) => {
    return (
        <div className={`item${active ? " active" : ""} mb-30`}>
            <div className="me-3">
                <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={icon} />
            </div>
            <p className="item-title m-0">
                <Link href={href}>
                    <a className="text-lg text-decoration-none">{title}</a>
                </Link>
            </p>
        </div>
    )
}

export default MenuItem;