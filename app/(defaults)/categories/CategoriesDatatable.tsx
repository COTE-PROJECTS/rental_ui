"use client"
import { useState, Fragment } from 'react';
import IconStar from '@/components/icon/icon-star';
import IconTrashLines from '@/components/icon/icon-trash-lines';
import IconX from '@/components/icon/icon-x';
import { Transition, Dialog } from '@headlessui/react';
import DatatableComponent from '@/components/datatables/datatable-component';


const CategoriesDatatable = () => {
    const [addContactModal, setAddContactModal] = useState<any>(false);
    const [isDeleteNoteModal, setIsDeleteNoteModal] = useState<any>(false);
    const [isShowNoteMenu, setIsShowNoteMenu] = useState<any>(false);
    const [isViewNoteModal, setIsViewNoteModal] = useState<any>(false);
    return (
        <>
            {/* data table */}
            <DatatableComponent
                addLabel='ADD CATEGORY'
                onAdd={() => setAddContactModal(true)}
            />
            {/* modals */}
            <Transition appear show={addContactModal} as={Fragment}>
                <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        onClick={() => setAddContactModal(false)}
                                        className="absolute top-4 text-gray-400 outline-none hover:text-gray-800 ltr:right-4 rtl:left-4 dark:hover:text-gray-600"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="bg-[#fbfbfb] py-3 text-lg font-medium ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c]">
                                        Add House Category
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div>
                                                <label className="form-label" htmlFor="title">
                                                    Category Name
                                                </label>
                                                <input type="text" className='form-input' placeholder='Add category' />
                                            </div>
                                            <div className="mt-8 flex items-center justify-end">
                                                <button type="button" className="btn btn-outline-danger gap-2" onClick={() => setAddContactModal(false)}>
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4"
                                                // onClick={saveNote}
                                                >
                                                    Add Category
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* delete modal */}
            <Transition appear show={isDeleteNoteModal} as={Fragment}>
                <Dialog as="div" open={isDeleteNoteModal} onClose={() => setIsDeleteNoteModal(false)} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        onClick={() => setIsDeleteNoteModal(false)}
                                        className="absolute top-4 text-gray-400 outline-none hover:text-gray-800 ltr:right-4 rtl:left-4 dark:hover:text-gray-600"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="bg-[#fbfbfb] py-3 text-lg font-medium ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c]">Delete Notes</div>
                                    <div className="p-5 text-center">
                                        <div className="mx-auto w-fit rounded-full bg-danger p-4 text-white ring-4 ring-danger/30">
                                            <IconTrashLines className="mx-auto h-7 w-7" />
                                        </div>
                                        <div className="mx-auto mt-5 sm:w-3/4">Are you sure you want to delete Notes?</div>

                                        <div className="mt-8 flex items-center justify-center">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => setIsDeleteNoteModal(false)}>
                                                Cancel
                                            </button>
                                            <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4"
                                            //  onClick={deleteNote}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* end of  delete modal */}
            <Transition appear show={isViewNoteModal} as={Fragment}>
                <Dialog as="div" open={isViewNoteModal} onClose={() => setIsViewNoteModal(false)} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        onClick={() => setIsViewNoteModal(false)}
                                        className="absolute top-4 text-gray-400 outline-none hover:text-gray-800 ltr:right-4 rtl:left-4 dark:hover:text-gray-600"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="flex flex-wrap items-center gap-2 bg-[#fbfbfb] py-3 text-lg font-medium ltr:pl-5 ltr:pr-[50px] rtl:pl-[50px] rtl:pr-5 dark:bg-[#121c2c]">
                                        <div className="ltr:mr-3 rtl:ml-3">title</div>

                                    </div>
                                    <div className="p-5">
                                        <div className="text-base">description</div>

                                        <div className="mt-8 ltr:text-right rtl:text-left">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => setIsViewNoteModal(false)}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CategoriesDatatable;