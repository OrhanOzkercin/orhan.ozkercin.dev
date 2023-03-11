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
        width: 409,
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
        description='Devfest is a conference organized by GDG Ankara. I gave a talk about "JavaScript: Behind The Scenes" at the conference. There were more than 300 people listen my talk at the conference'
        images={gdgAnkaraMedia.images}
        logo={gdgAnkaraMedia.logo}
        video={gdgAnkaraMedia.video}
        className="mb-12"
      />
      <div className="mb-12 flex justify-between ">
        <CardWithMedia
          title="Random Ship"
          date="2022"
          organizator="Frontendship"
          description='Frontendship is a community that organizes events about frontend technologies. I gave a talk about "JavaScript: Behind The Scenes" at the event. There were more than 100 people listen my talk at the event'
          logo={{
            path: "/frontendship-logo.png",
            alt: "Frontendship Logo",
            width: 50,
          }}
          className="basis-1/2"
        />
        <iframe
          width="680"
          height="330"
          src="https://www.youtube.com/embed/X1m0WsnotJc"
          title="Random Ship 2: Orhan Özkerçin - JavaScript Behind The Scenes"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex justify-between">
        <CardWithMedia
          title="Meetup #21"
          date="2022"
          organizator="Teknasyon"
          description='Teknasyon organazes meetups about technology once in a every mounth. I gave a talk about "Veri Yapıları Nelerdir ve Neden Bu Kadar Çoklar?" at the event.'
          logo={{
            path: "/teknasyon-logo.png",
            alt: "Teknasyon Logo",
            width: 50,
          }}
          className="basis-1/2"
        />
        <iframe
          width="680"
          height="330"
          src="https://www.youtube.com/embed/r4SJ7QnOFqE"
          title="Veri Yapıları Nelerdir ve Neden Bu Kadar Çoklar?, Orhan Özkerçin - Meetup #21"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Speakings;
