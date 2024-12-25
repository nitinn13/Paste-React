import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/Pasteslice'
import toast from 'react-hot-toast'
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
const Pastes = () => {
    const pastes = useSelector((state) => state.paste.pastes)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')


    const filtereddaata = pastes.filter((paste) => paste.title.toLowerCase().includes(search.toLowerCase()))

    function handledelete(pasteId) {
        dispatch(removeFromPastes(pasteId))
    }


    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-3'>
                <i class="ri-search-line text-2xl mt-4"></i>

                <input className='p-2 rounded-xl mt-4 w-[35vw] bg-[#27272A]'
                    type="text"
                    placeholder='Search...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center p-2'>
                {
                    filtereddaata.map((paste) => (
                        <div key={paste._id} className='flex flex-col gap-2 p-2 rounded-xl border-2 border-[#4B5563] w-[70vw] px-[2vw]'>
                            <div className='flex flex-row gap-2 place-content-between p-2'>
                                <div className='text-2xl'>
                                    {paste.title}
                                </div>
                                <div className='flex gap-2 '>
                                    <button>
                                        <Link to={`/?pasteId=${paste?._id}`}>
                                            <i class="ri-edit-box-line text-2xl"></i>
                                        </Link>

                                    </button>
                                    <button>
                                        <Link to={`/pastes/${paste?._id}`}>
                                            <i class="ri-eye-line text-2xl"></i>
                                        </Link>
                                    </button>
                                    <button onClick={() => handledelete(paste?._id)}>
                                        <i class="ri-delete-bin-line text-2xl"></i>
                                    </button>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste.value)
                                        toast.success("Copied to clipboard")
                                    }}><i class="ri-file-copy-line text-2xl"></i></button>
                                    <button>
                                        <i class="ri-share-box-line text-2xl"></i>

                                    </button>
                                </div>
                            </div>
                            <p>{paste.value}</p>
                            <div className='flex '>
                                <p className='text-sm'>{paste.createdAt}</p>
                            </div>
                        </div>
                    ))

                }
            </div>

        </div >
    )
}

export default Pastes