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
      <h2 className="mb-8 text-3xl font-bold text-light-text dark:text-dark-text">Speakings</h2>
      <CardWithMedia
        title="Devfest'22"
        date="2022"
        organizator="GDG Izmir"
        description='Devfest is a conference hosted by GDG Izmir, where I delivered a talk titled "JavaScript: Behind The Scenes." The conference was attended by over 1000 participants.'
        images={gdgIzmirMedia.images}
        logo={gdgIzmirMedia.logo}
        video={gdgIzmirMedia.video}
        className="mb-12"
      />
      <CardWithMedia
        title="Devfest'22"
        date="2022"
        organizator="GDG Ankara"
        description='Devfest is a conference hosted by GDG Ankara. During the conference, I presented a talk titled "JavaScript: Behind The Scenes," which was attended by more than 300 people.'
        images={gdgAnkaraMedia.images}
        logo={gdgAnkaraMedia.logo}
        video={gdgAnkaraMedia.video}
        className="mb-12"
      />
      <div className="mb-12 flex flex-col justify-between sm:flex-row">
        <CardWithMedia
          title="Random Ship"
          date="2022"
          organizator="Frontendship"
          description='Frontendship is a community that hosts events on frontend technologies. During the event, I presented a talk titled "JavaScript: Behind The Scenes," which was watched more than 8000.'
          logo={{
            path: "/frontendship-logo.png",
            alt: "Frontendship Logo",
            width: 50,
          }}
          className="flex sm:basis-1/2"
        />
        <iframe
          width="100%"
          height="330"
          className="sm:ml-16 sm:basis-1/2"
          src="https://www.youtube.com/embed/X1m0WsnotJc"
          title="Random Ship 2: Orhan Özkerçin - JavaScript Behind The Scenes"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <CardWithMedia
          title="Meetup #21"
          date="2022"
          organizator="Teknasyon"
          description='Teknasyon organizes monthly meetups on technology. I presented a talk on "What are Data Structures and Why are There so Many?" during the latest event.'
          logo={{
            path: "/teknasyon-logo.png",
            alt: "Teknasyon Logo",
            width: 50,
          }}
          className="sm:basis-1/2"
        />
        <iframe
          width="100%"
          height="330"
          src="https://www.youtube.com/embed/r4SJ7QnOFqE"
          title="Veri Yapıları Nelerdir ve Neden Bu Kadar Çoklar?, Orhan Özkerçin - Meetup #21"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="sm:ml-16 sm:basis-1/2"
        ></iframe>
      </div>
    </section>
  );
};

export default Speakings;
