import Pomodoro from "./components/Pomodoro";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://marketplace.canva.com/EAFQDK2NEPU/1/0/1600w/canva-purple-anime-city-desktop-wallpaper-LEFL5_yVCqY.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Pomodoro />
        </div>
      </div>
    </div>
  );
};

export default Home;
