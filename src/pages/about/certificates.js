import { CardWithMedia } from "@/components/cards/card-with-media";
import { InfoCard } from "@/components/cards/info-card";
import { Hackerrank } from "../../assets/icons";

const Certificates = ({ className }) => {
  return (
    <section className={`mt-12 flex flex-col items-start justify-start gap-3 lg:mt-0 lg:ml-16 ${className}`}>
      <h2 className="mb-8 text-3xl font-bold text-light-text dark:text-dark-text">Certificates</h2>
      <InfoCard
        title={"JS (Intermediate) Certificate at Hackerrank"}
        titleClassName="font-normal"
        dateStart={2022}
        titleLink="https://www.hackerrank.com/certificates/c24b2ebe3184"
      />
      <InfoCard
        title={"NodeJS Bootcamp at Patika.dev"}
        titleClassName="font-normal"
        dateStart={2022}
        titleLink="https://verified.sertifier.com/en/verify/24373278604920?ref=email"
      />
      <InfoCard
        title={"JS (Basic) Certificate at Hackerrank"}
        titleLink="https://www.hackerrank.com/certificates/2fbb20d8688f"
        titleClassName="font-normal"
        dateStart={2022}
      />
      <InfoCard
        title={"JavaScript Bootcamp at Kodluyoruz﻿"}
        titleClassName="font-normal"
        dateStart={2022}
        titleLink="https://verified.sertifier.com/en/verify/13834388457275"
      />
    </section>
  );
};
export default Certificates;
