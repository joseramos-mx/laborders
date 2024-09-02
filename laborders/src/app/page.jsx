"use client"
import Image from "next/image";
import { useState } from "react";
import Odontogram from "./components/odontograma";
import ColorPalette from "./components/color";
import colors from "./data/colors";


export default function Home() {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div className="flex mx-auto">
      <Image 
          src="./images/logo.webp"  // This path assumes logo.png is directly under the public/images folder
          alt="logo"
          width={200}            // Specify the width
          height={100}           // Specify the height
          unoptimized={true}     // Use this prop if you face issues with image optimization
        />
      </div>

  <form action="#" method="POST" class="mx-auto mt-16 max-w-xxl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    <div className=" sm:col-span-2 block ">
        <h1 className="font-semibold text-xl">Formulario de orden de trabajo</h1>
      </div>
      <div className="text-sm">
          <p>hola haz tu pedido</p>
        </div>
        <div>

        </div>
      <div>
        <label for="nombre" class="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
        <div class="mt-2.5">
          <input type="text" name="Nombre" id="nombre" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="paciente" class="block text-sm font-semibold leading-6 text-gray-900">Paciente, referencia o caso</label>
        <div class="mt-2.5">
          <input type="text" name="paciente" id="paciente" autocomplete="paciente" class="block w-full rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="protesis" class="block text-sm font-semibold leading-6 text-gray-900">Prótesis</label>
        <div class="mt-2.5">
          <select name="protesis" id="protesis" class="block w-full rounded-md border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Fija</option>
              <option>Removible</option>
              <option>Sobre implantes</option>
              <option>Prostodoncia</option>
              <option>Ortodoncia</option>
          </select>       
         </div>
      </div>
      <div class="sm:col-span-2">
        <label for="tipos" class="block text-sm font-semibold leading-6 text-gray-900">Tipos</label>
        <div class="mt-2.5">
          <select name="tipos" id="tipos" class="block w-full rounded-md border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Corona</option>
              <option>Puente</option>
              <option>Inscrustación</option>
              <option>Carillas</option>
              <option>Provisional</option>
          </select>       
         </div>
      </div>
      <div class="sm:col-span-2">
        <label for="material" class="block text-sm font-semibold leading-6 text-gray-900">Material</label>
        <div class="mt-2.5">
          <select name="material" id="protesis" class="block w-full rounded-md border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Zirconio monolítico</option>
              <option>Zirconio estratificado</option>
              <option>PMMA</option>
              <option>PEEK</option>
              <option>Disilicato de litio</option>
          </select>       
         </div>
      </div>
      <div class="sm:col-span-2">
        <label for="protesis" class="block text-sm font-semibold leading-6 text-gray-900">Registros</label>
        <div class="mt-2.5">
          <select name="protesis" id="registros" class="block w-full rounded-md border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Plancha de articulación</option>
              <option>Mordida en silicon</option>
              <option>Otro</option>
          </select>       
         </div>
      </div>
      <div class="sm:col-span-2">
        <label for="piezas" class="block text-sm font-semibold leading-6 text-gray-900">Piezas (odontograma)</label>
        <div class="mt-2.5">
          <Odontogram />
        
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Ponticos</label>
        <div class="mt-2.5">
          <select name="ponticos" id="ponticos" className="px-3.5 py-5 block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus_ring-2 focus:ring-indigo-600 sm_text-sm sm_leading-6">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>


            </select>        
          </div>
      </div>
      <div className="sm:col-span-2">
      <label for="color" class="block text-sm font-semibold leading-6 text-gray-900">Color</label>
      <ColorPalette colors={colors} />
      </div>
      <div class="sm:col-span-2">
        

      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
    </div>
  </form>
</main>)
}