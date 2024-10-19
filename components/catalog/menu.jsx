"use client"

import all from "@/components-assets/icons/menu-ico/all.png"
import hoodie from "@/components-assets/icons/menu-ico/hoodie.png"
import acc from "@/components-assets/icons/menu-ico/Acc.png"
import pants from "@/components-assets/icons/menu-ico/pants.png"
import top from "@/components-assets/icons/menu-ico/top.png"

import cart_empty from "@/components-assets/cart/cart_empty.svg" // TODO convert to png
import cart_full from "@/components-assets/cart/cart_full.svg" // TODO convert to png

import {useCart} from "@/app/store";
import Link from "next/link";
import Image from "next/image";

function MenuItem({ icon, name, className }) {
    return (
        <div className={"text-xl text-center w-10 " + className}>
            <Image className="min-h-14 min-w-full h-full render" src={icon} alt="" />
            {name}
        </div>
    )
}


const CartBtn = () => {
    const cart = useCart((state) => state.cart)
    const icon = cart.length == 0 ? cart_empty : cart_full

    return (
        <Link href="../cart">
        <div className="text-xl text-center">
            <Image className="h-16 render" src={icon} alt=""/>
             Корзина

        </div>
        </Link>
    )
}

export function Menu() {
    return (
        <>
            <div className="flex justify-between mx-4 ">
                <div className="flex justify-center items-end gap-5 overflow-x-auto">
                    <MenuItem name="All" icon={all}/>
                    <MenuItem name="Accery" icon={acc}/>
                    <MenuItem name="Hoodie" icon={hoodie}/>
                    <MenuItem className=" sm:block" name="Pants" icon={pants}/>
                    <MenuItem className=" sm:block mr-4" name="Top" icon={top}/>
                </div>
                <CartBtn/>
            </div>
        </>
    )
}