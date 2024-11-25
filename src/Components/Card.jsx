
const Card = () => {
  return (
    <div className=" relative max-w-sm mx-auto mt-4 bg-white rounded-lg shadow-lg overflow-hidden md:max-w-md lg:max-w-lg">
        <img  className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1511945863317-d60e146e9016?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sample images" />
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 sm:text-lg md:text-2xl">Lion Desi</h2>
            <p className="text-gray-600 mt-2 sm:text-sm md:text-base">This is a responsive card component built with Tailwind css. Adjust the screen to see how it adapts!</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 sm:px-3 sm:py-1">Click Me</button>
        </div>
    </div>
  )
}

export default Card