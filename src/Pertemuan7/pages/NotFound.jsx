import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-8">
            <div className="text-8xl mb-6">🔍</div>
            <h1 className="text-7xl font-poppins font-extrabold text-gray-400 mb-2">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-500 mb-8">Halaman yang Anda cari tidak ditemukan.</p>
            <button
                onClick={() => navigate("/")}
                className="bg-hijau text-white px-8 py-3 rounded-xl font-semibold"
            >
                Kembali ke Dashboard
            </button>
        </div>
    );
}
