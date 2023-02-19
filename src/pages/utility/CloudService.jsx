import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import ModalBasic from '../../components/ModalBasic'
import DropdownFull from '../../components/DropdownFull'

function CloudService() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Empty State ✨</h1>
              </div>
          
              {/* Right: Actions */}
              
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                {/* Add board button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="ml-2">Add Event</span>
                </button> */}

              </div>

            </div>

            <div className="border-t border-slate-200">
              <div className="max-w-2xl m-auto mt-16">

                <div className="text-center px-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4">
                    <svg className="w-5 h-6 fill-current" viewBox="0 0 20 24">
                      <path className="text-slate-500" d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z" />
                      <path className="text-slate-300" d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z" />
                      <path className="text-slate-400" d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z" />
                    </svg>
                  </div>

                  {/* Send Feedback */}
                  <div className="m-1.5">
                      {/* Start */}
                      {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Add Cloud Services </button> */}
                      <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Add Cloud Infrastructure">
                        {/* Modal content */}
                        <div className="px-5 py-4">
                          <div className="text-sm">
                            <div className="font-medium text-slate-800 mb-3">Add Cloud Provider</div>
                          </div>
                          {/* Full-width Dropdown */}
                          <div className="w-100">
                            {/* <h2 className="text-2xl text-slate-800 font-bold mb-6">Full-width Dropdown</h2> */}
                            <DropdownFull optionsFromParent={[{
                                id: 0,
                                period: "Amazon Web Services"
                              },
                              {
                                id: 1,
                                period: "Google Cloud Services"
                              },
                              {
                                id: 2,
                                period: "Microsoft Azure"
                              },
                              {
                                id: 3,
                                period: "Digital Ocean"
                              },
                              {
                                id: 4,
                                period: "Linode"
                              }
                              ]}  />
                          </div>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="name">API Key Id <span className="text-rose-500">*</span></label>
                              <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="email">API Secret Key <span className="text-rose-500">*</span></label>
                              <input id="email" className="form-input w-full px-2 py-1" type="email" required />
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4 border-t border-slate-200">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Send</button>
                          </div>
                        </div>
                      </ModalBasic>
                      {/* End */}
                    </div>
                  <h2 className="text-2xl text-slate-800 font-bold mb-2">Add Cloud Infrastrucure to your Dashboard in just a few clicks</h2>
                  <div className="mb-6"></div>
                  <button onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }} className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="ml-2">Add Event</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default CloudService ;