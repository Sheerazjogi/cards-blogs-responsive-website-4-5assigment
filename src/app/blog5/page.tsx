import Image from "next/image";
import Blog2pic from "@/app/image/blog2.jpeg";

export default function Blog5() {
  return (
    <>
      <section className="w-full h-[500px] bg-[#90c3c1]">
        <div className="max-w-[1100px] m-auto w-full flex flex-col items-center pt-10 ">
          <h1 className="w-[90%] text-4xl text-[#DCAE1D] text-center mb-6 font-bold underline">
            Acquiring Idioms and Phrasal Verbs by listening to English Songs
          </h1>

          <Image
            src={Blog2pic}
            alt=""
            className="w-full h-[420px] object-fill object-center"
          />
        </div>
      </section>

      <section className="mt-5 w-[1100px] m-auto flex flex-col items-center pt-1 shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
        <h2 className="text-3xl font-bold p-2">
          Acquiring idioms and Verb phrasesc 
        </h2>
        <p className="text-lg my-2 mx-0 px-8">The English language contains numerous idiomatic expressions and phrasal verbs
           that can be challenging to master through conventional approaches.
            In this blog, discuss how songs frequently incorporate these expressions, 
            aiding learners in comprehending them within context.
          :
          <li className="list-disc">
            instances of well-known songs that include common idioms (e.g., Let it
            Be by The Beatles for the idiom let it be).
          </li>
          <li className="list-disc">
            Methods for analyzing the meanings of phrasal verbs found in song lyrics.
          </li>
          <li className="list-disc">
            A compilation of songs abundant in idoms along with suggestions for how learners can utilize them for practice.
          </li>
        </p>

        <h2 className="text-3xl font-bold p-2">
          Acquiring idioms and Verb phrasesc 
        </h2>
        <p className="text-lg my-2 mx-0 px-8">The English language contains numerous idiomatic expressions and phrasal verbs
           that can be challenging to master through conventional approaches.
            In this blog, discuss how songs frequently incorporate these expressions, 
            aiding learners in comprehending them within context.
          :
          <li className="list-disc">
            instances of well-known songs that include common idioms (e.g., Let it
            Be by The Beatles for the idiom let it be).
          </li>
          <li className="list-disc">
            Methods for analyzing the meanings of phrasal verbs found in song lyrics.
          </li>
          <li className="list-disc">
            A compilation of songs abundant in idoms along with suggestions for how learners can utilize them for practice.
          </li>
        </p>

        <h2 className="text-3xl font-bold p-2">
          Acquiring idioms and Verb phrasesc 
        </h2>
        <p className="text-lg my-2 mx-0 px-8">The English language contains numerous idiomatic expressions and phrasal verbs
           that can be challenging to master through conventional approaches.
            In this blog, discuss how songs frequently incorporate these expressions, 
            aiding learners in comprehending them within context.
          :
          <li className="list-disc">
            instances of well-known songs that include common idioms (e.g., Let it
            Be by The Beatles for the idiom let it be).
          </li>
          <li className="list-disc">
            Methods for analyzing the meanings of phrasal verbs found in song lyrics.
          </li>
          <li className="list-disc">
            A compilation of songs abundant in idoms along with suggestions for how learners can utilize them for practice.
          </li>
        </p>
      </section>
    </>
  );
}