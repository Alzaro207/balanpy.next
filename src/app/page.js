export default function Home() {
  return (
  //BLOQUE PRINCIPAL DE COMPONENTES Y COLOR DE FONDO
    <main className="justify-center p-20 min-h-screen bg-gradient-to-b from-emerald-300 from-20% via-emerald-400 via-65% to-emerald-900 to-100%">
      
  //LOGO Y TITULO
      <div className="justify-center">
        <div className="flex justify-center w-200 p-1">
          <img src="images/LogoBalanpyBlanco.png" alt="Balanpy Logo" width={60} height={60}></img>
        </div>
        <div className="flex justify-center p-4">
          <h1 className=" font-bold text-5xl text-white text-center">Registra a tu mascota</h1>
        </div>
      </div>
      
  //BARRA DE PASOS
      <div className="">
        <div className="flex justify-center p-8 mt-4 ">
          <img src="images/Pasos1.png"></img>
        </div>
      </div>
      
  //BLOQUE DE DATOS
      <div className="p-8 mt-20 rounded-2xl w-100 bg-white">
        <div className="flex justify-center">
          <div>
            <p className="text-black">prueba1</p>
          </div>
          <div>
            <p className="text-black">prueba2</p>
          </div>
        </div>
      </div>
    </main>
  );
}