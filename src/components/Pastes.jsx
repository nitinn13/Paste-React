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
            <input className='p-2 rounded-xl mt-4 w-[35vw]'
                type="text"
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className='flex flex-col gap-4 place-content-between p-2'>
                {
                    filtereddaata.map((paste) => (
                        <div key={paste._id} className='flex flex-col gap-2 p-2 rounded-xl border-2 border-black'>
                            <div className='flex flex-row gap-2 place-content-between p-2'>
                                <div>
                                    {paste.title}
                                </div>
                                <div>
                                    <button>
                                        <Link to={`/?pasteId=${paste?._id}`}>
                                        <i class="ri-edit-box-line"></i>
                                        </Link>

                                    </button>
                                    <button>
                                        <Link to={`/pastes/${paste?._id}`}>
                                        <i class="ri-eye-line"></i>
                                        </Link>
                                    </button>
                                    <button onClick={() => handledelete(paste?._id)}>
                                        <i class="ri-delete-bin-line"></i>
                                        </button>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste.value)
                                        toast.success("Copied to clipboard")
                                    }}><i class="ri-file-copy-line"></i></button>
                                    <button>
                                    <i class="ri-share-box-line"></i>
                            
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