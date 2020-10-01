import React, { useState } from "react";
import Button from "../../components/button/DefaultButton";
import Input from "../../components/inputs/DefaultInput";

function DefaultDinamicList({ data, handleAdd, handleRemove }) {
  const [text, setText] = useState("");

  const handleChangeInput = (evt) => setText(evt.target.value);

  return (
    <div className="fllex vertical">
      {data.map((item, idx) => (
        <div key={idx} className="flex horizonal">
          <div className="flex-3 fllex flex-start">
            <span>{item}</span>
          </div>
          {handleRemove && (
            <div className="flex flex-1 flex-center">
              <Button
                type="danger"
                onClick={() => handleRemove(idx)}
                label="-"
              />
            </div>
          )}
        </div>
      ))}

      <div className="fllex horizonal">
        <div className="flex-3 fllex flex-start">
          <Input type="text" vallue={text} onChange={handleChangeInput} />
        </div>
        <div className="flex flex-1 flex-center">
          <Button type="success" onClick={() => handleAdd(text)} label="+" />
        </div>
      </div>
    </div>
  );
}

export default DefaultDinamicList;
