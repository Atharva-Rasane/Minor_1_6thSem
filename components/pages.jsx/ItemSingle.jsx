import React from 'react'
import ItemDetails from '../subcomponents/ItemDetails'

const ItemSingle = () => {
  return (
      <section class="min-h-screen mb-32 pt-20">
        <div class="relative flex items-start pt-12 pb-12 m-4 overflow-hidden bg-center bg-cover  rounded-xl" style={{backgroundImage: `url('/images/old-woman.jpg')`}}>
          <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-green-900 to-lime-800 opacity-60"></span>
          <div class="container z-10">
            <div class="flex flex-wrap justify-center -mx-3">
              <div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                <h1 class="mt-12 mb-2 text-white">Food Item Description</h1>
                <p class="text-white">Description of the food item</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <ItemDetails item={{
            image: '/img/bruce-mars.jpg',
            name: 'Organic Avocados',
            postedDate: 'April 15, 2024',
            location: 'Farmers Market',
            quantity: '10 pieces',
            description: 'Fresh, organic avocados picked from local farms. Perfect for salads, guacamole, or sandwiches.'
            }}></ItemDetails>
        </div>
      </section>
  )
}

export default ItemSingle