import Brief from "./brief";
import Certificates from "./certificates";
import Education from "./education";
import Expectations from "./expectation";
import Experiences from "./experiences";
import Speakings from "./speakings";

const About = ({ className }) => {
  return (
    <div className={`grid grid-cols-3 gap-3 ${className}`}>
      <Brief className="col-span-3 lg:col-span-2" />
      <Education className="col-span-3 lg:col-span-1" />
      <Experiences className="col-span-3 lg:col-span-2" />
      <Certificates className="col-span-3 lg:col-span-1" />
      <Speakings className="col-span-3" />
      <Expectations className="col-span-3" />
    </div>
  );
};

About.Layout = "cv";
export default About;
