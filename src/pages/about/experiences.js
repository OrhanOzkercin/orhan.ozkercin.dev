import { InfoCard } from "@/components/cards/info-card";
import { Step, Stepper } from "@/helpers/stepper";

const Experiences = ({ className }) => {
  const experiences = [
    {
      position: "Frontend Developer",
      companyName: "Datapad",
      dateStart: "December 2022",
      dateEnd: "March 2023",
      description: `Contributed to create a web application for Datapad.
        Get experiences of startup life. Worked with a team of 4 people. 
        Get experiences of start a project from scratch.
      `,
      stack: ["React", "JavaScript", "TypeScript", "TailwindCSS"],
      image: { path: "/datapad-logo.svg", alt: "Datapad Logo", width: 48, height: 48 },
      link: "https://www.datapad.io",
    },
    {
      position: "Frontend Developer",
      companyName: "Teknasyon",
      dateStart: "April 2022",
      dateEnd: "December 2022",
      description: `
          Contributed rockads.com and marketing.rockads.com websites.
          Also contributed internal tools created with React Admin 
          Got some experiences with different technologies
      `,
      stack: ["Vue2", "Nuxt", "React", "JavaScript"],
      image: { path: "/teknasyon-logo.png", alt: "Teknasyon Logo", width: 48, height: 48 },
      link: "https://teknasyon.com/",
    },
    {
      position: "Frontend Developer",
      companyName: "Huawei",
      dateStart: "May 2021",
      dateEnd: "April 2022",
      description: `Contributed to create a web application for Petal Maps applications.
          The application is built with Vue 2 and uses LESS for styling.
          Application aims to personalize map styles for generating maps exclusive to your service needs.
          `,
      stack: ["Vue2", "JavaScript", "TypeScript", "LESS"],
      image: { path: "/huawei-logo.svg", alt: "Huawei Logo", width: 48, height: 48 },
      link: "https://www.huawei.com/",
    },
    {
      position: "Frontend Developer",
      companyName: "Amatis",
      dateStart: "September 2020",
      dateEnd: "April 2021",
      description: `Contributed to create a web application for medical professionals to track ECG data of patients. 
          The application is built with Angular 8 and uses a REST API to communicate with the backend.
          `,
      stack: ["Angular", "JavaScript", "TypeScript", "SCSS"],
      image: { path: "/amatis-logo.svg", alt: "Amatis Logo", width: 48, height: 48 },
      link: "https://amatis.nl/",
    },
  ];
  return (
    <section className={`mt-12 flex flex-col justify-start gap-3 ${className}`}>
      <h2 className="h2">Experience</h2>
      <Stepper className="ml-5" iconClassName="ring-4 ring-gray-300 dark:ring-neutral-600">
        {experiences.map((experience, index) => {
          return (
            <Step key={index} icon={experience.image}>
              <InfoCard
                title={experience.position}
                subTitle={experience.companyName}
                list={experience.stack}
                listName="Stack"
                dateStart={experience.dateStart}
                dateEnd={experience.dateEnd}
                description={experience.description}
                subTitleLink={experience.link}
              />
            </Step>
          );
        })}
      </Stepper>
    </section>
  );
};

export default Experiences;
