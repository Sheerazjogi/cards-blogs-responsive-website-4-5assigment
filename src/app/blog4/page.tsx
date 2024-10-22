import Image from "next/image";
import Blog1pic from "@/app/image/blog1.jpeg"

export default function Blog4(){
    return(
        <>
      <section className="w-full h-[500px] bg-[#90c3c1]">
                <div className="max-w-[1100px] m-auto w-full flex flex-col items-center pt-10">
                    <h1 className="w-[90%] text-4xl text-[#DCAE1D] text-center mb-6 font-bold underline">
                        Enhancing articulation by Singing:
                    </h1>

                    <Image src={Blog1pic} alt="" className="w-full h-[420px] object-fill object-center" />
                </div>
            </section>

            <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                <h2 className="text-3xl font-bold p-2">The strength of imitating fluent Speakers</h2>
                <p className="text-lg my-2 mx-0 px-8">
                    Discuss how singing along with English songs aids learners in enhancing their pronunciation and fluency. Singing offers:
                </p>
                <ul className="list-disc px-8">
                    <li>A Natural way to practice the tone and rhythm of spoken English.</li>
                    <li>A chance to imitate the accent of native speakers.</li>
                    <li>Strengthening of difficult English sounds (e.g., vowel changes, specific consonant sounds).</li>
                </ul>
                <p className="text-lg my-2 mx-0 px-8">
                    The blog could feature activities where learners listen to selected songs and repeat challenging phrases. It might also suggest karaoke apps that allow students to sing in English and receive instant pronunciation feedback.
                </p>
            </section>

            <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                <h2 className="text-3xl font-bold p-2">The strength of imitating fluent Speakers</h2>
                <p className="text-lg my-2 mx-0 px-8">
                    Discuss how singing along with English songs aids learners in enhancing their pronunciation and fluency. Singing offers:
                </p>
                <ul className="list-disc px-8">
                    <li>A Natural way to practice the tone and rhythm of spoken English.</li>
                    <li>A chance to imitate the accent of native speakers.</li>
                    <li>Strengthening of difficult English sounds (e.g., vowel changes, specific consonant sounds).</li>
                </ul>
                <p className="text-lg my-2 mx-0 px-8">
                    The blog could feature activities where learners listen to selected songs and repeat challenging phrases. It might also suggest karaoke apps that allow students to sing in English and receive instant pronunciation feedback.
                </p>
            </section>

            <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                <h2 className="text-3xl font-bold p-2">The strength of imitating fluent Speakers</h2>
                <p className="text-lg my-2 mx-0 px-8">
                    Discuss how singing along with English songs aids learners in enhancing their pronunciation and fluency. Singing offers:
                </p>
                <ul className="list-disc px-8">
                    <li>A Natural way to practice the tone and rhythm of spoken English.</li>
                    <li>A chance to imitate the accent of native speakers.</li>
                    <li>Strengthening of difficult English sounds (e.g., vowel changes, specific consonant sounds).</li>
                </ul>
                <p className="text-lg my-2 mx-0 px-8">
                    The blog could feature activities where learners listen to selected songs and repeat challenging phrases. It might also suggest karaoke apps that allow students to sing in English and receive instant pronunciation feedback.
                </p>
            </section>
        </>
    );
} 