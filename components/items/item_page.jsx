"use client"

import { GreyBar } from "@/components/items/grey_bar"
import { MyCaruel } from "@/components/items/carusel";
import { WinButton } from "@/components/mini_btn"
import {Popup} from "@/components/popup.jsx";

import { useCart } from "@/app/store.js"

import React, {startTransition} from 'react';
import { useState } from "react";
import Image from "next/image";

export function ItemPage({ children, size = [], title="", itemName="", imgs=[], about1="", about2="", price= 0 }) {
    // const size = ["S", "M", "L", "XL", "XLL"];
    const addItem = useCart((state) => state.addToCart)
    const [popupOpen, setPopup] = useState(false)

    const [selSize, setSize] = useState("");
    const handleOpen = (s) => selSize === s ? setSize("") : setSize(s);

    const canAddItem = ((selSize !== "") || (size.length === 0));

   return (
        <>
            <div className="   relative bg-gradient-dark text-white overflow-auto h-screen">
                <div className="relative pb-64 ">
                    <GreyBar title={title}  />
                    <h1 className=" text-center text-4xl sm:text-5xl">
                        {itemName}
                    </h1>

                    <div>
                    </div>

                    <div className="sm:flex md:px-10">
                        <div className=" flex justify-center">
                            <div className="w-full px-4 sm:w-[400px]">
                                <MyCaruel>
                                    {imgs.map((p, index) =>
                                        <div key={index}>
                                            <Image alt="" src={p} />
                                        </div>
                                    )}
                                </MyCaruel>
                            </div>
                        </div>

                        <div className="text-2xl mx-3 text-in">
                            <p className="z-20">
                            WAIT FOR ME: <br/>
                            {about1}
                            </p>
                            <p className=" my-5">
                                ABOUT ME: <br/>
                                {about2}
                            </p>

                            <p>
                                MY PRICE: <br/>
                                {price} руб.
                            </p>
                        </div>

                        {children}

                    </div>

                    <div className="w-full flex justify-center text-center">
                        <div className="z-20 ">
                            <WinButton onClick={() => canAddItem ? addItem({name: itemName, price: price, size: selSize, img: imgs[0]}) : setPopup(true)}>I want it!</WinButton>

                            {(size.length !== 0) && "Choose your size"}
                            <div className="flex justify-center gap-5 text-2xl ">
                                {size.map( (s, index) => <button data-select={selSize === s} className=" data-[select=true]:underline" key={index} onClick={() => handleOpen(s)}>{s}</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {popupOpen && <Popup setOpen={setPopup} msg="Сначала нужно выбрать размер"/>}

        </>
    )
}