import React from "react";

const agentsData = [
  {
    name: "Jonathan Kirby",
    photo: "./src/images/agent1.jpg",
    description:
      "Introducing Jonathan: a charismatic and driven man who captivates with his strength, compassion, and unwavering commitment to personal growth. His magnetic presence, genuine smile, and empathy make him a trusted friend and confidant, while his loyalty and enthusiasm inspire those around him. Jonathan is a remarkable individual, embodying the essence of a compassionate and accomplished man.",
  },
  {
    name: "Emily farber",
    photo: "./src/images/agent2.jpg",
    description:
      "Meet Emily, a standout real estate agent known for her expertise, attention to detail, and exceptional client service. With a keen eye for the market, she guides buyers and sellers with professionalism and strong negotiation skills. Emilys genuine care and passion make her a trusted advisor, creating memorable experiences for her clients. She is a true industry standout deserving of the highest praise.",
  },
  {
    name: "Mark Mcdowell",
    photo: "./src/images/agent3.jpg",
    description:
      "Meet Mark, a highly skilled male real estate agent renowned for his expertise and exceptional client service. With sharp negotiation skills and deep market knowledge, he effortlessly guides clients through successful transactions. Marks professionalism and commitment to personalized experiences make him a trusted advisor in the industry, consistently surpassing expectations.",
  },
  {
    name: "Sarah Rogers",
    photo: "./src/images/agent4.jpg",
    description:
      "Meet Sarah, an exceptional female real estate agent renowned for her expertise and outstanding service. With professionalism and attention to detail, she guides clients seamlessly through transactions, ensuring their needs are met. With a degree from harvard university, and endless transactions with her name signed on them, Sarahs dedication and genuine passion make her a trusted advisor, leaving a lasting impression in the industry.",
  },
  {
    name: "Emma Fitzberg",
    photo: "./src/images/agent5.jpg",
    description:
      "Introducing Emma, a highly skilled female real estate agent with a stellar reputation in the industry. Her professionalism, strong communication skills, and attention to detail make her a trusted advisor. Emmas commitment to providing personalized experiences ensures that each client receives tailored support and achieves their real estate goals. With her expertise and unwavering dedication, Emma is a true asset, leaving a lasting impact on those she serves.",
  },
];

const Agents = () => {
  return (
    <div className="agents-page">
      <br /><br />
      <h1 id="h1-agents">Our Agents</h1>
      <div className="agents-container">
        {agentsData.map((agent, index) => (
          <div className="agent-card" key={index}>
            <img src={agent.photo} alt={agent.name} className="agent-photo" />
            <h2 id="h2-agents">{agent.name}</h2>
            <p id="p-agents">{agent.description}</p>
            <a id="agent-link" href="http://www.remax.co.il/he" target="_blank">Explore More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
