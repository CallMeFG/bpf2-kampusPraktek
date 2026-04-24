import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div>
            {frameworkData.map((item) => (
                <div
                    key={item.id}
                    className="border p-4 mb-4 rounder-lg shadow-md bg-white"
                >
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p>Developed by : {item.details.developer}</p>
                    <a
                        href={item.details.officialWebsite}
                        target="_blank"
                        className="text-blue-500"
                    >
                        view website
                    </a>
                    <br />
                    {item.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
