export default function InputField({label,type, placehorder}){
    return(
        <div className="mb-3"   >
            <label className="block text-gray-700 font-medium mb-1" >{label}</label>
            <input type={type}
            placeholder={placehorder} 
            className="w-full p-2 border border-gray-300 rounded"/>
        </div>
    )
}