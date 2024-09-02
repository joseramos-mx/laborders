"use client"
import Image from "next/image";
import { useState } from "react";
import ToggleableRadio from '../components/ToggleableRadio'; // Ajusta la ruta según la ubicación de tu archivo

export default function Home() {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
  <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="nombre" class="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
        <div class="mt-2.5">
          <input type="text" name="Nombre" id="nombre" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="paciente" class="block text-sm font-semibold leading-6 text-gray-900">Paciente, referencia o caso</label>
        <div class="mt-2.5">
          <input type="text" name="paciente" id="paciente" autocomplete="paciente" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="protesis" class="block text-sm font-semibold leading-6 text-gray-900">Prótesis</label>
        <div class="mt-2.5">
          <select name="protesis" id="protesis" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
          <select name="tipos" id="tipos" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
          <select name="material" id="protesis" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
          <select name="protesis" id="registros" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Plancha de articulación</option>
              <option>Mordida en silicon</option>
              <option>Otro</option>
          </select>       
         </div>
      </div>
      <div className="flex items-center w-full">
      <table className="flex table-fixed border-collapse border rounded-md border-0 w-full">
        <tbody className="w-full">
          <tr>
            <td className=" p-4 w-2/4">
            <div>
              <ToggleableRadio />
            </div>
              <input type="radio" class="h-5 w-5 mr-3" checked={selected[1]} onChange={() => toggleSelection(1)} />
              <input type="radio" class="h-5 w-5 mr-3" checked={selected[0]} onChange={() => toggleSelection(0)} />

              <input type="radio" class="h-5 w-5 mr-3"/>

            </td>
            <td className=" p-4">Celda 2</td>
          </tr>
          <tr>
            <td className=" p-4">Celda 3</td>
            <td className=" p-4">Celda 4</td>
          </tr>
        </tbody>
      </table>
    </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div class="mt-2.5">
          <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div class="relative mt-2.5">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <svg class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>
          <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div class="mt-2.5">
          <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      <div class="flex gap-x-4 sm:col-span-2">
        <div class="flex h-6 items-center">
          <button type="button" class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
            <span class="sr-only">Agree to policies</span>
            <span aria-hidden="true" class="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label class="text-sm leading-6 text-gray-600" id="switch-1-label">
          By selecting this, you agree to our
          <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
        </label>
      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
    </div>
  </form>
</main>)
}