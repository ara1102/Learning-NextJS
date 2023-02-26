import Input from '@/component/Input';
import React from 'react'
import { useForm } from 'react-hook-form'

// 1. confirmPassword validation
// 2. make validation and error message modular
// 3. toggle password

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    gender: string,
    username: string,
    password: string,
    confirmPassword: string,
    country: string,
    state: string,
    city: string,
    postalCode: string,
}

const form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    register("email", {
        pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Please enter a valid email!"
        }
    });

    register("username", {
        minLength:{
            value: 6,
            message: 'Your username is too short!'
        },
        maxLength:{
            value: 30,
            message: 'Your username is too long!'
        }
    });

    register("password", {
        minLength:{
            value: 8,
            message: 'Your password is too short!'
        },
        maxLength:{
            value: 15,
            message: 'Your password is too long!'
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#&*_]).{8,15}$/,
            message: "Password should contain at least 1 uppercase, 1 lowercase, 1 number, and 1 symbol(!#&*_)"
        }
    });

    return (
        <>
            <main className=''>
                <section className='bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center min-h-screen items-center'>
                    <form onSubmit={handleSubmit((data) => { console.log(data); })} className='bg-white rounded-lg flex flex-col gap-y-3 p-5 mt-36 mx-4'>

                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-2xl sm:text-6xl self-center sm:p-3'>Welcome to Phlog!</p>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 font-bold text-lg sm:text-2xl self-center'>Fill out this form to sign up</p>

                        <div>
                            <Input label="Email" name="email" register={register} type="email" svg="email"/>
                            <p className='text-red-500' >{errors.email?.message}</p>
                        </div>

                        <div className='sm:flex justify-between md:gap-2'>

                            <div className='mb-3 sm:mb-0 basis-1/2'>
                                <Input label="First Name" name="firstName" register={register} type="text"/>
                                <p className='text-red-500'>{errors.firstName?.message}</p>
                            </div>

                            <div className='basis-1/2'>
                                <Input label="Last Name" name="lastName" register={register} type="text" />
                                <p className='text-red-500'>{errors.lastName?.message}</p>
                            </div>

                        </div>

                        <div>
                            <Input label="Phone Number" name="phoneNumber" register={register} type="tel" svg="phone"/>
                            <p className='text-red-500'>{errors.phoneNumber?.message}</p>
                        </div>

                        <div>
                            <Input label="Username" name="username" register={register} type="text" svg="" placeholder='Set your username'/>
                            <p className='text-red-500'>{errors.username?.message}</p>
                        </div>

                        <div className='sm:flex justify-between md:gap-2'>
                            <div className='mb-3 sm:mb-0 basis-1/2'>
                                <Input label="Password" name="password" register={register} type="password" placeholder='Set your password' svg='eye'/>
                                <p className='text-red-500'>{errors.password?.message}</p>
                            </div>
                            <div className='basis-1/2'>
                                <Input label="Confirm Password" name="confirmPassword" register={register} type="password" placeholder='Confirm your new password' svg='eye'/>
                                <p className='text-red-500'>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>

                        <div className='flex-col'>
                            <label htmlFor="purpose" className='text-black font-semibold text-md'>What are you here for?</label>

                            <select {...register("gender")} className="w-full placeholder-black rounded-md p-1 border-2">
                                <option value="Business">Business</option>
                                <option value="Hobby">Hobby</option>
                            </select>
                        </div>

                        <div className='sm:flex justify-between md:gap-2'>
                            <div className='mb-3 sm:mb-0 basis-1/2'>
                                <Input label="Country" name="country" register={register} type="text" svg='world'/>
                                <p className='text-red-500'>{errors.country?.message}</p>
                            </div>
                            <div className='basis-1/2'>
                                <Input label="State" name="state" register={register} type="text"  svg=''/>
                                <p className='text-red-500'>{errors.state?.message}</p>
                            </div>
                        </div>

                        <div className='sm:flex justify-between md:gap-2'>
                            <div className='mb-3 sm:mb-0 basis-1/2'>
                                <Input label="City" name="city" register={register} type="text"/>
                                <p className='text-red-500'>{errors.city?.message}</p>
                            </div>
                            <div className='basis-1/2'>
                                <Input label="Postal Code" name="postalCode" register={register} type="text"/>
                                <p className='text-red-500'>{errors.postalCode?.message}</p>
                            </div>
                        </div>
                        
                        <input type="submit" className='font-semibold py-2 rounded cursor-pointer items-end w-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-lg' />
                    </form>
                </section>
            </main>
        </>
    )
}

export default form;
