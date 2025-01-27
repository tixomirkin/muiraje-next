"use client"

import { GreyBar } from "@/components/items/grey_bar"
import { MyCaruel } from "@/components/items/carusel";
import { WinButton } from "@/components/mini_btn"
import {PopupWarn} from "@/components/popupWarn.jsx";

import { useCart } from "@/app/store.js"

import { useState } from "react";
import Image from "next/image";
import FullCarusel from "@/components/items/fullCarusel";
import {PopupToCart} from "@/components/popupToCart";

export function ItemPage({ children, size = [], title="", itemName="", imgs=[], about1="", about2="", price= 0 }) {
    // const size = ["S", "M", "L", "XL", "XLL"];
    const addItem = useCart((state) => state.addToCart)
    const [popupOpen, setPopup] = useState(false)
    const [popupOpenCart, setPopupCart] = useState(false)
    const [selSize, setSize] = useState("");

    const [open, setOpen] = useState(false)
    const [selImg, setSelImg] = useState(0)

    const handleOpen = (s) => selSize === s ? setSize("") : setSize(s);

    const canAddItem = ((selSize !== "") || (size.length === 0));

    const addToCartAndOpenPopup = () => {
        if (canAddItem) {
            addItem({name: itemName, price: price, size: selSize, img: imgs[0]})
            setPopupCart(true)
            return
        }
        setPopup(true)
    }

   return (
        <>
            <FullCarusel imgs={imgs} open={open} setOpen={setOpen} selImg={selImg}/>
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
                                        <div onClick={() => {
                                            setSelImg(index)
                                            setOpen(true)
                                        }} key={index}>
                                            <Image className="" alt="" src={p}/>
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
                            <WinButton onClick={addToCartAndOpenPopup}>I want it!</WinButton>

                            {(size.length !== 0) && "Choose your size"}
                            <div className="flex justify-center gap-5 text-2xl ">
                                {size.map( (s, index) => <button data-select={selSize === s} className=" data-[select=true]:underline" key={index} onClick={() => handleOpen(s)}>{s}</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {popupOpen && <PopupWarn setOpen={setPopup} msg="Сначала нужно выбрать размер" btn_msg="Окей, ща выберу"/>}
            {popupOpenCart && <PopupToCart setOpen={setPopupCart} msg="Товар в корзине!" btn_msg="Окей, ща выберу"/>}

        </>
    )
}