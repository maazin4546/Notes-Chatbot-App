import Navbar from "./Navbar";

export default function Layout({ children }) {
    return <>
        <Navbar />
        <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
}