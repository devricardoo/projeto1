import { useState } from "react";

const Calculator: React.FC = () => {
  const [result, setResult] = useState<number | string>("");

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(result.toString()));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
    } else {
      setResult((prevResult) => prevResult.toString() + value);
    }
  };

  return (
    <div className="w-64 mx-auto my-8 bg-gray-100 p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={result}
        onChange={() => {}}
        readOnly
        className="w-full bg-white border border-gray-300 rounded p-2 mb-4"
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleClick("7")}
          className="col-span-2 bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          9
        </button>
        <button
          onClick={() => handleClick("+")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          +
        </button>
        <button
          onClick={() => handleClick("4")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          6
        </button>
        <button
          onClick={() => handleClick("-")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          -
        </button>
        <button
          onClick={() => handleClick("1")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          3
        </button>
        <button
          onClick={() => handleClick("*")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          *
        </button>
        <button
          onClick={() => handleClick("C")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2 col-span-2"
        >
          C
        </button>
        <button
          onClick={() => handleClick("0")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          0
        </button>
        <button
          onClick={() => handleClick("=")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          =
        </button>
        <button
          onClick={() => handleClick("/")}
          className="bg-gray-200 hover:bg-gray-300 rounded p-2"
        >
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
