export default function PageHeader({ title = "Dashboard", breadcrumb = [], children }) {
    // breadcrumb bisa berupa string atau array
    const breadcrumbItems = Array.isArray(breadcrumb)
        ? breadcrumb
        : breadcrumb.split("/").map((s) => s.trim());

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {breadcrumbItems.map((item, index) => (
                        <span key={index} className="flex items-center space-x-2">
                            <span className="text-gray-500">{item}</span>
                            {index < breadcrumbItems.length - 1 && (
                                <span className="text-gray-500">/</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
            {/* children = tombol action (Add Orders, Add Customer, dll) */}
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}
