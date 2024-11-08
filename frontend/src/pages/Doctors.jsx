import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Doctors() {   

  const {speciality}=useParams();
  const[filterDoc,setFilterDoc]=useState([]);
  const navigate=useNavigate();

  
  const {doctors}=useContext(AppContext);

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality));
    }else{
      setFilterDoc(doctors);
    }
  }

  useEffect(()=>{
    applyFilter();
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors Specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality==='General physician'?navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94w] sm:w-auto  pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General Physician"?'bg-indigo-100 text-black':""}`}>General Physician</p>
          <p onClick={()=>speciality==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94w] sm:w-auto  pl-3 py-1.5 pr-16   border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist"?'bg-indigo-100 text-black':""}`} >Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94w] sm:w-auto   pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Dermatologist"?'bg-indigo-100 text-black':""}`}>Dermatologist</p>
          <p onClick={()=>speciality==='Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatricians"?'bg-indigo-100 text-black':""}`}>Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94w] sm:w-auto  pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Neurologist"?'bg-indigo-100 text-black':""} `}>Neurologist</p>
          <p onClick={()=>speciality==='Gastreonterologist'?navigate('/doctors'):navigate('/doctors/Gastreonterologist')}  className={`w-[94w] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastreonterologist"?'bg-indigo-100 text-black':""}`}>Gastreonterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-y-6'>
        {filterDoc.map((item,index)=>(
               <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border w-50 mx-2 border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
               <img className='bg-blue-50' src={item.image} alt="" />
               <div className='p-4'>
                   <div className='flex items-center gap-2 text-sm text-center p-2 text-green-500'>
                       <p className=''>Available</p>
                   </div>
                   <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                   <p className='text-gray-600 text-sm'>{item.speciality}</p>
               </div>
           </div>

        ))
        }
      </div>
      </div>
    
    </div>
  )
}

export default Doctors
