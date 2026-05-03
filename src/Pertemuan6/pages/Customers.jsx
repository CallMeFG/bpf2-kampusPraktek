import { useState } from "react";
import PageHeader from "../components/PageHeader";

const customersData = [
    { id: "CUST-001", customerName: "Andi Saputra", email: "andi.saputra@email.com", phone: "081234567890", loyalty: "Gold" },
    { id: "CUST-002", customerName: "Budi Santoso", email: "budi.santoso@email.com", phone: "082345678901", loyalty: "Silver" },
    { id: "CUST-003", customerName: "Citra Dewi", email: "citra.dewi@email.com", phone: "083456789012", loyalty: "Bronze" },
    { id: "CUST-004", customerName: "Dian Prasetyo", email: "dian.prasetyo@email.com", phone: "084567890123", loyalty: "Gold" },
    { id: "CUST-005", customerName: "Eka Wulandari", email: "eka.wulandari@email.com", phone: "085678901234", loyalty: "Silver" },
    { id: "CUST-006", customerName: "Fajar Nugroho", email: "fajar.nugroho@email.com", phone: "086789012345", loyalty: "Bronze" },
    { id: "CUST-007", customerName: "Gita Permatasari", email: "gita.perm@email.com", phone: "087890123456", loyalty: "Gold" },
    { id: "CUST-008", customerName: "Hendra Kusuma", email: "hendra.k@email.com", phone: "088901234567", loyalty: "Silver" },
    { id: "CUST-009", customerName: "Indah Lestari", email: "indah.lestari@email.com", phone: "089012345678", loyalty: "Bronze" },
    { id: "CUST-010", customerName: "Joko Widodo", email: "joko.w@email.com", phone: "081123456789", loyalty: "Gold" },
    { id: "CUST-011", customerName: "Kartika Sari", email: "kartika.sari@email.com", phone: "082234567890", loyalty: "Silver" },
    { id: "CUST-012", customerName: "Lukman Hakim", email: "lukman.h@email.com", phone: "083345678901", loyalty: "Bronze" },
    { id: "CUST-013", customerName: "Maya Putri", email: "maya.putri@email.com", phone: "084456789012", loyalty: "Gold" },
    { id: "CUST-014", customerName: "Nanda Pratama", email: "nanda.p@email.com", phone: "085567890123", loyalty: "Silver" },
    { id: "CUST-015", customerName: "Oki Setiawan", email: "oki.s@email.com", phone: "086678901234", loyalty: "Bronze" },
    { id: "CUST-016", customerName: "Putri Anggraini", email: "putri.a@email.com", phone: "087789012345", loyalty: "Gold" },
    { id: "CUST-017", customerName: "Qori Ramadhani", email: "qori.r@email.com", phone: "088890123456", loyalty: "Silver" },
    { id: "CUST-018", customerName: "Rini Susanti", email: "rini.susanti@email.com", phone: "089901234567", loyalty: "Bronze" },
    { id: "CUST-019", customerName: "Sandi Wijaya", email: "sandi.w@email.com", phone: "081012345678", loyalty: "Gold" },
    { id: "CUST-020", customerName: "Tari Handayani", email: "tari.h@email.com", phone: "082123456789", loyalty: "Silver" },
    { id: "CUST-021", customerName: "Umar Fauzi", email: "umar.fauzi@email.com", phone: "083234567890", loyalty: "Bronze" },
    { id: "CUST-022", customerName: "Vina Maharani", email: "vina.m@email.com", phone: "084345678901", loyalty: "Gold" },
    { id: "CUST-023", customerName: "Wahyu Santoso", email: "wahyu.s@email.com", phone: "085456789012", loyalty: "Silver" },
    { id: "CUST-024", customerName: "Xena Fitriani", email: "xena.f@email.com", phone: "086567890123", loyalty: "Bronze" },
    { id: "CUST-025", customerName: "Yoga Pratama", email: "yoga.p@email.com", phone: "087678901234", loyalty: "Gold" },
    { id: "CUST-026", customerName: "Zahra Amalia", email: "zahra.a@email.com", phone: "088789012345", loyalty: "Silver" },
    { id: "CUST-027", customerName: "Arif Budiman", email: "arif.b@email.com", phone: "089890123456", loyalty: "Bronze" },
    { id: "CUST-028", customerName: "Bella Octavia", email: "bella.o@email.com", phone: "081901234567", loyalty: "Gold" },
    { id: "CUST-029", customerName: "Cahyo Purnomo", email: "cahyo.p@email.com", phone: "082012345678", loyalty: "Silver" },
    { id: "CUST-030", customerName: "Desi Ratnasari", email: "desi.r@email.com", phone: "083123456789", loyalty: "Bronze" },
];

const loyaltyColor = {
    Gold: "bg-yellow-100 text-yellow-700",
    Silver: "bg-gray-100 text-gray-600",
    Bronze: "bg-orange-100 text-orange-700",
};

const emptyForm = { customerName: "", email: "", phone: "", loyalty: "Bronze" };

export default function Customers() {
    const [customers, setCustomers] = useState(customersData);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(emptyForm);

    const handleSubmit = () => {
        if (!form.customerName || !form.email || !form.phone) return;
        const newCustomer = {
            id: `CUST-${String(customers.length + 1).padStart(3, "0")}`,
            ...form,
        };
        setCustomers([newCustomer, ...customers]);
        setShowForm(false);
        setForm(emptyForm);
    };

    return (
        <div id="customers-container">
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                <button
                    className="bg-hijau text-white px-4 py-2 rounded-lg"
                    onClick={() => setShowForm(true)}
                >
                    Add Customer
                </button>
            </PageHeader>

            {/* Modal Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl">
                        <h2 className="text-2xl font-bold mb-6">Add New Customer</h2>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Customer Name</label>
                                <input
                                    type="text"
                                    value={form.customerName}
                                    onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                                    className="border border-gray-200 rounded-lg p-2 outline-none focus:border-hijau"
                                    placeholder="Nama pelanggan"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="border border-gray-200 rounded-lg p-2 outline-none focus:border-hijau"
                                    placeholder="email@contoh.com"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="border border-gray-200 rounded-lg p-2 outline-none focus:border-hijau"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Loyalty</label>
                                <select
                                    value={form.loyalty}
                                    onChange={(e) => setForm({ ...form, loyalty: e.target.value })}
                                    className="border border-gray-200 rounded-lg p-2 outline-none focus:border-hijau"
                                >
                                    <option>Bronze</option>
                                    <option>Silver</option>
                                    <option>Gold</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex space-x-3 mt-6">
                            <button
                                onClick={handleSubmit}
                                className="flex-1 bg-hijau text-white py-2 rounded-lg font-semibold"
                            >
                                Submit
                            </button>
                            <button
                                onClick={() => { setShowForm(false); setForm(emptyForm); }}
                                className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg font-semibold"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabel */}
            <div className="p-5">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left p-4 font-semibold text-gray-600">Customer ID</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Customer Name</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Email</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Phone</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((cust, index) => (
                                <tr key={cust.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="p-4 font-medium text-gray-700">{cust.id}</td>
                                    <td className="p-4 text-gray-600">{cust.customerName}</td>
                                    <td className="p-4 text-gray-600">{cust.email}</td>
                                    <td className="p-4 text-gray-600">{cust.phone}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${loyaltyColor[cust.loyalty]}`}>
                                            {cust.loyalty}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
