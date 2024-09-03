"use client"
import Image from "next/image";
import { useState } from "react";
import Odontogram from "./components/odontograma";
import ColorPalette from "./components/color";
import colors from "./data/colors";
import FileUpload from "./components/filedrop";
import AuroraHero from "./components/hero";
import ProsthesisGrid, { FirstCard } from "./components/prothesisgrid";
import BentoGrid from "./components/prothesisgrid";
import { Grid } from "@react-three/drei";
import Prothegrid from "./components/prothesisgrid";


export default function Home() {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    
  };

  return (
    
    <main className="flex min-h-screen flex-col justify-between p-0">

<div className="w-full h-screen">
  <AuroraHero />
</div>


<div id="formsection" className="flex justify-center items-center min-h-screen bg-[#121c21]">
      <div className="w-full max-w-[1100px]">
        <Prothegrid />
      </div>
    </div>


  <form action="#" method="POST" class="mx-auto mt-16 max-w-xxl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

      <div>

      </div>
      <div>

      </div>
      <div>
        <label for="nombre" class="text-2xl font-bold my-5">Nombre</label>
        <div class="mt-2.5">
          <input type="text" name="Nombre" id="nombre" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="paciente" class="text-2xl font-bold my-5">Paciente, referencia o caso</label>
        <div class="mt-2.5">
          <input type="text" name="paciente" id="paciente" autocomplete="paciente" class="block w-full rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="protesis" class="text-2xl font-bold my-5">Prótesis</label>
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
        <label for="tipos" class="text-2xl font-bold my-5">Tipos</label>
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
        <label for="material" class="text-2xl font-bold my-5">Material</label>
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
        <label for="protesis" class="text-2xl font-bold my-5">Registros</label>
        <div class="mt-2.5">
          <select name="protesis" id="registros" class="block w-full rounded-md border-0 px-3.5 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Plancha de articulación</option>
              <option>Mordida en silicon</option>
              <option>Otro</option>
          </select>       
         </div>
      </div>
      <div class="sm:col-span-2">
        <label for="piezas" class="text-2xl font-bold my-5">Piezas (odontograma)</label>
        <div class="mt-2.5">
          <Odontogram />
        
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="text-2xl font-bold my-5">Ponticos</label>
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
      <div className="sm:col-span-2" >
      <label for="color" class="text-2xl font-bold my-5">Color</label>
      <ColorPalette colors={colors} />
      </div>
      <div class="sm:col-span-2">

<div>
  
<div>
<label for="color" class="text-2xl font-bold my-5">Tipos de archivos</label>
</div>
<div>

<div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
</div>

</div>


</div>

      <div className="container mx-auto w-full">
      <h1 className="text-2xl font-bold my-5">Sube tus archivos</h1>
      <FileUpload />
    </div>

        

      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
    </div>
  </form>
</main>)
}