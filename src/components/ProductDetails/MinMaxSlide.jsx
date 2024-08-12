import { useState } from "react";
import { Range } from "react-range";

const MinMaxSlider = () => {
  const [values, setValues] = useState([150, 300]);

  return (
    <div className="">
      <div className="flex justify-between flex-col mb-4">
        <div className="flex flex-col">
          <label htmlFor="min" className="mb-2 text-sm font-medium">
            Min
          </label>
          <input
            id="min"
            type="number"
            value={values[0]}
            onChange={(e) => setValues([Number(e.target.value), values[1]])}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="max" className="mb-2 text-sm font-medium">
            Max
          </label>
          <input
            id="max"
            type="number"
            value={values[1]}
            onChange={(e) => setValues([values[0], Number(e.target.value)])}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>

      <Range
        step={1}
        min={100}
        max={999}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div {...props} style={{ ...props.style }} className="h-6 bg-orange-100 rounded-md">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} style={{ ...props.style }} className="w-6 h-6 bg-blue-500 rounded-full focus:outline-none" />
        )}
      />

      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <span className="font-medium text-md">$ {values[0]}</span>
        <span className="font-medium text-md">$ {values[1]}</span>
      </div>
    </div>
  );
};

export default MinMaxSlider;
