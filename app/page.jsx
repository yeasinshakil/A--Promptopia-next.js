import Feed from '@components/Feed'

function Home() {
  return (
    <section className=" w-full flex-center flex-col">
        <h1 className=" text-center head_text">
            Discover & Share
            <br className=" max-md:hidden"/>
            <span className="orange_gradient text-center">AI Powered Prompts</span>
        </h1>

        <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in corporis eligendi sint excepturi ducimus voluptates rem. Optio, dignissimos perspiciatis.</p>


    <Feed />
    
    </section>
  )
}

export default Home