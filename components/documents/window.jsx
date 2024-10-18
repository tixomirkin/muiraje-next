import {BaseBar} from "../base_bar.jsx";

export function WindowBorder({children}) {
    return (
        <>
                <div className="w-full h-full border-stone-700 border-r-2 border-b-2 ">
                    <div className="w-full h-full border-stone-200 border-l-2 border-t-2">
                        <div className="w-full h-full border-stone-500 border-r-2 border-b-2">
                            <div className="w-full h-full border-stone-100 border-l-2 border-t-2 px-[2px] overflow-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
        </>

    )
}

export function Window({children, title="", black=false}) {
    return (
        <>
            <div className={`h-screen overflow-auto bg-black ${black && "bg-[#E0DFDD]" }`}>
                <div className="relative px-2 pt-6 md:px-10 text-white sm:flex  h-full justify-center items-center">

                    <div className="relative  h-fit bg-stone-300 text-black w-full">
                        <WindowBorder>
                            <BaseBar title={title} bg="blue" linkTo={"/catalog"}/>
                            <main className={`h-full py-8 flex items-center justify-center ${black && "bg-black text-white" }`}>
                                {children}
                            </main>
                        </WindowBorder>
                    </div>

                </div>
            </div>

        </>

    )
}