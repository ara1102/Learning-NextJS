import React, { FC } from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import SVGComponent from './SVGComponent';



type InputProps = {
    label: string;
    name: string;
    type: string;
    d: string;
    svg: string;
    placeholder:string;
    register: UseFormRegister<FieldValues>;
}

// function passSVG(svg:string){
//     var MyComponent = svg;
//     return <MyComponent/>
//     // return React.createElement(MyComponent, {});
// }

// render() {
//     const TagName = this.props.tag;
//     return <TagName />
// }


const Input: FC<InputProps> = ({ label, name, register, type, svg, placeholder=`Enter your ${label.toLowerCase()}`}) => {

    // register("email", {
    //     pattern: {
    //         value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //         message: "Please enter a valid email"
    //     }
    // });

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