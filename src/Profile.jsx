import profilePhoto from "./assets/profile_photo.jpg";
import { useNavigate } from 'react-router-dom';

export default function Profile(){
    const navigate = useNavigate();

    return(
        <>
        <div>
            <section className="m-6 min-h-[calc(100vh-3rem)] pl-8 pt-8 flex" style={{ backgroundColor: '#FCECDD'}}>

                <img className="pl-20 h-170 rounded" src={profilePhoto}/>
                <section className="flex-col">
                    <h1 className="pl-15 pt-55 font-domine text-7xl font-bold text-color:black]">Hello! I am Nathan!</h1>

                    <section className="flex-row pl-15 pt-7">
                        <button type="button" className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{ backgroundColor: '#555879' }}  onClick={() => navigate('/myStory')}>My Story</button>
                        <button type="button" className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{ backgroundColor: '#555879' }} onClick={() => navigate('/blogs')}>Checkout my Blogs</button>
                    </section>
                    
                </section>
                
            </section>
            
        </div>
        </>
    )
}