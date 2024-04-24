import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";



const productsInCart=[
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
]


export default function () {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar orden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/* carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Ajustar elementos</span>
                        <Link href='/cart' className="underline mb-5">
                            Ajustar elementos
                        </Link>


                    {/* items */}

                    {
                        productsInCart.map(product=>(
                            <div key={product.slug} className="flex mb-5">
                                <Image src={`/products/${product.images[0]}`}
                                width={100}
                                height={100}
                                alt={product.title}
                                className="mr-5 rounded"
                                style={{
                                    width:'100',
                                    height:'100'
                                }}
                                />

                                <div>
                                    <p>{product.title}</p>
                                    <p>${product.price} x 3</p>
                                    {/* <QuantitySelector quantity={3} /> */}
                                    <p className="font-bold">Subtotal: ${product.price * 3}</p>

                                    <button className="underline mt-3">
                                        Remover
                                    </button>
                                </div>

                            </div>



))
}

            </div>

                    {/* checkout */}
                    <div className="bg-white rounded-xl shadow-xl p-7">
                        <h2 className="text-2xl font-bold mb-2" >Direccion de entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">Hiram Galarza</p>
                            <p>123 Street Name New Mexico</p>
                            <p>Col Centro</p>
                            <p>Constitucion</p>
                            <p>20001</p>
                            <p>tel 123-456-789</p>

                        </div>
                        {/* divider */}
                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />



                        <h2 className="text-2xl mb-2">Resumen de orden</h2>
                        <div className="grid grid-cols-2">
                            <span>No. Productos</span>
                            <span className="text-right">3 articulos</span>

                            <span>Subtotal</span>
                            <span className="text-right">$100</span>

                            <span>Impuestos (15%)</span>
                            <span className="text-right">$100</span>
                            <span className="mt-5 text-2xl " >Total:</span>
                            <span className="mt-5 text-2xl text-right">$100</span>

                        </div>

                        <div className="mt-5 mb-2 w-full">
                            <Link 
                            className="flex btn-primary justify-center" 
                            href={'/checkout/address'}>
                            Checkout
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
           
    );
}