import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    
    let signUpError;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signUpError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        console.log(user || gUser)
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('uodate done');
        navigate('/appointment');

    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }

                                })} />
                            <label class="label">

                                {
                                    errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>
                                }


                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">

                                {
                                    errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        {/* Paaswod */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">

                                {
                                    errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>





                        {/* <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"} */}
                        {
                            signUpError
                        }
                        <input className='btn w-full max-w-xs text-white' type="submit" value='signup' />
                    </form>
                    <p className='py-2'><small>Already have an account? <Link className='text-secondary' to='/login'> Please Login</Link></small></p>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;