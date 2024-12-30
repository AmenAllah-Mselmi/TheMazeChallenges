import background from "../src/assets/background.png";
import logo from "../src/assets/logo.png"
import basic from "../src/assets/basicchallenges.jpg"
import intermediate from "../src/assets/intermediate.png"
import advanced from  "../src/assets/advanced.png"
import design from "../src/assets/design.webp"
import mobile from "../src/assets/mobile.png"
import ai from "../src/assets/ai.png"
import problem_solving from "../src/assets/problem_solving.png"
function App() {
  const challenges = [
    {
      name: "Basic web ",
      link: "https://pollunit.com/fr/polls/6ortbgnjapfwf4jssh85wa",
      imgSrc: basic,
      bgColor: "bg-[#740f0f]",
    },
    {
      name: "Intermediate web ",
      link: "https://pollunit.com/fr/polls/mufxilryi0ett4kakv7uoa",
      imgSrc: intermediate,
      bgColor: "bg-[#c65503]",
    },
    {
      name: "Advanced web ",
      link: "https://pollunit.com/fr/polls/gz6h1g5jkdsq1eadhxcvlw",
      imgSrc:advanced,
      bgColor: "bg-[#d9e2e5]",
    },
    {
      name: "UI/UX",
      link: "https://pollunit.com/fr/polls/s2w2pl1wkijacjoocio_kw",
      imgSrc: design,
      bgColor: "bg-[#a14706]",
    },
    {
      name: "AI/ML ",
      link: "https://pollunit.com/fr/polls/chgfvetl_va0dy3yjquemw",
      imgSrc: ai,
      bgColor: "bg-[#740f0f]",
    },
    {
      name: "Mobile ",
      link: "https://pollunit.com/fr/polls/2teuawjjvj7ghqbbc9tpca",
      imgSrc: mobile,
      bgColor: "bg-[#c65503]",
    },
    {
      name: "Problem solving ",
      link: "https://pollunit.com/fr/polls/hq0-sghcj9rao6pf3zjw2w",
      imgSrc:problem_solving,
      bgColor: "bg-[#d9e2e5]",
    },
  ];
  return (
  <div  style={{backgroundImage: `url(${background})`,backgroundRepeat: "no-repeat",backgroundPosition: "center",backgroundSize:"contain",width:"100vw",height:"100vh"}} className="bg-black flex justify-center items-center min-h-fit " >
    <img src={logo} alt="Error" className="w-20 absolute right-3 top-3"/>
    <div className="mx-auto max-w-7xl  lg:px-8 mt-36">
      <div className="mb-12 flex items-center justify-center gap-3">
        <h2 className="text-center text-4xl font-bold text-white">Our Challenges</h2>
      </div>
      <div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {challenges.map((challenge, index) => (
          <div key={index} className="transition hover:scale-105">
            <a href={challenge.link}>
              <img
                className={`col-span-2 mx-auto h-36 w-64 rounded-2xl ${challenge.bgColor} object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1`}
                src={challenge.imgSrc}
                alt={challenge.name}
                loading="lazy"
              />
              <h1 className="mt-4 text-center text-lg font-extrabold text-white mb-2">
                {challenge.name}
              </h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default App
