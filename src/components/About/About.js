import React, { Fragment } from "react";
import { Container, Image } from "react-bootstrap";
import classes from "./About.module.css";
import bandmem from "../img/bandmem.png";
const About = () => {
  return (
    <Fragment>
      <Container className={classes.container} style={{ width: "50rem" }}>
        <h2>About</h2>
        <p>
          <Image className={classes.img} src={bandmem} roundedCircle />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          molestiae optio rerum beatae, ut cumque. Voluptates veniam rerum
          placeat delectus, harum dignissimos reprehenderit eaque possimus
          labore fugiat magni aperiam ut! Qui quibusdam temporibus delectus at
          illo! Deserunt incidunt modi commodi provident fugit dolores totam,
          libero nisi ab repudiandae nam magni neque sunt iusto. Rem recusandae
          dolore eaque excepturi fuga! Fugiat? Accusamus, reprehenderit ut! Nam
          voluptatum suscipit minus incidunt dolorem, perspiciatis numquam!
          Consequuntur vel nisi reprehenderit officiis ea quis nam aut modi
          alias possimus, architecto esse ratione voluptates optio animi
          tenetur! Molestias fugiat nisi neque aliquid dicta temporibus odit
          error nobis.
        </p>
        <p>
          Rem fugit repellendus, distinctio aliquid non dignissimos amet
          possimus qui laboriosam natus tempora. Fugiat debitis, facilis
          pariatur natus placeat animi. Consequuntur magnam ullam adipisci
          officiis? Corporis tempore officia nisi eius. Numquam veniam
          consequuntur aut quas blanditiis obcaecati animi itaque quis
          perspiciatis molestias adipisci iste quae inventore saepe, non dolorem
          autem? Incidunt quisquam placeat, officia id velit dignissimos beatae,
          distinctio recusandae eius temporibus quos atque quis necessitatibus
          aspernatur veritatis nesciunt vero delectus corrupti. Necessitatibus,
          aspernatur consequatur non veritatis error vel natus! Expedita maxime,
          dolorem placeat distinctio rerum, similique optio magnam id enim ullam
          repellat repudiandae iusto. Inventore aspernatur ea ducimus nihil,
          modi nemo fugit quidem ullam ipsam consequuntur, reprehenderit minus
          cumque? Vel reprehenderit sint, dolorem velit ipsa rerum laudantium
          tenetur sit autem maxime inventore consectetur ullam impedit
          accusamus. Ullam nesciunt consequuntur expedita natus.
        </p>
      </Container>
    </Fragment>
  );
};

export default About;
