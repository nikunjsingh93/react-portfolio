import profilepic from '../assets/nik.png';

function Home() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black">

            <div className="my-auto mx-auto">
                <div className="w-[300px] h-auto lg:w-[400px]">
                    <img src={profilepic} alt="profile Picture" />

                </div>

            </div>
            
        </div>
    )
}
export default Home;