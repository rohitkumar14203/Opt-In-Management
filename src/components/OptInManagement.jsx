import React from "react";
import optinIcon from "../assets/optin.png";
import optoutIcon from "../assets/optout.png";
import plusIcon from "../assets/plusButton.png";
import whatsappIcon from "../assets/whatsapp-icon.png";

const OptInManagement = () => {
  return (
    <div className="bg-white min-h-screen pt-2 pb-8 border-[2px] border-[#D7DEE7] ">
      <div className="flex items-center border-b-2 border-[#D7DEE7] p-2 justify-between  mb-8">
        <h1 className="text-black font-semibold  text-lg">Opt-In Management</h1>
        <div className="space-x-3">
          <button className="border border-gray-300 text-black px-5 py-2 rounded-lg">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-[#267DF4] text-xl font-semibold mb-6">
            Opt-In Management
          </h2>

          {/* Opt-in Section */}
          <div className="flex items-start gap-4 mb-8">
            <img src={optinIcon} alt="Opt-in" className="w-10 h-10" />
            <div className="flex-1">
              <h3 className="text-[#267DF4] text-lg font-semibold">Opt-in</h3>
              <p className="text-gray-500 text-sm mb-4">
                A text that explains what opt-in is
              </p>

              <div className="flex gap-6">
                {/* Opt-in Response */}
                <div className="w-[50%]">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-black font-semibold">
                        Opt-in Response
                      </h4>
                      <p className="text-gray-400 text-xs">
                        Setup a response message for opt-in user keywords
                      </p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 relative">
                        <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition"></span>
                      </div>
                    </label>
                  </div>
                  <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mb-3">
                    Configure
                  </button>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-start gap-2">
                    <img
                      src={whatsappIcon}
                      alt="Whatsapp"
                      className="w-5 h-5"
                    />
                    <p className="text-sm text-gray-700">
                      Hi! Thanks for connecting. Someone from our team will get
                      in touch soon.
                    </p>
                  </div>
                </div>

                {/* Opt-in Keywords */}
                <div className="w-[50%]">
                  <h4 className="text-black font-semibold mb-1">
                    Opt-in Keywords
                  </h4>
                  <p className="text-gray-400 text-xs mb-2">
                    The user will have to type exactly one of these messages on
                    which they should be automatically opted-in
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <img src={plusIcon} alt="Add" className="w-5 h-5" />
                    <input
                      type="text"
                      placeholder="# Add keyword"
                      className="border border-gray-300 text-sm rounded-lg px-3 py-2 w-full"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full flex items-center gap-1"
                      >
                        Keyword{" "}
                        <span className="text-gray-400 text-xs cursor-pointer">
                          ×
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opt-out Section */}
          <div className="flex items-start gap-4">
            <img src={optoutIcon} alt="Opt-out" className="w-10 h-10" />
            <div className="flex-1">
              <h3 className="text-[#267DF4] text-lg font-semibold">Opt-out</h3>
              <p className="text-gray-500 text-sm mb-4">
                A text that explains what opt-in is
              </p>

              <div className="flex gap-6">
                {/* Opt-out Response */}
                <div className="w-[50%]">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="text-black font-semibold">
                        Opt-out Response
                      </h4>
                      <p className="text-gray-400 text-xs">
                        Setup a response message for opt-in user keywords
                      </p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 relative">
                        <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition"></span>
                      </div>
                    </label>
                  </div>
                  <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mb-3">
                    Configure
                  </button>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-start gap-2">
                    <img
                      src={whatsappIcon}
                      alt="Whatsapp"
                      className="w-5 h-5"
                    />
                    <p className="text-sm text-gray-700">
                      Hi! Thanks for connecting. Someone from our team will get
                      in touch soon.
                    </p>
                  </div>
                </div>

                {/* Opt-out Keywords */}
                <div className="w-[50%]">
                  <h4 className="text-black font-semibold mb-1">
                    Opt-out Keywords
                  </h4>
                  <p className="text-gray-400 text-xs mb-2">
                    The user will have to type exactly one of these messages on
                    which they should be automatically opted-out
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <img src={plusIcon} alt="Add" className="w-5 h-5" />
                    <input
                      type="text"
                      placeholder="# Add keyword"
                      className="border border-gray-300 text-sm rounded-lg px-3 py-2 w-full"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full flex items-center gap-1"
                      >
                        Keyword{" "}
                        <span className="text-gray-400 text-xs cursor-pointer">
                          ×
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptInManagement;
