
export default function Label(
    {htmlFor, text, required}:{htmlFor:string, text:string, required?:boolean}
) {
  return (
    <label htmlFor={htmlFor} className="text-text dark:text-gray-200">
        {text}  {required ? ( <span className="text-red-600">*</span>):""  }
    </label>
  )
}
