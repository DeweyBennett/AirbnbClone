import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {format} from "date-fns"
import InfoCard from "../components/InfoCard";


export default function Search({searchResults}){
    const router = useRouter()

    const {location, startDate, endDate, numberOfGuests} = router.query

    const formattedStartDate = format(new Date(startDate), 'MMMM dd yyyy')
    const formattedEndDate = format(new Date(endDate), 'MMMM dd yyyy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return(
        <section className="h-screen">
            <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm">For the dates of {range}, there are 300+ stays for {numberOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexability</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(({img, location, title, description, star, price, total}, i) => (
                            <InfoCard
                                key={i}
                                image={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </section>
    )
}


export async function getServerSideProps(context) {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res)=> res.json())

    return{
        props: {
            searchResults
        }
    }
}