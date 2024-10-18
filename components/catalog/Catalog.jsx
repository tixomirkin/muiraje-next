import top from "@/assets/catalog/top.webp"
import hoodie from "@/assets/catalog/hoodie.webp"
import pants from "@/assets/catalog/pants.webp"
import fire from "@/assets/catalog/fire.webp"
import perc from "@/assets/catalog/перчатки.webp"
import podv from "@/assets/catalog/necklace.webp"

import {Popup} from "../popup.jsx";

import Link from "next/link";
import Image from "next/image";
import NecklacePage from "@/app/catalog/necklace/page";

function Item({ img, name, price, page }) {
    return (
        <Link className="hover:bg-stone-100 m-2 leading-3" href={"/catalog/" + page}>
            <Image placeholder="empty" loading="lazy" className="mb-2" src={img} alt={name} />
            <p className="">{name} </p>
            <p>{price} руб.</p>
        </Link>

    )
}


export function Catalog() {
    return (
        <>
        
            <div className="mx-3 mb-3 bg-white border-r-2 border-b-2 border-stone-100 overflow-auto flex-1">
                <div className=" border-l-2 border-t-2 border-stone-400">
                    <div className="border-r-2 border-b-2 border-stone-300">
                        <main className="border-l-2 border-t-2 border-stone-600 p-4 grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4">
                            <Item img={hoodie} page="hoodie" name="COZY OVERSIZE GRAY HOODIE UNISEX" price="4824" />
                            <Item img={pants} page="pants" name="COZY OVERSIZE GRAY PANTS UNISEX" price="5888" />
                            <Item img={top} page="top" name="COZY GRAY TANK TOP UNISEX" price="2224" />
                            <Item img={perc} name="COZY DOUBLE-LAYER GLOVES UNISEX" price="1624" />
                            <Item img={podv} page="necklace" name="COZY SILVER NECKLACE UNISEX" price="8888" />
                            <Item img={fire} page="lighter" name="COZY BLUE AND RED LIGHTERS" price="224"/>
                        </main>
                    </div>
                </div>
            </div>

        </>
    )
}