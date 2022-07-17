import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'; import auth from '../../../firebase.init';
import { SpinnerDotted } from 'spinners-react';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (loadingEmail || loadingGoogle) {
        return <SpinnerDotted className='h-screen flex mx-auto' size={90} thickness={180} speed={136} color="rgba(57, 99, 172, 1)" />
    }

    const onSubmit = (data) => {

        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='grid grid-cols-1 h-screen'>
            <div className="card bg-base-100 shadow-xl mx-auto px-10 md:px-48 my-10">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center text-indigo-600">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },

                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Provide a valid email"
                            }
                        })} className="input mt-2 w-full md:w-96 max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" placeholder='Your email' />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        </label>
                        <br />
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },

                            minLength: {
                                value: 8,
                                message: 'Password lengh must be more than 8' // JS only: <p>error message</p> TS only support string
                            },
                            pattern: {
                                value: /^([a-zA-Z0-9@*#]{8,15})$/,
                                message: "Password must contain atleast a uppercase, a lowercase, a special character and a digit"
                            }
                        })} className="input mt-2 w-full md:w-96 max-w-xs border border-slate-500 focus:outline focus:outline-2 focus:outline-indigo-600 focus:border-0" placeholder='Your Password' />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        </label>
                        <br />

                        <input type="submit" value="Login" className="btn bg-indigo-600 text-white border-0 w-full mt-2 max-w-xs  hover:border hover:border-indigo-500 hover:text-indigo-500 hover:bg-white" />
                    </form>
                    <div className="divider">OR</div>
                    <div className="card-actions justify-center">
                        <button onClick={() => signInWithGoogle()} className="btn bg-blue-500 text-white border-0 hover:border hover:border-indigo-500 hover:text-indigo-500 hover:bg-white">Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;