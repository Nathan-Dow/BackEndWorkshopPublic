import { useNavigate } from 'react-router-dom';

export default function MyStory(){
    const navigate = useNavigate();
    return(
            <>
            <div>
                <section className="m-6 min-h-[calc(100vh-3rem)] pl-8 pt-8 flex" style={{ backgroundColor: '#FCECDD'}}>
                    <section className="flex-col">
                        <h1>Credentials page!!!</h1>   
                        <h2>BIO INFO:</h2>

                        <li>
                            <ul>Junior High: Statefields School</ul>
                            <ul>Senior High: Malayan Colleges Laguna</ul>
                            <ul>College: De La Salle University</ul>
                            <ul> AGE: 19</ul>
                            <ul>Place of birth: PGH Manila</ul>
                        </li>
                          
                        <button type="button" className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{ backgroundColor: '#555879' }}  onClick={() => navigate('/')}>Home</button>
                    </section>
                    
                    
                </section>
                
            </div>
            </>
        )
}