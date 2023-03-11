import { CardWithMedia } from "@/components/cards/card-with-media";

const Speakings = ({ className }) => {
  const gdgIzmirMedia = {
    logo: {
      path: "/events/gdg-logo.svg",
      alt: "GDG Izmir Logo",
      width: 50,
    },
    images: [
      {
        path: "/events/izmir-1.png",
        alt: "Orhan Ozkercin answering the questions of people around him at GDG Izmir event",
        width: 710,
        height: 500,
      },
      {
        path: "/events/izmir-2.png",
        alt: "Orhan Ozkercin showing demo about JavaScript at GDG Izmir event",
        height: 200,
      },
    ],
    video: {
      path: "/events/izmir-4.mov",
      height: 300,
    },
  };
  const gdgAnkaraMedia = {
    logo: {
      path: "/events/gdg-logo.svg",
      alt: "GDG Izmir Logo",
      width: 50,
    },
    images: [
      {
        path: "/events/ankara-1.png",
        alt: "Orhan Ozkercin answering the questions of people around him at GDG Ankara event",
        height: 300,
      },
      {
        path: "/events/ankara-2.png",
        alt: "Orhan Ozkercin showing demo about JavaScript at GDG Ankara event",
        width: 542,
      },
      {
        path: "/events/ankara-3.png",
        alt: "Orhan Ozkercin making presentation about JavaScript at GDG Ankara event",
        width: 407,
      },
    ],
  };
  return (
    <section className={`mt-12 flex flex-col justify-start gap-3 ${className}`}>
      <h1 className="mb-8 text-3xl font-bold text-light-text dark:text-dark-text">Speakings</h1>
      <CardWithMedia
        title="Devfest'22"
        date="2022"
        organizator="GDG Izmir"
        description='Devfest is a conference organized by GDG Izmir. I gave a talk about "JavaScript: Behind The Scenes" at the conference. There were more than 1000 attendees at the conference'
        images={gdgIzmirMedia.images}
        logo={gdgIzmirMedia.logo}
        video={gdgIzmirMedia.video}
        className="mb-12"
      />

      <CardWithMedia
        title="Devfest'22"
        date="2022"
        organizator="GDG Ankara"
        description='Devfest is a conference organized by GDG Izmir. I gave a talk about "JavaScript: Behind The Scenes" at the conference. There were more than 1000 attendees at the conference'
        images={gdgAnkaraMedia.images}
        logo={gdgAnkaraMedia.logo}
        video={gdgAnkaraMedia.video}
      />
    </section>
  );
};

export default Speakings;
