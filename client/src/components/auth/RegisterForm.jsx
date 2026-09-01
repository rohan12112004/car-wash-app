/**
 * @file RegisterForm.jsx
 * @description Registration form with validation.
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../utils/validators';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Input from '../common/Input';
import Button from '../common/Button';

const RegisterForm = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full max-w-md mx-auto p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-heading font-bold text-primary-dark">Create Account</h2>
        <p className="text-gray-500 text-sm mt-2">Join EcoWash for premium services</p>
      </div>

      <Input
        label="Full Name"
        type="text"
        placeholder="John Doe"
        {...register('name')}
        error={errors.name?.message}
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Phone Number"
        type="tel"
        placeholder="9876543210"
        {...register('phone')}
        error={errors.phone?.message}
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        {...register('password')}
        error={errors.password?.message}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full mt-4">
        {isSubmitting ? 'Creating Account...' : 'Sign Up'}
      </Button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-primary font-bold hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
