interface ButtonStatusProps {
    title: string;
    active?: boolean;
}
const ButtonStatus = ({title, active}: ButtonStatusProps) => {
    return (
        <a data-filter="*" href="#" className={`btn btn-status rounded-pill text-sm${active ? " btn-active" : ""} me-3`}>{title}</a>
    )
}

export default ButtonStatus;