/**
 * @file LoginForm.jsx
 * @description Login form with validation.
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/validators';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    try {
      await login(data);
      toast.success('Successfully logged in!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full max-w-md mx-auto p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-heading font-bold text-primary-dark">Welcome Back</h2>
        <p className="text-gray-500 text-sm mt-2">Login to manage your bookings</p>
      </div>

      <Input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        {...register('password')}
        error={errors.password?.message}
      />

      <div className="flex justify-end text-sm">
        <Link to="/forgot-password" className="text-primary hover:text-primary-dark font-medium transition-colors">
          Forgot Password?
        </Link>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full mt-4">
        {isSubmitting ? 'Logging in...' : 'Log In'}
      </Button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="text-primary font-bold hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
