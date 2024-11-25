
const Pronav = () => {
  return (
    <div className="mt-5 max-w-sm mx-auto bg-yellow-100 rounded-lg shadow-lg overflow-hidden md:max-w-md lg:max-w-lg">
        <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1511122383179-2920bf1e7c52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vZGVscyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="lion images" />
        <div className="p-4">
          <h2 className="text-2xl font-semibold font-serif text-green-800 sm:text-3xl md:text-2xl">Tera Cota</h2>
          <p className="text-yellow-700 font-serif mt-4 sm:text-sm  md:text-base">Lorem ipsum dolor, sit consectetur adipisicing elit. Voluptatem, tenetur saepe quam accusamus sequi delectus.
          </p>
          <button className="uppercase mt-4 border px-8 py-2 border-green-900 rounded-sm tracking-wide text-yellow-500 bg-slate-700 hover:bg-slate-900 hover:border-none hover:rounded-md">Explore</button>
        </div>
    </div>
  )
}

export default Pronav