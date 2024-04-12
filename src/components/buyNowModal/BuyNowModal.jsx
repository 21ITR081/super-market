import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="w-full px-4 py-3 text-center text-gray-100 bg-green-600 border border-transparent dark:border-gray-700 hover:border-green-500 hover:text-green-700 hover:bg-green-100 rounded-xl"
            >
                Buy now
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                        </Transition.Child>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Buy Now
                                </Dialog.Title>
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={addressInfo.name}
                                        onChange={(e) => {
                                            setAddressInfo({
                                                ...addressInfo,
                                                name: e.target.value
                                            });
                                        }}
                                        placeholder="Enter your name"
                                        className="border outline-none border-gray-300 text-gray-900 block w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600 bg-gray-100"
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        value={addressInfo.address}
                                        onChange={(e) => {
                                            setAddressInfo({
                                                ...addressInfo,
                                                address: e.target.value
                                            });
                                        }}
                                        placeholder="Enter your address"
                                        className="mt-2 border outline-none border-gray-300 text-gray-900 block w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600 bg-gray-100"
                                    />
                                    <input
                                        type="number"
                                        name="pincode"
                                        value={addressInfo.pincode}
                                        onChange={(e) => {
                                            setAddressInfo({
                                                ...addressInfo,
                                                pincode: e.target.value
                                            });
                                        }}
                                        placeholder="Enter your pincode"
                                        className="mt-2 border outline-none border-gray-300 text-gray-900 block w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600 bg-gray-100"
                                    />
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        value={addressInfo.mobileNumber}
                                        onChange={(e) => {
                                            setAddressInfo({
                                                ...addressInfo,
                                                mobileNumber: e.target.value
                                            });
                                        }}
                                        placeholder="Enter your mobileNumber"
                                        className="mt-2 border outline-none border-gray-300 text-gray-900 block w-full p-2.5 rounded-lg focus:ring-primary-600 focus:border-primary-600 bg-gray-100"
                                    />
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            closeModal();
                                            buyNowFunction();
                                        }}
                                        className="w-full px-4 py-3 text-center text-white bg-green-600 hover:bg-green-700 rounded-lg"
                                    >
                                        Buy now
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default BuyNowModal;
