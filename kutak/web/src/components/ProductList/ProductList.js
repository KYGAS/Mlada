const ProductList = () => {
  return (
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 id="products-heading" class="sr-only">Products</h2>
  
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <a href="#" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>Focus Paper Refill</h3>
            <p>$13</p>
          </div>
          <p class="mt-1 text-sm italic text-gray-500">3 sizes available</p>
        </a>
  
        <a href="#" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg" alt="Paper card sitting upright in walnut card holder on desk." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>Focus Card Holder</h3>
            <p>$64</p>
          </div>
          <p class="mt-1 text-sm italic text-gray-500">Walnut</p>
        </a>
  
        <a href="#" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg" alt="Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>Focus Carry Case</h3>
            <p>$32</p>
          </div>
          <p class="mt-1 text-sm italic text-gray-500">Heather Gray</p>
        </a>
      </div>
    </div>
  </div>
  
  )
}

export default ProductList
