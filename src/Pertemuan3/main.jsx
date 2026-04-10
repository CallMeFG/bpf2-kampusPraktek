import { createRoot } from "react-dom/client";
// lakukan juga import tailwind agar bisa digunakan
// import UserForm from "UserForm";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
            {/* <UseForm/> */}
        </div>
    )