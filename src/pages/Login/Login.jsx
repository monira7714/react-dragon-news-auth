
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {

    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin= e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password= form.get('password')
        console.log(form)
        signIn(email,password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                <h2 className='text-3xl my-5 text-center'>Login your account</h2>
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
                    <button className="btn bg-[#403F3F] text-white">Login</button>
                </div>
            </form>
            <p className='text-center'>Do not Have An Account ? <Link className='text-red-700 font-medium' to='/register'> Register</Link></p>
        </div>
    );
};

export default Login;