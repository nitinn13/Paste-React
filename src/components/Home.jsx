import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/Pasteslice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const allPastes = useSelector((state) => state.paste.pastes)
   


    const dispatch = useDispatch();


    const handletitle = (e) => {
        setTitle(e.target.value)
    }
    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((item) => item._id === pasteId)
            setTitle(paste.title)
            setValue(paste.value)
        }

    }, [pasteId])
    function createPaste() {
        const paste = {
            title: title,
            value: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date(Date.now()).toISOString()
        }


        if (pasteId) {
            dispatch(updateToPastes(paste))
        } else {
            dispatch(addToPastes(paste))

        }
        setTitle('')
        setValue('')
        setSearchParams({})
    }


    return (

        <div>
            <div className='flex flex-row place-content-between p-2 px-[15vw]'>
                <input className='p-2 pl-4 rounded-xl mt-4 w-[45vw]'
                    type="text"
                    placeholder='Enter title'
                    value={title}
                    onChange={handletitle}
                />
                <button className='p-3 rounded-xl mt-4 bg-[#4B5492] w-[10vw] text-white'
                    onClick={createPaste}
                >
                    {
                        pasteId ? "Update Paste" : "Create Paste"
                    }
                </button>

            </div>
            <div className='bg-[#333333] w-[80vw] ml-[8vw] mt-5'>
                <div className='w-full rounded-t flex items-center justify-start gap-x-4 px-4 py-2'>
                    <div class="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]"></div>
                    <div class="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]"></div>
                    <div class="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]"></div>
                </div>
                <textarea
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        
                    }}
                    className='p-4 rounded-xl  w-[99.5%] bg-[#0F0F0F]'
                    placeholder='Enter paste'
                    rows={14}

                ></textarea>
                
            </div>
        </div>

    )
}

export default Home