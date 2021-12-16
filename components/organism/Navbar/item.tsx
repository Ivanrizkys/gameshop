import Link from "next/link";

interface PropsItem {
    title: string,
    active?: boolean,
    href: string
}

const Item = ({title, active, href = "/" }: Partial<PropsItem>) => {
	return (
		<li className="nav-item my-auto">
            <Link href={href}>
                <a className={`nav-link${active ? " active" : ""}`} aria-current="page">
                    {title}
                </a>
            </Link>
		</li>
	);
};
export default Item;
