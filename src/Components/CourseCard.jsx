import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({data}) => {
    const navigate = useNavigate();

  return (
    <div 
        onClick={()=>navigate("/course/description/",{state:{...data}})}
    className='text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700'>
      <div className="overflow-h">
        <img src={data?.thumbnail?.secure_url || "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?t=st=1744189871~exp=1744193471~hmac=a735a05b854470241a1c294e1bf9d42c8a26ee57a6904bac0b93cfcadced0d89&w=996"} className='h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale-110 transition-all ease-in-out duration-300' alt="course thumbnail" />
        <div className="p-3 space-y-1 text-white">
            <h2 className='text-xl font-bold text-yellow-500 line-clamp-2'>{data?.title}</h2>
            <p className='line-clamp-2'>{data?.description}</p>
            <p className="font-semibold">
                <span className='font-bold text-yellow-500'>Category : </span>
                {data?.category}
            </p>
            <p className="font-semibold">
                <span className='font-bold text-yellow-500'>Total lectures : </span>
                {data?.numbersOfLectures}
            </p>
            <p className="font-semibold">
                <span className='font-bold text-yellow-500'>Instructor : </span>
                {data?.createdBy}
            </p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
