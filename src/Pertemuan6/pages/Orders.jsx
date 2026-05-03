import { useState } from "react";
import PageHeader from "../components/PageHeader";

const ordersData = [
    { id: "ORD-001", customerName: "Andi Saputra", status: "Completed", totalPrice: 125000, orderDate: "2025-01-03" },
    { id: "ORD-002", customerName: "Budi Santoso", status: "Pending", totalPrice: 87500, orderDate: "2025-01-05" },
    { id: "ORD-003", customerName: "Citra Dewi", status: "Cancelled", totalPrice: 210000, orderDate: "2025-01-07" },
    { id: "ORD-004", customerName: "Dian Prasetyo", status: "Completed", totalPrice: 65000, orderDate: "2025-01-09" },
    { id: "ORD-005", customerName: "Eka Wulandari", status: "Pending", totalPrice: 175000, orderDate: "2025-01-10" },
    { id: "ORD-006", customerName: "Fajar Nugroho", status: "Completed", totalPrice: 320000, orderDate: "2025-01-12" },
    { id: "ORD-007", customerName: "Gita Permatasari", status: "Cancelled", totalPrice: 95000, orderDate: "2025-01-13" },
    { id: "ORD-008", customerName: "Hendra Kusuma", status: "Pending", totalPrice: 140000, orderDate: "2025-01-15" },
    { id: "ORD-009", customerName: "Indah Lestari", status: "Completed", totalPrice: 230000, orderDate: "2025-01-17" },
    { id: "ORD-010", customerName: "Joko Widodo", status: "Completed", totalPrice: 58000, orderDate: "2025-01-18" },
    { id: "ORD-011", customerName: "Kartika Sari", status: "Pending", totalPrice: 410000, orderDate: "2025-01-20" },
    { id: "ORD-012", customerName: "Lukman Hakim", status: "Completed", totalPrice: 155000, orderDate: "2025-01-21" },
    { id: "ORD-013", customerName: "Maya Putri", status: "Cancelled", totalPrice: 270000, orderDate: "2025-01-23" },
    { id: "ORD-014", customerName: "Nanda Pratama", status: "Pending", totalPrice: 115000, orderDate: "2025-01-25" },
    { id: "ORD-015", customerName: "Oki Setiawan", status: "Completed", totalPrice: 380000, orderDate: "2025-01-26" },
    { id: "ORD-016", customerName: "Putri Anggraini", status: "Completed", totalPrice: 92000, orderDate: "2025-01-28" },
    { id: "ORD-017", customerName: "Qori Ramadhani", status: "Pending", totalPrice: 248000, orderDate: "2025-01-29" },
    { id: "ORD-018", customerName: "Rini Susanti", status: "Cancelled", totalPrice: 135000, orderDate: "2025-01-31" },
    { id: "ORD-019", customerName: "Sandi Wijaya", status: "Completed", totalPrice: 460000, orderDate: "2025-02-02" },
    { id: "ORD-020", customerName: "Tari Handayani", status: "Pending", totalPrice: 73000, orderDate: "2025-02-03" },
    { id: "ORD-021", customerName: "Umar Fauzi", status: "Completed", totalPrice: 195000, orderDate: "2025-02-05" },
    { id: "ORD-022", customerName: "Vina Maharani", status: "Cancelled", totalPrice: 315000, orderDate: "2025-02-07" },
    { id: "ORD-023", customerName: "Wahyu Santoso", status: "Completed", totalPrice: 84000, orderDate: "2025-02-08" },
    { id: "ORD-024", customerName: "Xena Fitriani", status: "Pending", totalPrice: 520000, orderDate: "2025-02-10" },
    { id: "ORD-025", customerName: "Yoga Pratama", status: "Completed", totalPrice: 167000, orderDate: "2025-02-12" },
    { id: "ORD-026", customerName: "Zahra Amalia", status: "Pending", totalPrice: 290000, orderDate: "2025-02-13" },
    { id: "ORD-027", customerName: "Arif Budiman", status: "Completed", totalPrice: 103000, orderDate: "2025-02-15" },
    { id: "ORD-028", customerName: "Bella Octavia", status: "Cancelled", totalPrice: 445000, orderDate: "2025-02-17" },
    { id: "ORD-029", customerName: "Cahyo Purnomo", status: "Completed", totalPrice: 218000, orderDate: "2025-02-18" },
    { id: "ORD-030", customerName: "Desi Ratnasari", status: "Pending", totalPrice: 376000, orderDate: "2025-02-20" },
];

const statusColor = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
};

const emptyForm = { customerName: "", status: "Pending", totalPrice: "", orderDate: "" };

export default function Orders() {
    const [orders, setOrders] = useState(ordersData);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(emptyForm);

    const handleSubmit = () => {
        if (!form.customerName || !form.totalPrice || !form.orderDate) return;
        const newOrder = {
            id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
            ...form,
            totalPrice: parseInt(form.totalPrice),
        };
        setOrders([newOrder, ...orders]);
        setShowForm(false);
        setForm(emptyForm);
    };

    return (
        <div id="orders-container">
            <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
                <button
                    className="bg-hijau text-white px-4 py-2 rounded-lg"
                    onClick={() => setShowForm(true)}
                >
                    Add Orders
                </button>
            </PageHeader>

            {/* Modal Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl">
                        <h2 className="text-2xl font-bold mb-6">Add New Order</h2>
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
                                <label className="text-sm font-medium text-gray-600 mb-1">Status</label>
                                <select
                                    value={form.status}
                                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                                    className="border border-gray-200 rounded-lg p-2 outline-none focus:border-hijau"
                                >
                                    <option>Pending</option>
                                    <option>Completed</option>
                                    <option>Cancelled</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Total Price (Rp)</label>
                                <input
                                    type="number"
                                    value={form.totalPrice}
                                    onChange={(e) => setForm({ ...form, totalPrice: e.target.value })}
                                    className="border border-gray-200 rounded-lg p-2 outline-none focus:border-hijau"
                                    placeholder="contoh: 150000"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-600 mb-1">Order Date</label>
                                <input
                                    type="date"
                                    value={form.orderDate}
                                    onChange={(e) => setForm({ ...form, orderDate: e.target.value })}
                                    className="border border-gray-200 rounded-lg p-2 outline-none focus:border-hijau"
                                />
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
                                <th className="text-left p-4 font-semibold text-gray-600">Order ID</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Customer Name</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Status</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Total Price</th>
                                <th className="text-left p-4 font-semibold text-gray-600">Order Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="p-4 font-medium text-gray-700">{order.id}</td>
                                    <td className="p-4 text-gray-600">{order.customerName}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[order.status]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600">Rp {order.totalPrice.toLocaleString("id-ID")}</td>
                                    <td className="p-4 text-gray-600">{order.orderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
