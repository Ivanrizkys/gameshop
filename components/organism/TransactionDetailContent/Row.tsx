interface RowProps {
    title: string;
    value: string | number;
    className?: string;
}

const Row = ({title, value, className}: RowProps) => {
	return (
		<p className="text-lg color-palette-1 mb-20">
			{title} <span className={`purchase-details ${className ? className : ""}`}>{value}</span>
		</p>
	);
};

export default Row;
