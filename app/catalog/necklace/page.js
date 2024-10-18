import necklace1 from "@/assets/items/necklace/necklace1.webp"
import necklace2 from "@/assets/items/necklace/necklace2.webp"
import necklace3 from "@/assets/items/necklace/necklace3.webp"
import necklace4 from "@/assets/items/necklace/necklace4.webp"
import necklace5 from "@/assets/items/necklace/necklace5.webp"
import necklace6 from "@/assets/items/necklace/necklace6.webp"
import girl from "@/assets/items/pants/pants-girl.gif"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function NecklacePage() {
    const size = ["ONE SIZE"];
    const imgs = [necklace6, necklace1, necklace2, necklace3, necklace4, necklace5]

    return (
        <>
            <title>Muiraje Pants</title>
            <ItemPage size={size} imgs={imgs} title="Catalog/Pants" itemName="COZY SILVER NECKLACE UNISEX"
                      about1="Ожидание 3-4 недели. Украшение изготавливается под заказ :)"
                      about2="Аксессуар для завершения вашего делового образа. Превосходный выбор для любой деловой встречи или презентации. Коллеги будут в шоке.
            Состав: серебро 925. Длина цепочки: 45 см.
            Размер подвески: 2.4 см - длина, 3.3 см - высота."
            price={8888}>

                <Image unoptimized src={girl} alt="" className="absolute bottom-0 sm:right-10 sm:bottom-40 sm:w-96 md:w-[30rem] md:bottom-72"/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

