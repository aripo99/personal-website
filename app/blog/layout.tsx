import TopNavBar from "./components/TopNavBar"
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="justify-center items-center flex">
                <TopNavBar />
            </div>
            {children}
        </div>
    )
}