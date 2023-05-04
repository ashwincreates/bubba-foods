import Modal from "./Dialog/Dialog"

function Cart() {
    return (
        <div className="sticky bottom-0 w-full h-[64px] px-4 bg-white flex justify-between border-t">
            <Modal title="Your Cart">
                <div className="flex w-full justify-between">
                    <h2 className="pb-4">Item Name</h2>
                    <Modal.Close />
                </div>
                <div className="min-h-[300px]">
                    No Item added yet
                </div>
            </Modal>
            <button className="primary-button self-center">Checkout</button>
        </div>
    )
}

export default Cart
