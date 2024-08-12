import Cards from "./cards.html.twig";

import Button from "../button/button.html.twig";

export default {
  title: "Components/Cards",
  args: {
    cards: [
      {
        header: "<h3>Join now!</h3>",
        media: null,
        body: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>`,
        // Pass any number of components with more template literal strings.
        footer: `${Button({ label: "Become a member" })}`,
      },
      {
        header: "<h3>Food loss & Waste</h3>",
        media: null,
        body: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam, ipsam dolor incidunt a quae odio qui veritatis aut aliquam?</p>`,
        // Pass any number of components with more template literal strings.
        footer: `${Button({ label: "Read more on food waste" })}`,
      },
      {
        header: "<h3>Now available!</h3>",
        media: null,
        body: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi quo sequi nisi consectetur suscipit hic similique, quisquam fugit quas autem iste fugiat eligendi quis nam. Delectus, reprehenderit. Perspiciatis praesentium deserunt repellat dolore.</p>`,
        // Pass any number of components with more template literal strings.
        footer: `${Button({ label: "Checkout prototype" })}`,
      },
    ],
  },
  component: Cards,
};

export const Default = {};

export const Flag = {
  args: {
    variant: "flag",
    cards: [
      {
        header: "<h3>We choose to go to the moon</h3>",
        body: `<p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</p>`,
        // Pass any number of components with more template literal strings.
        footer: `${Button({ label: "Read going to the moon" })}`,
      },
      {
        header:
          "<h3>Spaceflight will never tolerate carelessness, incapacity, and neglect.</h3>",
        body: `<p>Somewhere, somehow, we screwed up. It could have been in design, build, or test. Whatever it was, we should have caught it. We were too gung ho about the schedule and we locked out all of the problems we saw each day in our work.</p>`,
        footer: `${Button({ label: "Read building better" })}`,
      },
      {
        header:
          "<h3>There is no strife, no prejudice, no national conflict in outer space as yet.</h3>",
        body: `<p>Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain?</p>`,
        footer: `${Button({ label: "Read avoiding conflict" })}`,
      },
      {
        header: "<h3>The most significant things</h3>",
        body: `<p>When we think about Apollo, is that it has opened for us, for us being the World, a challenge of the future.</p>`,
        footer: `${Button({ label: "Read significant things" })}`,
      },
      {
        header: "<h3>Principles of relativity</h3>",
        body: `<p>The principle of relativity states that all inertial systems are "created equal": the laws of physics are the same as long as they are formulated with respect to an inertial frame.</p>`,
        footer: `${Button({ label: "Read relativity principles" })}`,
      },
      {
        header: "<h3>Fundamental concepts</h3>",
        body: `<p>The fundamental concepts of classical physics, space, time, mass, and derived concepts, velocity, momentum, force, angular momentum, energy.</p>`,
        footer: `${Button({ label: "Read fundamentals" })}`,
      },
    ],
  },
};
