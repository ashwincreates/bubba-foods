import { Dialog, Transition } from "@headlessui/react"
import { createContext, Fragment, useState } from "react"
import { X } from "react-feather"
import useCart from "../hooks/cart"

export const FoodItemContext = createContext(null)

export function FoodItemProvider({ children }) {

    const [item, setItem] = useState(null)
    const [cart, dispatch] = useCart()
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(item) {
        setItem(item)
        setIsOpen(true)
    }

    return (
        <FoodItemContext.Provider value={{ item: item, openModal: openModal, cart: cart, dispatch: dispatch }}>
            {children}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {
                                        item ?
                                            <>
                                                <div className="flex justify-between mb-3">
                                                    <h2>{item.Name__c}</h2>
                                                    <X className="self-start cursor-pointer" onClick={closeModal} />
                                                </div>
                                                <div className="flex">
                                                    <img className="h-[300px] w-[200px] object-cover rounded" src={item.Image_Url__c} alt="food" />
                                                    <div className="flex grow flex-col px-3 gap-3">
                                                        <div>
                                                            <h5 className="text-xs text-gray-400">Description</h5>
                                                            <p className="text-xs">{item.Description__c}</p>
                                                        </div>
                                                        <div className="grow">
                                                            <h5 className="text-xs text-gray-400">Addon</h5>
                                                        </div>
                                                        <div className="flex flex-row-reverse">
                                                            <button
                                                                className="primary-button"
                                                                onClick={() => {
                                                                    dispatch({ type: 'addItem', item: item })
                                                                    closeModal()
                                                                }}
                                                            >
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : ''
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </FoodItemContext.Provider>
    )
}
