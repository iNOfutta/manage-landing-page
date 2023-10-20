import { useState } from "react";

export const Testimonials = () => {
  const testimonies = [
    {
      name: "Anisha Li",
      image: "images/avatar-anisha.png",
      text: `Manage has supercharged our team’s workflow. The ability to
  maintain visibility on larger milestones at all times keeps everyone
  motivated.`,
    },
    {
      name: "Ali Bravo",
      image: "images/avatar-ali.png",
      text: `We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is much
            more focused.`,
    },
    {
      name: "Richard Watts",
      image: "images/avatar-richard.png",
      text: `Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!`,
    },
    {
      name: "Shanai Gough",
      image: "images/avatar-shanai.png",
      text: `Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without being
            intrusive.`,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleChange = (index) => setCurrentTestimonial(index);

  const handleCurrentTestimonial = (index)=>
  currentTestimonial === index?"circle circle--bg":"circle";

  return (
    <section className="testmonials-section">
      <div className="testimonials">
        <h2>What they’ve said</h2>
        {testimonies.map((item, index) => (
          <div
            className={
              index === currentTestimonial ? "testimonials" : "sr-only"
            }
            key={item.name}
          >
            <img src={item.image} alt={item.name} />
            <strong>{item.name}</strong>
            <p>{item.text}</p>
          </div>
        ))}

        <div className="nav-circles">
          <div
            className={
            handleCurrentTestimonial(0)}
            onClick={() => handleChange(0)}
          ></div>
          <div
            className={
              handleCurrentTestimonial(1)
            }
            onClick={() => handleChange(1)}
          ></div>
          <div
            className={
              handleCurrentTestimonial(2)
            }
            onClick={() => handleChange(2)}
          ></div>
          <div
            className={
              handleCurrentTestimonial(3)
            }
            onClick={() => handleChange(3)}
          ></div>
        </div>

        <button className="button--shadow">Get Started</button>
      </div>
    </section>
  );
};
