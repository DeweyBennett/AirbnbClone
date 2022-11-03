import Image from "next/image"

export default function Banner() {

    return(
        <main className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src='https://links.papareact.com/0fm'
                width='2000'
                height='100'
                className="max-h-[700px]"
                alt=''
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Welcome to my Airbnb clone!</p>
                <p className="text-sm sm:text-lg">Let&lsquo;s help book your trip to London. Type in London in the search bar above and let&lsquo;s get started.</p>
                <p className="text-sm sm:text-lg">More cities coming soon.</p>
                <button
                    className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
                >
                    I&lsquo;m Flexible
                </button>
            </div>
        </main>
    )
}