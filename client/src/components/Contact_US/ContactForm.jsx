import React from 'react'
import { useForm} from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit()} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-lg text-gray-300'>Name :</label>
            <input 
                type="text" 
                id="name" 
                {...register('name', { required: true })} 
                className='px-3 py-2 rounded-xl border-[1px] border-gray-300 bg-white text-gray-950 placeholder:text-gray-950' 
                placeholder='John_Player'
                required
            />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor='company_name' className='text-lg text-gray-300'>Company/Organization :</label>
            <input 
                type="text" 
                id="company_name" 
                {...register('company_name', { required: true })} 
                className='px-3 py-2 rounded-xl border-[1px] border-gray-300 bg-white text-gray-950 placeholder:text-gray-950' 
                placeholder='XYZ'
            />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor='review' className='text-lg text-gray-300'>Review :</label>
            <textarea 
                id="review" 
                {...register('review', { required: true })} 
                rows={4} 
                className='px-3 py-2 rounded-xl border-[1px] border-gray-300 bg-white text-gray-950 placeholder:text-gray-950' 
                placeholder='Write your experience here...'
            />
        </div>

        <div>
            <button 
                type='submit' 
                className='px-3 py-2 w-full bg-transparent border-[1px] border-white font-semibold text-white hover:text-black rounded-xl hover:bg-white transition-all duration-250'
            >Submit</button>
        </div>
    </form>
  )
}

export default ContactForm
