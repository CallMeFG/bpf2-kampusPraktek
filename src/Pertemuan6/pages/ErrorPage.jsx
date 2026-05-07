import { useNavigate } from "react-router-dom";

// Konfigurasi default per kode error
const errorConfig = {
    400: {
        title: "Bad Request",
        description: "Permintaan yang Anda kirim tidak dapat dipahami oleh server. Periksa kembali data yang Anda masukkan.",
        color: "text-yellow-500",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        emoji: "⚠️",
    },
    401: {
        title: "Unauthorized",
        description: "Anda tidak memiliki izin untuk mengakses halaman ini. Silakan login terlebih dahulu.",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        emoji: "🔒",
    },
    403: {
        title: "Forbidden",
        description: "Akses ke halaman ini dilarang. Anda tidak memiliki hak akses yang diperlukan.",
        color: "text-red-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        emoji: "🚫",
    },
    404: {
        title: "Page Not Found",
        description: "Halaman yang Anda cari tidak ditemukan. Mungkin sudah dipindahkan atau dihapus.",
        color: "text-gray-500",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        emoji: "🔍",
    },
};

/**
 * ErrorPage - komponen reusable untuk menampilkan halaman error
 *
 * Props:
 * @param {number} code       - Kode error (400 | 401 | 403 | 404)
 * @param {string} description - Deskripsi custom (opsional, akan override default)
 * @param {string} image      - URL gambar custom (opsional, akan mengganti emoji)
 */
export default function ErrorPage({ code = 404, description, image }) {
    const navigate = useNavigate();
    const config = errorConfig[code] || errorConfig[404];

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-8">
            <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl p-12 max-w-lg w-full text-center shadow-md`}>

                {image ? (
                    <img src={image} alt={`Error ${code}`} className="w-40 h-40 mx-auto mb-6 object-contain" />
                ) : (
                    <div className="text-8xl mb-6">{config.emoji}</div>
                )}

                <h1 className={`text-7xl font-poppins font-extrabold ${config.color} mb-2`}>
                    {code}
                </h1>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {config.title}
                </h2>

                <p className="text-gray-500 mb-8 leading-relaxed">
                    {description || config.description}
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="bg-hijau text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                    Kembali ke Dashboard
                </button>
            </div>
        </div>
    );
}
