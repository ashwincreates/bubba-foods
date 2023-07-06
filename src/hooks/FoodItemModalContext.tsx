import { Dialog, Transition } from "@headlessui/react"
import { createContext, Dispatch, Fragment, useContext, useState } from "react"
import { X } from "react-feather"
import { Item } from "../shared/interfaces/item.interface"
import { useCart } from "./CartContext"

interface FoodMenuContext {
    item?: Item
    /**
     * Sets a item to the Dialog
     **/
    setItemDialog: (item: Item) => void
}
export const FoodItemContext = createContext<FoodMenuContext>({ setItemDialog: () => { } })

export function FoodItemProvider({ children }: { children: JSX.Element }) {

    const [item, setItem] = useState<Item | undefined>()
    const [addon, setAddon] = useState([])

    const { addItem } = useCart()
    const [selectedAddon, setSelectedAddon] = useState<Item[]>([])

    let [isOpen, setIsOpen] = useState(false)

    // useEffect(() => {
    //     if (item) {
    //         fetch(`${process.env.REACT_APP_API_URL}/menu/${item.id}/addons`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data)
    //                 setAddon(data)
    //             })
    //     }
    // }, [item])

    function closeModal() {
        setIsOpen(false)
        setAddon([])
        setSelectedAddon([])
    }

    function setItemDialog(item: Item) {
        setItem(item)
        setIsOpen(true)
    }

    // function toggleAddon(item: Item) {
    //     if (selectedAddon.includes(item)) {
    //         setSelectedAddon(selectedAddon.filter((addon) => addon.Id !== item.Id))
    //     } else {
    //         setSelectedAddon([...selectedAddon, item])
    //     }
    // }

    return (
        <FoodItemContext.Provider value={{ item, setItemDialog }}>
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
                                                    <h2>{item.name}</h2>
                                                    <X className="self-start cursor-pointer" onClick={closeModal} />
                                                </div>
                                                <div className="flex">
                                                    <img className="h-[300px] w-[200px] object-cover rounded" src={item.img_url} alt="food" />
                                                    <div className="flex grow flex-col px-3 gap-3">
                                                        <div>
                                                            <h5 className="text-xs text-gray-400">Description</h5>
                                                            <p className="text-xs">{item.description}</p>
                                                        </div>
                                                        <div className="grow">
                                                            <h5 className="text-xs text-gray-400">Addon</h5>
                                                            {
                                                                addon ?
                                                                    addon.map((item: Item) =>
                                                                        <div className="flex gap-3 py-2">
                                                                            <input
                                                                                id={item.id}
                                                                                type="checkbox"
                                                                                value={item.id}
                                                                                checked={selectedAddon.includes(item)}
                                                                            // onChange={(_) => { toggleAddon(item) }}
                                                                            />
                                                                            <label htmlFor={item.id} className="w-full flex justify-between">
                                                                                <span className="text-xs">{item.name}</span>
                                                                                <span className="text-xs font-bold">+Rs. {item.price}</span>
                                                                            </label>
                                                                        </div>
                                                                    ) : ''
                                                            }
                                                        </div>
                                                        <div className="flex flex-row-reverse gap-3 items-center">
                                                            <button
                                                                className="primary-button"
                                                                onClick={() => {
                                                                    addItem({...item, quantity: 1, addons: []})
                                                                    closeModal()
                                                                }}
                                                            >
                                                                Add to Cart
                                                            </button>
                                                            <span className="text-lg font-bold">Rs. {item.price + selectedAddon.reduce((prev, curr) => prev + curr.price, 0)}</span>
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

export function useItem() {
    return useContext(FoodItemContext)
}
