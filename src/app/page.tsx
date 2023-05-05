import Image from "next/image";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-default bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
        <nav className="px-12 py-5">
          {/* <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={128}
            height={50}
          ></Image> */}
        </nav>
      </div>
      {/* <h1>Hello world</h1> */}
    </div>
  );
};

export default Home;