import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name
        .toLowerCase()
        .includes(_searchTerm) ||
      framework.description
        .toLowerCase()
        .includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      {/* Bagian untuk input search field nya */}
      <input
        type="text"
        name="searchTerm"
        value={dataForm.searchTerm}
        onChange={handleChange}
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <select
        name="selectedTag"
        value={dataForm.selectedTag}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >

      {/* Bagian untuk selection tag */}
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

        {/* Hasil list tag yang ditampilkan */}
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          {/* nama */}
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>

          {/* deskripsi */}
          <p className="text-gray-600 mb-2">{item.description}</p>

          {/* informasi developer nya */}
          <p className="text-sm font-semibold text-gray-700 mt-2">
            Developer: <span className="font-normal">{item.details.developer}</span>
          </p>

          {/* link untuk informasi website nya */}
          <p className="text-sm font-semibold text-gray-700">
            Official Website:{" "}
            <a href={item.details.officialWebsite.replace(/[<>]/g, '')} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-normal" >
              View Website
            </a>
          </p>

          {/* tag */}
          <div className="mt-3">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
            
          </div>
        </div>
      ))}
    </div>
  );
}