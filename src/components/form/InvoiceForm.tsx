import { Heading } from "@/components/utilities/heading/Heading";
import styles from "./InvoiceForm.module.scss";
import { Button } from "@/components/utilities/button/Button";
import type { Invoice, InvoiceDraft } from "@/types/invoice";
import ArrowIcon from "@/assets/svg/icon-arrow-left.svg?react";

type InvoiceFormProps = {
  type:
    { action: "create" } | { action: "edit"; invoice: Invoice | InvoiceDraft };
};

export function InvoiceForm({ type }: InvoiceFormProps) {
  return (
    <section className={styles.layout} aria-labelledby="form-title">
      <div className={styles.content}>
        <header className={styles.header}>
          <Button variant="ghost" classes={styles.backButton}>
            <ArrowIcon className={styles.arrowIcon} aria-hidden="true" />
            Go back
          </Button>
          <Heading tag="h2" size="h2" id="form-title">
            {type.action === "create" && "New Invoice"}
            {type.action === "edit" && (
              <>
                Edit <span className={styles.hash}>#</span>
                {type.invoice.id}
              </>
            )}
          </Heading>
        </header>

        <form className={styles.form}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maxime
          quia ipsum culpa natus dolor architecto magni repellendus error. Unde
          autem natus omnis similique tempore quas, modi odit eligendi quia,
          odio ab laboriosam est? In, iste molestias. Neque sint modi architecto
          accusantium, excepturi eum perspiciatis numquam nesciunt hic
          voluptatibus alias, eligendi atque. Nemo nihil pariatur tempora
          impedit ullam, voluptates deserunt? Laudantium molestias laboriosam
          exercitationem atque aliquid? Fugit, omnis? Ad corrupti autem eaque at
          eos et expedita a tempore non eligendi ipsa nisi quia deleniti labore
          iure omnis, iste exercitationem. Laborum debitis sunt officiis ex.
          Alias quam mollitia nihil molestiae omnis? Maiores adipisci temporibus
          ab sunt vel illo nisi similique facilis accusamus laboriosam nihil
          laborum aut soluta repellendus ducimus voluptatem eum quia repellat,
          voluptas nobis, incidunt in ipsum? Itaque in ducimus corporis alias!
          Repellendus perferendis, eius sit error aliquid natus, ipsam corrupti
          repudiandae, voluptas ipsum iste. Dolore voluptates, facilis
          repellendus assumenda provident laborum explicabo eum ipsum? Eaque
          dolorum rem nam voluptas alias. Iure recusandae inventore possimus
          hic, eum, dolores nisi impedit perferendis voluptas nulla
          necessitatibus? Eveniet, assumenda deleniti temporibus odio maiores
          quod natus ullam ipsa quae sed expedita necessitatibus possimus est
          adipisci explicabo alias praesentium vitae autem at. Rem ipsa, et odio
          maiores tempore animi sunt laborum cum veniam ut impedit ratione,
          porro temporibus sequi nostrum adipisci earum laudantium. Ad cumque
          fuga ratione ut veniam maxime voluptas eligendi, voluptate assumenda
          eius vero soluta, tempora blanditiis, architecto temporibus commodi
          doloribus molestiae dolor ipsa facilis libero? Ea, dolores nemo quod
          temporibus, sint amet adipisci ab optio nobis recusandae commodi
          laudantium. Quasi doloribus beatae exercitationem fuga, nobis veniam
          accusantium debitis cupiditate magni, optio a. Aliquam, recusandae
          molestias. Repellendus sapiente inventore illo ullam fuga, nobis
          expedita labore commodi. Fugiat in rerum ea ratione ducimus id
          voluptatem libero, neque saepe, natus quo recusandae assumenda
          necessitatibus. Nobis dolores, minus tempora quasi eligendi ipsa,
          assumenda delectus, sapiente in consequuntur culpa accusantium amet
          nostrum modi? Sint, cupiditate aliquid fugit, dolores omnis aperiam
          quasi quisquam eveniet illum explicabo reiciendis, tempore dolor
          tempora nobis. Veniam sapiente unde quis est a. Itaque quo dicta
          beatae. Id ipsa facere odio aliquam rerum explicabo accusantium quia
          officia praesentium iusto debitis maiores dignissimos ut neque
          aspernatur dolores voluptates, illo aperiam eos dolore, voluptatibus
          officiis aliquid. Quaerat, temporibus ducimus ad facilis repellendus
          aspernatur commodi aliquid neque amet aliquam rem optio velit error et
          voluptates. Minus eveniet corrupti quibusdam deleniti accusantium
          ipsa, aut voluptatem nam dolore natus autem non suscipit distinctio
          vitae exercitationem explicabo omnis odit rem. Velit corporis
          accusamus ipsam sed dolor voluptatibus dignissimos quia doloribus
          porro veniam voluptatum repellat a quam id nihil tempora et amet
          expedita atque deleniti officia eos, numquam eveniet. Quas ipsam odio
          consequatur rem tempora, voluptas culpa sequi vitae deserunt deleniti
          eos error neque maxime vel odit aliquam ducimus excepturi eius
          officia! Cum iste perspiciatis necessitatibus consequuntur quod.
          Doloribus fugit asperiores commodi fugiat quidem, dolor deserunt
          suscipit magnam tempora amet, iure debitis veritatis excepturi quia
          illo praesentium magni consequatur? Fugit sunt voluptates natus
          deserunt harum illum quae, illo, sit non omnis nemo eum quia ea
          cupiditate fugiat ab veniam? Perferendis optio error iusto beatae
          ipsam ipsa doloremque hic perspiciatis, odio modi architecto et in?
          Dolorem, at sapiente quisquam adipisci ipsa ullam quos cumque
          doloremque optio vero maxime enim excepturi voluptatem error aut
          perspiciatis voluptas dolorum ipsam aliquam nostrum dignissimos
          temporibus sed eaque. Ea quo, debitis nemo delectus sapiente veniam et
          pariatur. Minima, consequatur tempora. Ea consectetur tenetur cumque
          nobis numquam placeat excepturi ut. Quae pariatur, aut cumque ex totam
          saepe quisquam blanditiis dolore culpa dicta, distinctio voluptates a
          enim dolores minus sunt ea id dolor necessitatibus perspiciatis?
          Nesciunt cum rem laborum? Porro laborum eaque ab eveniet, voluptas
          tempore minima libero optio sequi deleniti odio corrupti distinctio
          voluptatum doloremque doloribus ad obcaecati cum repellat ea
          consequuntur! Voluptatibus vero fugiat animi ipsa corporis a quaerat
          libero, sit consectetur ducimus minus quam, in adipisci beatae! Odit
          quod aliquam perspiciatis! Earum eum iste neque ratione corrupti
          asperiores odit voluptatem autem optio aut libero quam cupiditate
          nobis, dolorem ipsum, eaque doloribus accusamus vero iusto maxime enim
          ullam mollitia beatae. Quaerat, in quasi odit ut expedita aut itaque
          molestias rem, amet veniam, distinctio delectus? Iure, culpa tempore,
          temporibus ipsa fugiat maiores consectetur, error quos laboriosam nemo
          modi necessitatibus similique et laudantium. Soluta repellat quia
          tempora corrupti voluptas ullam, rerum sunt temporibus id omnis
          exercitationem veritatis ut possimus! Ad vero esse neque reprehenderit
          quam magni et facere repudiandae ducimus, sint fuga eius praesentium
          aliquam consequatur eos eum. Distinctio voluptatum quas debitis
          nesciunt illum excepturi, beatae dolorem impedit animi laudantium
          fugit facere repellendus eaque necessitatibus velit aliquid alias
          inventore, at voluptatem ducimus, dolores provident! Provident,
          ducimus dolorem eveniet iste iusto at molestias esse vero aliquid
          dignissimos, corporis hic ab deserunt asperiores, neque sequi delectus
          numquam culpa. Vel illo iure neque velit officiis ex illum ad
          aspernatur quas provident. Suscipit soluta veritatis qui magni ipsum
          illum earum labore eaque provident magnam. Distinctio deleniti, nihil
          accusantium, dolorum repellat inventore, tenetur esse et optio
          possimus quod necessitatibus aut quaerat officiis. Voluptas, nisi!
          Exercitationem laborum eveniet et minus, a quaerat obcaecati id, neque
          minima quibusdam odit, nisi dolor est quo enim? Laborum optio saepe
          inventore voluptatem laboriosam magni dolorem voluptatibus minus animi
          quisquam similique officia iusto velit architecto pariatur sunt eius
          labore, commodi nisi magnam laudantium voluptas! Ipsa fugiat possimus
          porro dolorum eligendi et accusamus veniam distinctio consequuntur
          harum ut sunt eveniet culpa quaerat praesentium, illo, nesciunt
          voluptates fugit nostrum dignissimos maxime odio? Alias minima nemo
          delectus? Explicabo, quidem in! Debitis quidem saepe molestiae nisi
          sequi, quis, placeat quibusdam asperiores, maiores harum voluptatem
          laboriosam sint fugit rem mollitia necessitatibus alias eius sit
          temporibus illo numquam. Assumenda similique optio facere ratione,
          possimus debitis molestias modi. Animi, fuga? Corporis sequi facilis
          accusamus id, officiis nemo deserunt mollitia ullam! Odio, aut ut! Sit
          non officiis inventore praesentium molestiae accusantium aliquid qui
          recusandae ipsum cupiditate labore quam corrupti maiores, nobis ex eos
          cum ipsa illum deleniti nihil rem odio minima architecto. Fugit eum
          blanditiis dolor beatae voluptas nisi distinctio nulla magnam ipsum
          vel corporis, veritatis, molestias modi.
        </form>
      </div>

      <footer className={styles.footer}>
        {type.action === "create" && (
          <>
            <Button variant="secondary">Discard</Button>
            <div className={styles.buttonGroup}>
              <Button variant="save-as-draft" type="submit">
                Save as Draft
              </Button>
              <Button variant="primary" type="submit">
                Save & Send
              </Button>
            </div>
          </>
        )}
        {type.action === "edit" && (
          <>
            <Button variant="secondary">
              Discard<span className="hide-mobile"> Changes</span>
            </Button>
            <div className={styles.buttonGroup}>
              {type.invoice.status === "draft" && (
                <Button variant="save-as-draft" type="submit">
                  Save Draft
                </Button>
              )}

              <Button variant="primary" type="submit">
                Save<span className="hide-mobile"> & Send</span>
              </Button>
            </div>
          </>
        )}
      </footer>
    </section>
  );
}
