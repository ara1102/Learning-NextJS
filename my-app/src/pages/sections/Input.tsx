import React, { FC, ReactNode, useState } from 'react'
import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import SVGComponent from '../../component/SVGComponent';
import { FormValues } from '../form';

type InputProps = {
    label: string;
    name: string;
    type: string;
    svg: string;
    placeholder:string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<any>
}

const Input: FC<InputProps> = ({ label, name, type, svg, errors, register, placeholder=`Enter your ${label.toLowerCase()}`}) => {
    
    // const {
    //     register,
    //     formState: { errors },
    // } = useForm<FormValues>({mode:"onChange"});

    return (
        <>
            <div className='block'>
                <label htmlFor={name} className='text-black font-semibold text-md'>{label}</label>
                <div className='inline relative'>
                  <input type={type} 
                    {...register(name, {
                    required: `${label} is required!`,
                    })} 
                    id={name} 
                    placeholder={placeholder} className='shadow-sm w-full placeholder-black rounded-md p-1 border-2' />
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                        <SVGComponent svg={svg}/>
                    </div>  
                    {/* {errors && <p className='text-red-500' >{errors.email?.message}</p>} */}
                    
                </div>
            </div>
        </>
    );
};

export default Input;