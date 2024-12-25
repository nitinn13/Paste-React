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
            <div className='flex flex-row  gap-7 place-content-between p-2'>
                <input className='p-2 pl-4 rounded-xl mt-4 w-[35vw]'
                    type="text"
                    placeholder='Enter title'
                    value={title}
                    onChange={handletitle}
                />
                <button className='p-2 rounded-xl mt-4'
                    onClick={createPaste}
                >
                    {
                        pasteId ? "Update Paste" : "Create Paste"
                    }
                </button>

            </div>
            <div>
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='p-4 rounded-xl mt-4 min-w-[50vw]'
                    placeholder='Enter paste'
                    rows={15}
                ></textarea>

            </div>
        </div>

    )
}

export default Home