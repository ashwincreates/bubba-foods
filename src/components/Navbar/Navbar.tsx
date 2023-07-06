import { Clipboard, LogOut, Package, Settings, User } from "react-feather"
import { Link } from "react-router-dom"
import { Menu } from '@headlessui/react'
import Cart from "../Cart"

function NavBar() {
    return (
        <nav className="sticky top-0 bg-white z-20">
            <div className="flex h-[64px] items-center justify-between mx-4 max-w-6xl md:m-auto">
                <Link to='/'>
                    <img src='/images/BubbaFoodH.png' alt='logo' width='110px' />
                </Link>
                <div className="flex gap-8 items-center">
                    <Cart/>
                    <div className="flex items-center gap-2 py-1 border border-gray-200 text-sm rounded-full px-2">
                        <span className="rounded-full w-4 h-4 bg-amber-300 text-center text-white text-xs">
                            B
                        </span>
                        102
                    </div>
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button>
                                <div className="flex items-center gap-2 cursor-pointer border border-gray-200 text-sm rounded-full p-1 pr-2">
                                    <span className="rounded-full bg-gray-300 p-1">
                                        <User size={16} color="gray" />
                                    </span>
                                    Guest user
                                </div>
                            </Menu.Button>
                        </div>
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="p-1">
                                <Menu.Item>
                                    <Link to='/profile/adawdawdawd/details' className="menu-button"><Settings size={14} /> <span>Profile</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='/profile/awdawdawd/orders' className="menu-button"><Package size={14} /> <span>Orders</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='/profile/awdawdawd/bookings' className="menu-button"><Clipboard size={14} /> <span>Bookings</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className="menu-button"><LogOut size={14} /> <span>Logout</span></button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
