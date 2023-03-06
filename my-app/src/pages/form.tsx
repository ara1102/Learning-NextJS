import Input from '@/pages/sections/Input';
import React from 'react'
import { useForm } from 'react-hook-form'
import HeadingText from './sections/HeadingText';


// 1. confirmPassword validation
// 2. make validation and error message modular
// 3. toggle password

export interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    username: string,
    password: string,
    confirmPassword: string,
    purpose: string,
    country: string,
    state: string,
    city: string,
    postalCode: string,
    dateOfBirth: Date,
}

const form = () => {
    // UseFormRegister<FieldValues>
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({mode:"onChange"});

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
                    <form onSubmit={handleSubmit((data) => { console.log(data); })} className='bg-white rounded-lg flex flex-col gap-y-3 p-5 my-10 mx-4'>

                        <HeadingText title='Welcome to Phlog!' subTitle='Fill out this form to sign up'/>

                        <div>
                            <Input label="Email" name="email" register={register} type="email" svg="email" errors={errors}/>
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
                            <Input label="Username" name="username" register={register} type="text" svg="" placeholder='Set up your username'/>
                            <p className='text-red-500'>{errors.username?.message}</p>
                        </div>

                        <div className='sm:flex justify-between md:gap-2'>
                            <div className='mb-3 sm:mb-0 basis-1/2'>
                                <Input label="Password" name="password" register={register} type="password" placeholder='Set up your password' svg='eye'/>
                                <p className='text-red-500'>{errors.password?.message}</p>
                            </div>
                            <div className='basis-1/2'>
                                <Input label="Confirm Password" name="confirmPassword" register={register} type="password" placeholder='Confirm your new password' svg='eye'/>
                                <p className='text-red-500'>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>

                        <div>
                            <Input label="Date Of Birth" name="dateOfBirth" register={register} type="date" svg="" placeholder='Input your birth date'/>
                            <p className='text-red-500'>{errors.dateOfBirth?.message}</p>
                        </div>

                        <div className='flex-col'>
                            <label htmlFor="purpose" className='text-black font-semibold text-md'>What are you here for?</label>
                            <select {...register("purpose")} className="w-full placeholder-black rounded-md p-1 border-2">
                                <option value="Business">Business</option>
                                <option value="Hobby">Hobby</option>
                            </select>
                            <p className='text-red-500'>{errors.purpose?.message}</p>
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
                        
                        <input type="submit" className='font-semibold py-2 rounded cursor-pointer w-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg shadow-lg' />
                    </form>
                </section>
            </main>
        </>
    )
}

export default form;
