import PageHeader from "../components/PageHeader";

export default function Customers() {
    return (
        <div id="customers-container">
            <PageHeader />
            <div className="p-5">
                <div className="bg-white rounded-xl shadow-md p-8 text-center text-gray-400">
                    <p className="text-lg font-medium">Halaman Customers</p>
                    <p className="text-sm mt-1">Konten halaman Customers akan ditampilkan di sini.</p>
                </div>
            </div>
        </div>
    );
}
