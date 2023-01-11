
interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => {
    return (
        <div>Header: {props.title}</div>
    )
}

export default Header;