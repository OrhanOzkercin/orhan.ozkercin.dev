import { InfoCard } from "@/components/cards/info-card";
import Image from "next/image";

const Education = ({ className }) => {
  return (
    <section className={`mt-12 flex flex-col items-start justify-start gap-3 lg:mt-0 ${className}`}>
      <h1 className="mb-8 text-3xl font-bold text-light-text dark:text-dark-text">Education</h1>
      <div className="flex gap-3">
        <Image
          src="/ogu-logo.png"
          alt="Osmangazi University logo"
          width={50}
          height={50}
          className="h-fit w-fit object-cover"
        />
        <InfoCard
          title="Eskisehir Osmangazi University"
          titleLink="https://ceng.ogu.edu.tr/en"
          subTitle="Computer Engineering"
          description="Turkey"
        />
      </div>
      <div className="mt-4 flex gap-3">
        <Image
          src="/ubb-logo.png"
          alt="Babeș-Bolyai University logo"
          width={50}
          height={50}
          className="h-fit w-fit object-cover"
        />
        <InfoCard
          title="Babeș-Bolyai University"
          titleLink="http://www.cs.ubbcluj.ro/en/"
          subTitle="Computer Sciences"
          description="Romania"
        />
      </div>
    </section>
  );
};

export default Education;
