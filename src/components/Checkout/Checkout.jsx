import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Context from '../../context/CartContext.jsx';
import { db } from '../../config/firebase.js';
import { collection, Timestamp } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const emailPattern = {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Ingresa un email válido',
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { cart, getTotal, clearCart } = useContext(Context);
    const navigate = useNavigate();

    const emailValue = watch('email');

    const onSubmit = async (data) => {
        console.log('Iniciando getOrder');
        const coleccion = collection(db, 'orders');
        try {
            const order = {
                buyer: data,
                cart: cart,
                date: new Date(),
                total: getTotal(),
            };

            console.log('Fecha de la orden:', order.date);
            console.log('Total de la orden:', order.total);

            const orderRef = await addDoc(coleccion, order);

            Swal.fire({
                title: 'Gracias, por tu compra',
                text: `El numero de tu orden es: ${orderRef.id}`,
                icon: 'success',
                confirmButtonText: 'Volver al Inicio',
            }).then((result) => {
                clearCart();
                navigate('/');
            });
        } catch (error) {
            console.error('Error al guardar la orden', error);
        }
    };

    return (
        <div className="flex flex-col">
            <p className="text-[16px] leading-[26px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px] mb-[10px] mt-[30px]">
                Formulario de Registro de Compra
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-center">
                    <div className="w-5/12 pr-[10px]">
                        <div className="my-4">
                            <input
                                className="border-[1px] border-solid border-[#e4e4e4] rounded-[4px] py-[12px] px-[16px] bg-none w-full text-[#4a4759] placeholder-[#4a4759]"
                                type="text"
                                placeholder="Nombre"
                                {...register('name', {
                                    required: 'El nombre es obligatorio.',
                                    minLength: {
                                        value: 4,
                                        message: 'El nombre debe tener al menos 4 caracteres.',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'El nombre no debe exceder los 50 caracteres.',
                                    },
                                })}
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>
                    </div>
                    <div className="w-5/12 pr-[10px]">
                        <div className="my-4">
                            <input
                                className="border-[1px] border-solid border-[#e4e4e4] rounded-[4px] py-[12px] px-[16px] bg-none w-full text-[#4a4759] placeholder-[#4a4759]"
                                type="text"
                                placeholder="Apellido"
                                {...register('lastname', {
                                    required: true,
                                    minLength: {
                                        value: 4,
                                        message: 'El apellido debe tener al menos 4 caracteres.',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'El apellido no debe exceder los 50 caracteres.',
                                    },
                                })}
                            />
                            {errors.lastname && (
                                <p className="text-red-500">{errors.lastname.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="w-5/12 pr-[10px]">
                        <div className="my-4">
                            <input
                                type="email"
                                className="border-[1px] border-solid border-[#e4e4e4] rounded-[4px] py-[12px] px-[16px] bg-none w-full text-[#4a4759] placeholder-[#4a4759]"
                                placeholder="Email"
                                {...register('email', {
                                    required: 'El email es obligatorio.',
                                    pattern: emailPattern,
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500">El email es obligatorio.</p>
                            )}
                        </div>
                    </div>
                    <div className="w-5/12 pr-[10px]">
                        <div className="my-4">
                            <input
                                type="email"
                                className="border-[1px] border-solid border-[#e4e4e4] rounded-[4px] py-[12px] px-[16px] bg-none w-full text-[#4a4759] placeholder-[#4a4759]"
                                placeholder="Volver a ingresar el Email"
                                {...register('confirmEmail', {
                                    required: 'Confirmar el email es obligatorio.',
                                    validate: (value) =>
                                        value === emailValue || 'Los emails no coinciden',
                                })}
                            />
                            {errors.confirmEmail && (
                                <p className="text-red-500">{errors.confirmEmail.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="w-5/12 pr-[10px]">
                        <div className="my-4">
                            <input
                                type="text"
                                className="border-[1px] border-solid border-[#e4e4e4] rounded-[4px] py-[12px] px-[16px] bg-none w-full text-[#4a4759] placeholder-[#4a4759]"
                                placeholder="Teléfono"
                                {...register('phone', {
                                    required: 'El teléfono es obligatorio.',
                                    minLength: {
                                        value: 7,
                                        message: 'El teléfono debe tener al menos 7 caracteres.',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'El teléfono no debe exceder los 50 caracteres.',
                                    },
                                })}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                        </div>
                    </div>
                    <div className="w-5/12 pr-[10px]">
                        <div className="my-4">
                            <input
                                type="text"
                                className="border-[1px] border-solid border-[#e4e4e4] rounded-[4px] py-[12px] px-[16px] bg-none w-full text-[#4a4759] placeholder-[#4a4759]"
                                placeholder="Dirección"
                                {...register('address', {
                                    required: 'El dirección es obligatorio.',
                                    minLength: {
                                        value: 10,
                                        message: 'El dirección debe tener al menos 10 caracteres.',
                                    },
                                    maxLength: {
                                        value: 200,
                                        message: 'El dirección no debe exceder los 200 caracteres.',
                                    },
                                })}
                            />
                            {errors.address && (
                                <p className="text-red-500">{errors.address.message}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="border-[1px] border-[#EDEDED] h-[50px] w-[250px] flex justify-center items-center text-[16px] bg-[#172983] text-[#ffffff] hover:bg-[#2F3C92] hover:text-[#ffffff] ml-[10px]"
                    >
                        Finalizar Compra
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
