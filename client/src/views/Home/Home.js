import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Footer from '../../components/Footer/Footer.js'
import './Home.css'
import LinkCard from './../../components/LinksCard/LinksCard.js'
import Navbar from '../../components/Navbar/Navbar.js'

function Home() {
    const [title, setTitle] = useState('')
    const [target, setTarget] = useState('')
    const [slug, setSlug] = useState('')

    const [user, setUser] = useState('')
    const [userLink, setUserLink] = useState([])

    const generateLink = async () => {

        if (!title || !target || !slug) {
            toast.error("Please Enter all details")
            return
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/link`,
            { title, target, slug, user: user._id }
        )

        if (response.data.success) {
            toast.success("Link generated successfully....!");
            setTitle('')
            setSlug('')
            setTarget('')
        }
        else {
            toast.error(response.data.message);
        }
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))

        if (currentUser) {
            setUser(currentUser)
        }

        if (!currentUser) {
            window.location.href = '/login'
        }
    }, [])

    console.log(user._id)

    const loadLinks = async () => {
        if (!user || !user._id) {
            return
        }
        toast.loading("Loading all links....");
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/alllink?userId=${user._id}`);
        toast.dismiss();
        toast.success("All Link Fetched");
        setUserLink(response.data.data);
    }

    useEffect(() => {
        loadLinks();
    }, [user])
    const deleteLink = async (id) => {
        id = userLink._id
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/link/${id}`);
        loadLinks();
    }
 
    
    return (
        <div>
            <Navbar />
            <h2 className=' heading-style user-name'>Hello {user.fullName}</h2>

            <p className='heading heading-style'>Shortlink is a tool to shorten a long link and create a short URL </p>
            <p className='heading heading-style'> easy to share on sites, chat and emails.</p>
            <div className='link-main-container'>
                <div>
                    <form className='link-form'>
                        <h2 className='heading-style heading'>Generate New Link</h2>
                        <input
                            type='text'
                            placeholder='Enter Title '
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            className='link-input text-style'
                        />

                        <input
                            type='text'
                            placeholder='Enter Target URL '
                            value={target}
                            onChange={(e) => {
                                setTarget(e.target.value)
                            }}
                            className='link-input text-style'
                        />
                        <input
                            type='text'
                            placeholder='Enter slug '
                            value={slug}
                            onChange={(e) => {
                                setSlug(e.target.value)
                            }}
                            className='link-input text-style'
                        />

                        <button type='button' className='link-btn text-style' onClick={generateLink}>Generate</button>
                    </form>
                </div>
                <div className='alllinks-container'>
                    <h2 className='heading-style heading link-heading'>My Links</h2>
                    {
                        userLink.map((link, i) => {
                            const { title, slug, target, views, createdAt } = link;
                            return <LinkCard key={i} title={title} slug={slug} target={target} views={views} createdAt={createdAt} />
                        })
                    }
            </div>
                </div>
                <br/>      
                <Footer className='footer'/>
            


         
            <Toaster />
        </div>
    )
}

export default Home

