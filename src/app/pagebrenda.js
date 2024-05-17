import React from "react";
import Image from "next/image";


export default function RegisterPage(){
    return(
        <main className="flex justify-center p-8 min-h-screen bg-gradient-to-b from-emerald-300 from-20% via-emerald-400 via-65% to-emerald-900 to-100%">
            <div className="flex-none w-16 h-14 p-1">
                <Image
                    src="/logo-white-image.png"
                    alt="Balanpy Logo"
                    width={60}
                    height={60}>
                </Image>
                <div className="p-4 mt-4 w-96 h-16 bg-slate-300">
                    <h1 className="font-bold text-3xl text-white">Completa el Registro</h1>
                </div>
            </div>


            <div className="flex p-6 mt-40 rounded-3xl w-3/5 h-3/5 bg-white">
                <div className="flex flex-wrap gap-2 pt-4 place-content-center">
                    <div className="w-48 h-14">
                        <label className="p-1 text-xs text-zinc-700 font-medium">
                            Nombre
                        </label>
                        <input
                            placeholder="Introduce tu nombre"
                            className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-xs text-zinc-700 font-medium">
                            Apellido 1
                        </label>
                        <input
                            placeholder="Introduce tu primer apellido"
                            className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                         <label className="p-1 text-xs text-zinc-700 font-medium">
                            Apellido 2
                        </label>
                        <input
                            placeholder="Introduce tu segundo apellido"
                            className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-xs text-zinc-700 font-medium">
                            Correo Electrónico
                        </label>
                        <input
                            placeholder="Introduce un correo electrónico"
                            className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-xs text-zinc-700 font-medium">
                            Contraseña
                        </label>
                        <input
                            placeholder="Introduce una contraseña"
                            className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                    <div className="w-48 h-14">
                        <label className="p-1 text-xs text-zinc-700 font-medium">
                            Repetir Contraseña
                        </label>
                        <input
                            placeholder="Introduce de nuevo la contraseña"
                            className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                            focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>


                    <div className="flex flex-wrap gap-4 place-content-center">
                        <div className="w-72 h-14">
                            <label className="p-1 text-xs text-zinc-700 font-medium">
                                Domicilio
                            </label>
                            <input
                                placeholder="Introduce tu domicilio completo"
                                className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                        <div className="w-72 h-14">
                            <label className="p-1 text-xs text-zinc-700 font-medium">
                                Localidad
                            </label>
                            <input
                                placeholder="Introduce tu localidad"
                                className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                    </div>


                    <div className="flex flex-wrap gap-2 place-content-center">
                        <div className="w-48 h-14">
                            <label className="p-1 text-xs text-zinc-700 font-medium">
                                Provincia
                            </label>
                            <input
                                placeholder="Introduce tu provincia"
                                className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                        <div className="w-48 h-14">
                            <label className="p-1 text-xs text-zinc-700 font-medium">
                                Estado
                            </label>
                            <input
                                placeholder="Introduce tu estado o país"
                                className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                        <div className="w-48 h-14">
                            <label className="p-1 text-xs text-zinc-700 font-medium">
                                Código Postal
                            </label>
                            <input
                                placeholder="Introduce tu código postal"
                                className="mt-0 block w-full px-2 py-1 bg-transparent border border-slate-200 rounded-lg text-xs text-slate-400 shadow-sm placeholder-slate-200
                                focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-slate-200"
                            />
                        </div>
                    </div>


                    <div className="flex flex-wrap gap-2 pt-4 place-content-center">
                        <div className="w-40 h-12 p-1">
                        <button type="submit" className="w-full mt-1 px-2 py-1 bg-transparent border border-emerald-400 rounded-lg text-xs text-emerald-400 shadow-sm placeholder-slate-200
                            focus:outline-none hover:bg-emerald-100">
                            Cancelar
                        </button>
                        </div>
                        <div className="w-40 h-12 p-1">
                        <button type="submit" className="w-full mt-1 px-2 py-1 bg-emerald-400 border-emerald-400 rounded-lg text-xs text-white shadow-sm placeholder-slate-200
                            focus:outline-none hover:bg-emerald-300">
                            Regístrate
                        </button>
                        </div>
                    </div>    
                </div>
            </div>


        </main>
    );
}
