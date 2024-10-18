import pants_img1 from "@/assets/items/pants/pants1.webp"
import pants_img2 from "@/assets/items/pants/pants2.webp"
import pants_img3 from "@/assets/items/pants/pants3.webp"
import pants_img4 from "@/assets/items/pants/pants4.webp"
import pants_img5 from "@/assets/items/pants/pants5.webp"
import girl from "@/assets/items/pants/pants-girl.webp"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function PantsPage() {
    const size = ["S", "M", "L"];
    const imgs = [pants_img5, pants_img2, pants_img3, pants_img4]

    return (
        <>
            <title>Muiraje Pants</title>
            <ItemPage size={size} imgs={imgs} title="Catalog/Pants" itemName="COZY OVERSIZE GRAY PANTS UNISEX"
                      about1="Ожидание 2-3 недели. Изготавливаюсь непосредственно в Санкт-Петербурге :)"
                      about2="Идеально подхожу для расслабленного вечера после рабочего дня. 
Хлопок 100%."
                      price={5888}>
                <Image unoptimized src={girl} alt="" className="absolute bottom-0 sm:right-10 sm:bottom-40 sm:w-96 md:w-[30rem] md:bottom-72"/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

