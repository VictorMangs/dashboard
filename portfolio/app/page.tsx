import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <title>Creating A Portfolio</title>
      <meta name="description" content="Wowza what is a next js" />
      <link rel="icon" href="favicon.ico" />

      <main className="bg-white px-10">
        <section className="bg-blue-700 min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">  
            <h1 className="text-xl">Whodis?!</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointe text-2xl" />
              </li>
              <li>
                <a 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" 
                href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
