import { AuthorInfo } from "./components/AuthorInfo";
import { Footer } from "./components/Footer";
import { Navegation } from "./components/Navegation";
import { Testimonials } from "./components/Testimonials";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navegation />

        <section class="hero-section">
          <img src="images/illustration-intro.svg" alt="illustration-intro" />
          <div>
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="button--shadow">Get Started</button>
          </div>
        </section>
      </header>

      <section className="hero-section manage-section">
        <div className="title">
          <h2>What’s different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="content">
          <button>01</button> <strong>Track company-wide progress</strong>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
          <button>02</button> <strong>Advanced built-in reports </strong>
          <p>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
          <button>03</button> <strong>Everything you need in one place</strong>
          <p>
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </section>

      <Testimonials />

      <section>
        <p>Simplify how your team works today.</p>
        <button>Get Started</button>
      </section>

      <Footer />
      <AuthorInfo />
    </>
  );
}

export default App;
