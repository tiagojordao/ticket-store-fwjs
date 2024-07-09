export default function Footer() {
    const date = new Date();

    return(
        <div className="footer w-full bg-rose-700 py-5 flex justify-center">
            © TICKET ONLINE - {date.getFullYear()}.
        </div>
    );
}