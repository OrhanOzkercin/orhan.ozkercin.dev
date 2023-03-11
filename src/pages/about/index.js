import Brief from "./brief";
import Education from "./education";
import Experiences from "./experiences";
import Speakings from "./speakings";

const About = ({ className }) => {
  return (
    <section className={`flex flex-col justify-start gap-3 ${className}`}>
      <Brief />
      <Experiences />
      <Education />
      {/* <Speakings /> */}
    </section>
  );
};

export default About;
