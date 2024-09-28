import {Window} from "@/components/documents/window.jsx";

export default function ReturnsPage() {
    return (
        <>
            <title>Muiraje Returns</title>
            <Window title="Documents/Returns">
                <div className="text-center flex flex-col items-center ">
                    <h1 className="text-7xl sm:text-9xl leading-[100px]">
                        Возврат.
                    </h1>
                    <p className="text-xl text-left w-10/12 leading-5">
                        Вы вправе отказаться от товара надлежащего качества в течение 8 календарных дней после получения, в случае если произошла ошибка не с вашей стороны. Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид (этикетки; ярлыки, содержащие характеристики товара; оригинальная упаковка), потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара. Товары, поставляемые в комплекте, необходимо возвращать в том же комплекте. При возврате товаров надлежащего качества стоимость доставки и комиссия за перевод платежа не возмещаются. Возврату не подлежат товары надлежащего качества, согласно Постановлению Правительства РФ от 19 января 1998 г. N 55.

                        Для возврата товара Вы можете обратиться в Поддержку сайта: @care224radge
                    </p>
                </div>
            </Window>
        </>

    )
}