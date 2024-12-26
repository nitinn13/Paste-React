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

        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-8 w-[100vw]">
            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 max-w-4xl gap-6">
                <input
                    className="p-4 rounded-lg w-full md:w-2/3 bg-gray-700 text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    type="text"
                    placeholder="Enter a descriptive title"
                    value={title}
                    onChange={handletitle}
                />
                <button
                    className="p-3 w-full md:w-1/4 rounded-lg bg-purple-600 hover:bg-purple-700 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white font-semibold"
                    onClick={createPaste}
                >
                    {pasteId ? 'Update Paste' : 'Create Paste'}
                </button>
            </div>
            <div className="w-11/12 max-w-4xl mt-8 bg-gray-700 rounded-lg shadow-xl overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-800 border-b border-gray-600">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full p-4 bg-gray-900 text-white placeholder-gray-400 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write your paste content here..."
                    rows={14}
                ></textarea>
            </div>
        </div>

    )
}

export default Home