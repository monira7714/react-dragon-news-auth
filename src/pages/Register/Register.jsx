import { useContext } from 'react';
import Navbar from './../Shared/Navbar/Navbar';
import { AuthContext } from '../../Providers/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handRegister= e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result => console.log(result.user))
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
        <Navbar></Navbar>
        <form onSubmit={handRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
            <h2 className='text-3xl my-5 text-center'>Register your account</h2>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Enter your photo URL" name='photo' className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] text-white">Register</button>
            </div>
        </form>
    </div>
    );
};

export default Register;