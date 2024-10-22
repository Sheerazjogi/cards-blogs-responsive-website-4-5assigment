import Image from "next/image";
import Blog3pic from "@/app/image/blog3.png"

export default function Blog3(){
    return(
        <>
        <section className="w-full h-[500px] bg-[#90c3c1]">
            <div className=" max-w-[1100px] m-auto w-full flex flex-col items-center pt-10 ">
                <h1 className="w-[90%] text-4xl text-[#DCAE1D] text-center mb-6 font-bold underline">Utilizing music to enhance Vocabulary</h1>

                <Image src={Blog3pic} alt="" className="w-full h-[420px] object-fill object-center"/>
            </div>
        </section>

        <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
            <h2 className="text-3xl font-bold p-2">Ways in which Music Can Enhance Your English vocabulary</h2>
            <p className="text-lg my-2 mx-0 px-8">In this blog, examine how English learners can utilize songs to enhance their vocabulary. You may cover:
            <ul>
            <li className="list-disc">How memorable lyrics present new vocabulary within context.</li>
            <li className="list-disc">The significance of repetition in music for strenthening understanding.</li>
            <li className="list-disc">Instance of songs that emphasize particular vocabulary (e.g., body parts, feelings, weather).</li>
            <li className="list-disc">Ways in which learners can develop personalized vocabulary playlists according to  difficulty levels or themes.</li>
            </ul>
            This blog could suggest well-known English songs with straightforward, easy to understand lyrics for beginner and intermediate learners,inculding classic pop tunes or children`s music.
            </p>

            <h2 className="text-3xl font-bold p-2">Ways in which Music Can Enhance Your English vocabulary</h2>
            <p className="text-lg my-2 mx-0 px-8">In this blog, examine how English learners can utilize songs to enhance their vocabulary. You may cover:
            <ul>
            <li className="list-disc">How memorable lyrics present new vocabulary within context.</li>
            <li className="list-disc">The significance of repetition in music for strenthening understanding.</li>
            <li className="list-disc">Instance of songs that emphasize particular vocabulary (e.g., body parts, feelings, weather).</li>
            <li className="list-disc">Ways in which learners can develop personalized vocabulary playlists according to  difficulty levels or themes.</li>
            </ul>
            This blog could suggest well-known English songs with straightforward, easy to understand lyrics for beginner and intermediate learners,inculding classic pop tunes or children`s music.
            </p>

            <h2 className="text-3xl font-bold p-2">Ways in which Music Can Enhance Your English vocabulary</h2>
            <p className="text-lg my-2 mx-0 px-8">In this blog, examine how English learners can utilize songs to enhance their vocabulary. You may cover:
            <ul>
            <li className="list-disc">How memorable lyrics present new vocabulary within context.</li>
            <li className="list-disc">The significance of repetition in music for strenthening understanding.</li>
            <li className="list-disc">Instance of songs that emphasize particular vocabulary (e.g., body parts, feelings, weather).</li>
            <li className="list-disc">Ways in which learners can develop personalized vocabulary playlists according to  difficulty levels or themes.</li>
            </ul>
            This blog could suggest well-known English songs with straightforward, easy to understand lyrics for beginner and intermediate learners,inculding classic pop tunes or children`s music.
            </p>
            
        </section>

        </>
    )
}