import hoodie_img1 from "@/assets/items/hoodie/hoodie1.webp"
import hoodie_img2 from "@/assets/items/hoodie/hoodie2.webp"
import hoodie_img3 from "@/assets/items/hoodie/hoodie3.webp"
import hoodie_img4 from "@/assets/items/hoodie/hoodie4.webp"
import hoodie_img5 from "@/assets/items/hoodie/hoodie5.webp"
import girl from "@/assets/items/hoodie/hoodie-girl.webp"

import {ItemPage} from "@/components/items/item_page";
import Image from "next/image";

export default function CatalogPage() {
    const size = ["S", "M", "L", "XL", "XLL"];
    const imgs = [hoodie_img1, hoodie_img2, hoodie_img3, hoodie_img4, hoodie_img5]

    return (
        <>
            <title>Muiraje Hoodie</title>
            <ItemPage size={size} imgs={imgs} title="Catalog/Hoodie" itemName="COZY OVERSIZE GRAY HOODIE UNISEX"
                      about1="Ожидание 4-5 дней. Изготавливаюсь непосредственно в Санкт-Петербурге :)"
                      about2="Подчеркну вашу деловую сторону, обеспечу уют в офисной обстановке.
                    50% хлопок, 50% полиэстер, плотность: 305 г/м²."
                      price={4824}>

                <Image unoptimized width={876} height={1843} src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 "/>
            </ItemPage>
        </>
    )
}
