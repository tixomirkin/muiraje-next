import lighter_img1 from "@/assets/items/lighter/lighter1.webp"
import lighter_img2 from "@/assets/items/lighter/lighter2.webp"
import lighter_img3 from "@/assets/items/lighter/lighter3.webp"
import lighter_img4 from "@/assets/items/lighter/lighter4.webp"
import girl from "@/assets/items/lighter/lighter-girl.gif"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function LighterPage() {
    const size = ["red", "blue"];
    const imgs = [lighter_img1, lighter_img2, lighter_img3, lighter_img4]

    return (
        <>
            <title>Muiraje Lighter</title>
            <ItemPage size={size} imgs={imgs} title="Catalog/Hoodie" itemName="COZY OVERSIZE GRAY HOODIE UNISEX"
                      about1="Ожидание 4-5 дней. Изготавливаюсь непосредственно в Санкт-Петербурге :)"
                      about2="Подчеркну вашу деловую сторону, обеспечу уют в офисной обстановке.
                    50% хлопок, 50% полиэстер, плотность: 305 г/м²."
                      price={224}>
                <Image unoptimized src={girl} alt="" className=" absolute -bottom-14 right-0 sm:w-[30rem] sm:bottom-10 md:bottom-36 lg:right-20"/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

