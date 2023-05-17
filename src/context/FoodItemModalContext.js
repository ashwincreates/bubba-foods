import { Dialog, Transition } from "@headlessui/react"
import { createContext, Fragment, useEffect, useState } from "react"
import { X } from "react-feather"
import useCart from "../hooks/cart"

export const FoodItemContext = createContext(null)

export function FoodItemProvider({ children }) {

    const [item, setItem] = useState(null)
    const [cart, dispatch] = useCart()
    const [addon, setAddon] = useState([])

    const [selectedAddon, setSelectedAddon] = useState([])

    let [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (item) {
            fetch(`${process.env.REACT_APP_API_URL}/menu/${item.Id}/addons`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setAddon(data)
                })
        }
    }, [item])

    function closeModal() {
        setIsOpen(false)
        setAddon([])
        setSelectedAddon([])
    }

    function openModal(item) {
        setItem(item)
        setIsOpen(true)
    }

    function toggleAddon(item) {
        if (selectedAddon.includes(item)) {
            setSelectedAddon(selectedAddon.filter((addon) => addon.Id !== item.Id))
        } else {
            setSelectedAddon([...selectedAddon, item])
        }
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
                                                            {
                                                                addon ?
                                                                    addon.map(item =>
                                                                        <div className="flex gap-3 py-2">
                                                                            <input
                                                                                id={item.Id}
                                                                                type="checkbox"
                                                                                value={item.Id}
                                                                                checked={selectedAddon.includes(item)}
                                                                                onChange={(_) => { toggleAddon(item) }}
                                                                            />
                                                                            <label htmlFor={item.Id} className="w-full flex justify-between">
                                                                                <span className="text-xs">{item.Name__c}</span>
                                                                                <span className="text-xs font-bold">+Rs. {item.Price__c}</span>
                                                                            </label>
                                                                        </div>
                                                                    ) : ''
                                                            }
                                                        </div>
                                                        <div className="flex flex-row-reverse gap-3 items-center">
                                                            <button
                                                                className="primary-button"
                                                                onClick={() => {
                                                                    dispatch({ type: 'addItem', item: item, addons: selectedAddon })
                                                                    closeModal()
                                                                }}
                                                            >
                                                                Add to Cart
                                                            </button>
                                                            <span className="text-lg font-bold">Rs. {item.Price__c + selectedAddon.reduce((prev, curr) => prev + curr.Price__c, 0)}</span>
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
