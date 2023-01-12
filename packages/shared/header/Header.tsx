
interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => {
    return (
        <div className="flex items-center justify-center p-24 bg-black text-white">
            Header: {props.title}
        </div>
    )
}

export default Header;