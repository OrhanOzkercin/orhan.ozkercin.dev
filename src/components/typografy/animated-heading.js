const AnimatedHeading = ({ text, className, animateContainter = false }) => {
  const word = text.split("");
  let classNames = ` inline-block bg-clip-text text-6xl leading-tight ${className}`;

  function onAnimationEnd(e) {
    const element = e.target;
    element.classList.remove("animated");
    element.classList.remove("rubberBand");
  }

  const onMouseEnter = (e) => {
    const element = e.target;
    if (element.tagName.toLowerCase() == "div" && !animateContainter) return;

    element.classList.add("animated");
    element.classList.add("rubberBand");
  };

  return (
    <div className="relative">
      {word.map((letter, i) => {
        letter === " " && (letter = "\u00A0");
        return (
          <span key={i} onMouseEnter={onMouseEnter} onAnimationEnd={onAnimationEnd} className={classNames}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedHeading;
