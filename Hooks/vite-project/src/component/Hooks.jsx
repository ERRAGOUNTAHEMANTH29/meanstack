import { useState } from "react";
import "./Hooks.css";
export default function Hooks() {
  const [showPara, setShowPara] = useState(true);
  console.log(showPara, "showPara");
  const heading = "Welcome";
  const [ShowHeading, setHeading] = useState(heading);
  return (
    <>
      {showPara === false && (
        <button type="button" onClick={() => setShowPara(true)}>
          Show
        </button>
      )}

      {showPara === true && (
        <button type="button" onClick={() => setShowPara(false)}>
          Hide
        </button>
      )}
      {showPara === true && (
        <article>
          <section>
            <p>{ShowHeading}</p>
            <p class="first_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              placeat consectetur atque tempore? Eligendi, recusandae. Soluta
              voluptatum optio nobis, facilis nostrum facere laudantium repellat
              eius voluptate voluptatem sint nihil. Nam vitae beatae dolor,
              quaerat pariatur provident. Totam officiis velit dolore quis quo
              consequuntur facere. Nesciunt cumque ab officia iste vero.
            </p>
          </section>

          <section>
            <p class="second_para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ab
              voluptatum vitae excepturi itaque totam magnam similique accusamus
              quas nemo fuga dolorem vel ut, magni unde, eum debitis sequi eaque
              officia doloremque repellat? Numquam nemo dolor itaque minus
              inventore molestias sunt iusto quod molestiae, dolore assumenda
              qui a consequuntur deleniti hic quasi eos provident! Tenetur qui
              quasi, quod deleniti inventore iste repudiandae accusantium
              consequuntur corporis alias quos soluta molestias quisquam porro
              corrupti, nobis eveniet, totam debitis animi ad veniam tempore
              expedita perferendis? Optio illo laboriosam illum et molestiae
              repellat reprehenderit voluptas dolorum voluptatem deserunt.
              Laborum voluptatem explicabo voluptate id dignissimos!
            </p>
          </section>
        </article>
      )}
    </>
  );
}