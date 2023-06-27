import { useState } from "react";


function App() {
  const [work,setWord] = useState('')
  console.log(work)
  return (
    <div className="flex h-screen gap-8 items-center border border-red-500 justify-center">
      <input type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={work}
        onChange ={e => setWord(e.target.value)}/>
      <button type="button" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white">Thêm</button>
    </div>
  );
}

export default App;
