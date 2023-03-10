import Brief from "./brief";
import Experiences from "./experiences";

const About = ({ className }) => {
  return (
    <section className={`flex flex-col justify-start gap-3 ${className}`}>
      <Brief />
      <Experiences />
    </section>
  );
};

export default About;
