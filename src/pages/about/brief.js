const Brief = ({ className }) => {
  return (
    <section className={`flex flex-col justify-start gap-3 ${className}`}>
      <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">About</h2>
      <p className="w-full text-base font-normal  ">
        With over 3 years of experience in frontend development, I am a skilled developer specializing in JavaScript. My
        passion for building visually stunning and functional user interfaces has driven me to become proficient in
        several popular frameworks, including Angular, VueJS, and ReactJS.
        <br />
        <br />
        My expertise in VueJS has allowed me to easily transition to ReactJS, where I have been eagerly exploring its
        vast capabilities for the past three months. My proficiency in JavaScript has also allowed me to adapt quickly
        to new technologies and frameworks, making me a valuable asset to any team.
        <br />
        <br />
        As a frontend developer, I understand the importance of creating intuitive and engaging interfaces that
        prioritize the user experience. Working collaboratively with designers and other developers, I strive to ensure
        seamless integration of front-end and back-end technologies.
        <br />
        <br />
        When I&apos;m not coding, I enjoy attending tech conferences and meetups to stay up-to-date with the latest
        industry trends. Overall, I&apos;m a dedicated and skilled frontend developer with a passion for creating
        amazing user experiences. If you are looking for a professional who is proficient in multiple frameworks and is
        committed to delivering top-quality work, look no further. Let&apos;s work together to bring your vision to
        life!
      </p>
    </section>
  );
};

export default Brief;
