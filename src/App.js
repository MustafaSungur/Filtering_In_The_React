import { useState } from "react";
import "./App.css";

function App() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];
  const [filterList, setFilterLİst] = useState(list);

  const changeHandle = (e) => {
    if (e.target.value === "") {
      setFilterLİst(list);
      return;
    }
    const filterValues = list.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilterLİst(filterValues);
  };

  return (
    <div className="w-10/12 mx-auto h-full absolute top-1/4 text-neutral-200  left-1/3 font-open">
      <div className="group flex">
        <input
          className=" w-80  border-b-2 transition duration-300 border-y-red-700  outline-none  focus:border-b-emerald-600  bg-transparent"
          placeholder="Search"
          onChange={(e) => changeHandle(e)}
        />
      </div>

      <ul
        className={
          "group space-y-2 mt-4 border w-fit p-6 rounded border-orange-500 text-zinc-400"
        }
      >
        {filterList.length === 0 ? (
          <li className=" list-item  ">No result</li>
        ) : (
          filterList.map((data, index) => (
            <li key={index} className=" list-item  ">
              {index + 1}) {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
