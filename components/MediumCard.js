import Image from "next/image";


export default function MediumCard({image, title}){

    return(
        <main className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative w-80 h-80">
                <Image
                    src={image}
                    width='320'
                    height='320'
                    className="rounded-xl"
                    alt=''
                />
            </div>
            <h3>{title}</h3>
        </main>
    )
}