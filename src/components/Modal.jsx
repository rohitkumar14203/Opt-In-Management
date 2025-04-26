import { useState } from "react";

const Modal = ({ onClose, onSave }) => {
  const [msgType, setMsgType] = useState("regular");
  const [mediaType, setMediaType] = useState("text");
  const [message, setMessage] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [variables, setVariables] = useState([{ name: "", value: "" }]);

  const handleVariableChange = (index, field, val) => {
    const newVars = [...variables];
    newVars[index][field] = val;
    setVariables(newVars);
  };

  const addVariable = () => {
    setVariables([...variables, { name: "", value: "" }]);
  };

  const handleSave = () => {
    const data = {
      msgType,
      mediaType,
      message,
      mediaUrl,
      variables,
    };

    if (onSave) onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 shadow-lg space-y-6 overflow-y-auto max-h-[90vh]">
        <h3 className="text-2xl font-semibold text-gray-800">
          Configure Welcome Message
        </h3>

        <div className="space-y-2">
          <p className="font-medium text-gray-700">Message Type</p>
          <div className="flex gap-4">
            {["template", "regular"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="msgType"
                  value={type}
                  checked={msgType === type}
                  onChange={(e) => setMsgType(e.target.value)}
                  className="accent-blue-600"
                />
                <span className="capitalize">{type} message</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-700">Media Type</p>
          <div className="flex gap-4 flex-wrap">
            {["text", "image", "video", "document"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mediaType"
                  value={type}
                  checked={mediaType === type}
                  onChange={(e) => setMediaType(e.target.value)}
                  className="accent-blue-600"
                />
                <span className="capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-700">Upload Media</p>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="block w-full border rounded px-3 py-2 text-sm text-gray-700"
          />
          <div className="text-center text-gray-500">or</div>
          <input
            type="text"
            placeholder="Media URL"
            value={mediaUrl}
            onChange={(e) => setMediaUrl(e.target.value)}
            className="block w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-700">Message</p>
          <textarea
            placeholder="Enter your message here"
            maxLength={4096}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm min-h-[100px]"
          />
          <div className="flex gap-2">
            <button className="px-2 py-1 border rounded">B</button>
            <button className="px-2 py-1 border rounded">I</button>
            <button className="px-2 py-1 border rounded">U</button>
            <button className="px-2 py-1 border rounded">🌐</button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-700">Values</p>
          {variables.map((v, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Variable Name"
                value={v.name}
                onChange={(e) =>
                  handleVariableChange(i, "name", e.target.value)
                }
                className="border rounded px-2 py-1 text-sm flex-1"
              />
              <input
                type="text"
                placeholder="Value"
                value={v.value}
                onChange={(e) =>
                  handleVariableChange(i, "value", e.target.value)
                }
                className="border rounded px-2 py-1 text-sm flex-1"
              />
              <button
                className="text-red-500 text-lg"
                onClick={() => {
                  const newVars = variables.filter((_, idx) => idx !== i);
                  setVariables(newVars);
                }}
              >
                🗑️
              </button>
            </div>
          ))}
          <button
            className="text-blue-600 text-sm font-medium"
            onClick={addVariable}
          >
            + Add Variable
          </button>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
