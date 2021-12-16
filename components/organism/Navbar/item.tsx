import Link from "next/link";

interface PropsItem {
    title: string,
    active?: boolean,
    link: string
}

const Item = ({title, active, link }: Partial<PropsItem>) => {
	return (
		<li className="nav-item my-auto">
            <Link href={link? link : "/"}>
                <a className={`nav-link ${active && "active"}`} aria-current="page">
                    {title}
                </a>
            </Link>
		</li>
	);
};
export default Item;
