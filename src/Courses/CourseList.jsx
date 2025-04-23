import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../Layout/HomeLayout';
import { getAllCourses } from "../Redux/Slices/CourseSlice";
import CourseCard from '../Components/CourseCard';

const CourseList = () => {
    const dispatch = useDispatch();

    const {courseData} = useSelector((state)=>state.course);

    async function loadCourses(){
        await dispatch(getAllCourses())
    }

    useEffect(()=>{
        loadCourses();
    },[]);


  return (
   <HomeLayout>
    <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
        <h1 className='text-center text-3xl'>Explore the courses made by
        <span className='font-bold text-yellow-500 ml-2 font-semibold'>Industry experts</span>
        </h1>
        <div className="mb-10 flex flex-wrap gap-14">
            {courseData?.map((course)=>{
                return(
                    <CourseCard key={course._id} data={course}/>
                )
            })}
        </div>
    </div>
   </HomeLayout>
  )
}

export default CourseList
