import Banner from "./Banner";
import TechStack from "./TechStack";
import Introduction from "./introduction";

const MainSection = () => {
  return (
      <>
        <Banner />
        <div className="mt-2">
          <Introduction/>
          <TechStack />
        </div>
      </>

  );
};

export default MainSection;
