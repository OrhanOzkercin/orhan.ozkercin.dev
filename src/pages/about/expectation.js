import { InfoCard } from "@/components/cards/info-card";
import Image from "next/image";

const Expectations = ({ className }) => {
  return (
    <section className={`mt-12 flex flex-col justify-start gap-3 ${className}`}>
      <h2 className="mb-8 text-3xl font-bold text-light-text dark:text-dark-text">My Expectations</h2>
      <ol>
        <li className="text-xl leading-10 text-gray-500 dark:text-gray-400">
          👉 A team with good communication skills.{" "}
        </li>
        <li className="text-xl leading-10 text-gray-500 dark:text-gray-400">👉 A culture of refactoring. </li>
        <li className="text-xl leading-10 text-gray-500 dark:text-gray-400">
          {" "}
          👉 A team that prioritizes creating maintainable and testable code.
        </li>
        <li className="text-xl leading-10 text-gray-500 dark:text-gray-400">👉 A team that works with data.</li>
        <li className="text-xl leading-10 text-gray-500 dark:text-gray-400">
          {" "}
          👉 Consistent code review and feedback process.
        </li>
        <li className="text-xl leading-10 text-gray-500 dark:text-gray-400">
          {" "}
          👉 Opportunity for professional growth and learning new skills.
        </li>
      </ol>
    </section>
  );
};

export default Expectations;
