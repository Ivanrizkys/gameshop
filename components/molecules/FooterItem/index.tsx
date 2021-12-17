import Link from "next/link";
import React from "react";

interface FooterItemProps {
    children: React.ReactNode,
    href: string
}

const FooterItem = ({children, href = "/"}: FooterItemProps) => {
	return (
		<li className="mb-6">
            <Link href={href}>
                <a className="text-lg color-palette-1 text-decoration-none">
                    {children}
                </a>
            </Link>
		</li>
	);
};

export default FooterItem;
