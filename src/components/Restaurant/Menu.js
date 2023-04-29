import React from "react";
import ItemCard from "../ItemCard";

function Menu() {
  return (
    <div className="grid max-md:p-2 md:grid-cols-3 max-w-3xl m-auto gap-3 py-3 sm:grid-cols-2 grid-cols-1">
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map(e =>
          <ItemCard
            menuItem={{
              src: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              name: 'Burger',
              description: 'A classic burger with beef patty, lettuce, tomato, and cheese',
              price: 56
            }}
            offer={
              <div className="p-2 bg-orange-200 text-orange-400 text-sm">
                Grab Now over 50% off
              </div>
            }
          />
        )
      }
    </div>
  );
}

export default Menu;
