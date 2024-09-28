import top_img1 from "@/assets/items/top/top1.webp"
import top_img2 from "@/assets/items/top/top2.webp"
import top_img3 from "@/assets/items/top/top3.webp"
import top_img4 from "@/assets/items/top/top4.webp"
import top_img5 from "@/assets/items/top/top5.webp"
import girl from "@//assets/items/top/top-girl.gif"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function TopPage() {
    const size = ["S", "M", "L", "XL"];
    const imgs = [top_img5, top_img1, top_img2, top_img3, top_img4]

    return (
        <>
            <title>Muiraje Top</title>
            <ItemPage size={size} imgs={imgs} title="Catalog/Top" itemName="COZY GRAY TANK TOP UNISEX"
                      about1="Ожидание 1 неделя. Изготавливаюсь непосредственно в Санкт-Петербурге :)"
                      about2="Легко сочетаюсь с элементами гардероба, помогая создавать разнообразные образы. (Выберите длину, которая подходит вам.) Хлопок 100%. "
                      price={2224}>
                <Image unoptimized src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 "/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

