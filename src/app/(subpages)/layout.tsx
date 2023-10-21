interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative h-full pb-4">
            <div className="mx-auto max-w-xl px-4 pt-10">
                {children}
            </div>
        </div>
    );
}

export default Layout;
