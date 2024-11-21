'use client';

import { useAppSelector } from "@/store/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count );

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget 
            title={ `${isCart}` }
            subTitle={"Carrito de compras"}
            label={"Contador"}
            icon={ <IoCartOutline size={ 70 } className="text-blue-600"/> }
            href="/dashboard/counter"
            />
        </div>)
}
