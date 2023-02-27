import React, { FC } from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import SVGComponent from '../../component/SVGComponent';

type InputProps = {
    label: string;
    name: string;
    type: string;
    d: string;
    svg: string;
    placeholder:string;
    register: UseFormRegister<FieldValues>;
}

const Input: FC<InputProps> = ({ label, name, register, type, svg, placeholder=`Enter your ${label.toLowerCase()}`}) => {

    return (
        <>
            <div className='block'>
                <label htmlFor={name} className='text-black font-semibold text-md'>{label}</label>
                <div className='inline relative'>
                  <input type={type} {...register(name, {
                    required: `${label} is required!`,
                    })} id={name} 
                    placeholder={placeholder} className='shadow-sm w-full placeholder-black rounded-md p-1 border-2' />

                    <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                        <SVGComponent svg={svg}/>
                    </div>  
                </div>
            </div>
                


        </>
    );
};

export default Input;