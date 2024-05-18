export default function Home() {
  return (
  //BLOQUE PRINCIPAL DE COMPONENTES Y COLOR DE FONDO
    <main className="justify-center p-20 min-h-screen bg-gradient-to-b from-emerald-300 from-20% via-emerald-400 via-65% to-emerald-900 to-100%">
      
      <div className="justify-center">
        <div className="flex justify-center w-200 p-1">
          <img src="images/LogoBalanpyBlanco.png" alt="Balanpy Logo" width={60} height={60}></img>
        </div>
        <div className="flex justify-center p-4">
          <h1 className=" font-bold text-5xl text-white text-center">Registra a tu mascota</h1>
        </div>
      </div>
      
      <section className="flex justify-center items-center mx-auto my-20 grid-cols-4 gap-40 bg-white rounded-full w-[680px] h-4">
        <button href="/" className="group flex justify-center p-2 border-4 rounded-full drop-shadow-x2 bg-emerald-600">
          <svg width="2em" height="2em"></svg>
          <span className="absolute opacity-100 group-hover:-translate-y-10 duration-700 text-2xl">1</span>
        </button>
        <button href="/" className="group flex justify-center p-2 border-4 rounded-full drop-shadow-x2 bg-emerald-600">
          <svg width="2em" height="2em"></svg>
          <span className="absolute opacity-100 group-hover:-translate-y-10 duration-700 text-2xl">2</span>
        </button>
        <button href="/" className="group flex justify-center p-2 border-4 rounded-full drop-shadow-x2 bg-emerald-600">
          <svg width="2em" height="2em"></svg>
          <span className="absolute opacity-100 group-hover:-translate-y-10 duration-700 text-2xl">3</span>
        </button>
        <button href="/" className="group flex justify-center p-2 border-4 rounded-full drop-shadow-x2 bg-emerald-600">
          <svg width="2em" height="2em"></svg>
          <span className="absolute opacity-100 group-hover:-translate-y-10 duration-700 text-2xl">4</span>
        </button>
      </section>
        
        
      
      <section className="flex justify-center items-center">
        <div className="p-12 mx-auto my-10 rounded-2xl w-auto bg-white max-w-[1600px]">
          <div className="flex justify-center">
            
            <div className="border-emerald-600 border-4 rounded-2xl w-72 h-auto mx-12">
              <div className="text-center w-40 h-40 mx-auto my-8 border-emerald-600 border-4 rounded-full">
                <button className="text-emerald-600 text-9xl">+</button>
              </div>
              <p className="text-emerald-600 text-2xl text-center m-4">Sube la imagen de tu mascota</p>
              <p className="text-emerald-600 text-center m-8">La imagen debe estar en formato .jpg o .png</p>
            </div>
            
            <div className="border-emerald-600 border-4 rounded-2xl w-full mx-12 ">
              <div className="grid grid-cols-3 gap-28 mx-12 my-4">
                <label className="text-black">Nombre de tu mascota
                  <input placeholder="Nombre" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                <label className="text-black">Raza de tu mascota
                  <input placeholder="Raza" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                <label className="text-black">Fecha de nacimiento
                  <input placeholder="Fecha" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                  
              </div>
              <div className="grid grid-cols-4 gap-20 mx-12 my-4 ">
                <label className="text-black">Sexo
                  <input placeholder="Sexo" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                <label className="text-black">Color
                  <input placeholder="Color" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                <label className="text-black">¿Esta esterilizad@?
                  <input placeholder="Si/No" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                <label className="text-black">Nº Chip de la mascota
                  <input placeholder="Chip" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
              </div>

              <div className="grid grid-cols-3 gap-28 mx-12 my-4">
                <label className="text-black">Alergias
                  <input placeholder="Alergias" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                <label className="text-black">Vacunas
                  <input placeholder="Vacunas" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
                <label className="text-black">Enfermedades
                  <input placeholder="Enfermedades" className="p-5 text-xs text-zinc-700 font-medium"></input>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}