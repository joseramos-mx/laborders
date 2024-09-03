import React from "react";

export default function Prothegrid() {
    return(
        <div className="flex min-h-screen flex-col items-center p-6 bg-[#121c21]">
            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1000px] w-full">
                <div className="p-6 bg-gradient-to-r from-[#1264fb] to-[#00b190] text-white rounded-[16px] flex flex-col gap-1 col-span-1 md:col-span-2 row-span-2">
                    <span className="text-[24px]"> Prótesis <br /></span>
                    <span className="text-[60px] md:text-[80px] lg:text-[120px] ">FIJA</span>
                    <span className="text-[14px] mt-auto">
                        Leer más →
                    </span>
                </div>
                <div className="p-6  bg-[#f0f0f0] -blue-500 rounded-[16px] flex flex-col gap-1">
                    <span className="text-[24px] font-bold">
                        Corona
                    </span>
                    <span className="text-[14px]">
                        Nuestras coronas son manufacturadas <br /> con las mejores tecnologías
                    </span>
                </div>
                <div className="p-6  bg-[#f0f0f0] rounded-[16px] flex flex-col gap-1">
                    <span className="text-[24px] font-bold">
                        Puente
                    </span>
                    <span className="text-[14px]">
                        Nuestras coronas son manufacturadas <br /> con las mejores tecnologías
                    </span>
                </div>
                <div className="p-6  bg-[#f0f0f0] rounded-[16px] flex flex-col gap-1">
                    <span className="text-[24px] font-bold">
                        Incrustación
                    </span>
                    <span className="text-[14px]">
                        Nuestras coronas son manufacturadas <br /> con las mejores tecnologías
                    </span>
                </div>
                <div className="p-6  bg-[#f0f0f0] rounded-[16px] flex flex-col gap-1">
                    <span className="text-[24px] font-bold">
                        Carilla
                    </span>
                    <span className="text-[14px]">
                        Nuestras coronas son manufacturadas <br /> con las mejores tecnologías
                    </span>
                </div>
                <div className="p-6  bg-[#f0f0f0] rounded-[16px] flex flex-col gap-1 col-span-1 md:col-span-2 lg:col-span-1">
                    <span className="text-[24px] font-bold">
                        Provisional
                    </span>
                    <span className="text-[14px]">
                        Nuestras coronas son manufacturadas <br /> con las mejores tecnologías
                    </span>
                </div>
            </section>
        </div>
    );
}
