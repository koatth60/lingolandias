import Header from "../sections/Header";
import Footer from "../sections/Footer";
import agata from "../assets/agata.png";
import agata2 from "../assets/agata2.png";
const Courses = () => {
  return (
    <div>
      <Header />
      <section className="h-screen flex justify-center items-center font-oswald font-semibold">
        <div className="flex  gap-6  ">
          <div>
            <a href="#english" className="cursor-pointer scroll-smooth">
              <img src={agata} width={450} alt="" />
            </a>
            <h3 className="text-center">English Course</h3>
          </div>
          <div>
            <a href="#spanish" className="cursor-pointer">
              <img src={agata2} width={450} alt="" />
            </a>
            <h3 className="text-center">Spanish Course</h3>
          </div>
          <div>
            <a href="#polish" className="cursor-pointer">
              <img src={agata} width={450} alt="" />
            </a>
            <h3 className="text-center">Polish Course</h3>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
      <section className="">
        <div>
          <h2 id="english">English</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quam
            culpa natus tempora ipsum illo enim, hic repellat distinctio dolores
            cumque in explicabo quis sed expedita, impedit numquam, neque
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sint corporis reiciendis dolorem nihil quae natus deleniti, placeat,
            iste esse officiis veniam suscipit iusto voluptate cum explicabo?
            Architecto, atque voluptates. Dolore velit placeat nulla distinctio
            voluptate eaque totam nobis sunt vel ab voluptatibus aut tempora
            quibusdam aliquam cupiditate, aliquid iure aperiam magnam
            exercitationem laudantium perspiciatis. Excepturi dolorem nam qui
            unde. Repellat sed cupiditate, autem veritatis quo nemo assumenda in
            quaerat. Asperiores dolorem laudantium ipsum. Dolorem quia provident
            fugiat earum voluptatum doloremque facere voluptatibus labore id
            magnam, laudantium iure minus ad! Maxime illum labore nisi iure
            molestiae eius praesentium, neque saepe asperiores fugiat numquam
            qui quaerat, doloremque laborum, dolore accusamus vel autem quod
            adipisci distinctio voluptatum! Assumenda saepe dicta nisi debitis?
          </p>
        </div>
        <div>
          <h2 id="spanish">Spanish</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quam
            culpa natus tempora ipsum illo enim, hic repellat distinctio dolores
            cumque in explicabo quis sed expedita, impedit numquam, neque
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sint corporis reiciendis dolorem nihil quae natus deleniti, placeat,
            iste esse officiis veniam suscipit iusto voluptate cum explicabo?
            Architecto, atque voluptates. Dolore velit placeat nulla distinctio
            voluptate eaque totam nobis sunt vel ab voluptatibus aut tempora
            quibusdam aliquam cupiditate, aliquid iure aperiam magnam
            exercitationem laudantium perspiciatis. Excepturi dolorem nam qui
            unde. Repellat sed cupiditate, autem veritatis quo nemo assumenda in
            quaerat. Asperiores dolorem laudantium ipsum. Dolorem quia provident
            fugiat earum voluptatum doloremque facere voluptatibus labore id
            magnam, laudantium iure minus ad! Maxime illum labore nisi iure
            molestiae eius praesentium, neque saepe asperiores fugiat numquam
            qui quaerat, doloremque laborum, dolore accusamus vel autem quod
            adipisci distinctio voluptatum! Assumenda saepe dicta nisi debitis?
          </p>
        </div>
        <div>
          <h2 id="polish">Polish</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quam
            culpa natus tempora ipsum illo enim, hic repellat distinctio dolores
            cumque in explicabo quis sed expedita, impedit numquam, neque
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sint corporis reiciendis dolorem nihil quae natus deleniti, placeat,
            iste esse officiis veniam suscipit iusto voluptate cum explicabo?
            Architecto, atque voluptates. Dolore velit placeat nulla distinctio
            voluptate eaque totam nobis sunt vel ab voluptatibus aut tempora
            quibusdam aliquam cupiditate, aliquid iure aperiam magnam
            exercitationem laudantium perspiciatis. Excepturi dolorem nam qui
            unde. Repellat sed cupiditate, autem veritatis quo nemo assumenda in
            quaerat. Asperiores dolorem laudantium ipsum. Dolorem quia provident
            fugiat earum voluptatum doloremque facere voluptatibus labore id
            magnam, laudantium iure minus ad! Maxime illum labore nisi iure
            molestiae eius praesentium, neque saepe asperiores fugiat numquam
            qui quaerat, doloremque laborum, dolore accusamus vel autem quod
            adipisci distinctio voluptatum! Assumenda saepe dicta nisi debitis?
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
