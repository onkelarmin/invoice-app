import { InvoiceList } from "@/components/invoice-list/InvoiceList";
import styles from "./HomePage.module.scss";
import { Heading } from "@/components/utilities/heading/Heading";
import { Wrapper } from "@/components/utilities/wrapper/Wrapper";
import { useInvoiceValue } from "@/context/useInvoiceContext";

export function Homepage() {
  const { invoices } = useInvoiceValue();

  return (
    // <>
    //   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi itaque
    //   natus ratione doloribus placeat at numquam laborum voluptate dolorem
    //   maxime quas praesentium aperiam eligendi eius vero dolores animi, minima
    //   necessitatibus aut esse veritatis. Distinctio asperiores atque eos cumque!
    //   Accusamus esse rem assumenda, quia, atque a voluptas labore dolor aliquid
    //   accusantium beatae deserunt ducimus repellendus in ex cumque fuga.
    //   Deleniti, eligendi eos! Aut quos possimus tempore! Quisquam consectetur
    //   itaque totam maxime inventore, necessitatibus quia. Molestiae atque quae
    //   earum tenetur voluptate nulla accusantium, doloribus voluptatem quam
    //   rerum. Aliquid quos rerum voluptatum eaque repellendus doloribus magnam
    //   velit culpa labore ea? Eligendi beatae facilis eum, atque, ipsam rerum
    //   earum natus officiis sunt iste laudantium quam ab velit repellendus quas
    //   explicabo ullam. Reiciendis, provident aut mollitia deleniti quidem
    //   dolores ipsa quam praesentium! Molestiae voluptas dolorem sint. Explicabo
    //   eum rem accusantium fuga! Unde, velit. Reiciendis voluptates eos dolores
    //   facere maiores harum at labore, corporis, optio aut rerum exercitationem
    //   ipsam et ullam sed impedit architecto delectus ex quos praesentium
    //   excepturi? Deserunt possimus sapiente voluptate ipsam aspernatur
    //   laudantium tempore placeat ratione beatae officia enim dicta, non
    //   molestiae ex, dolorum esse quod ducimus impedit laboriosam amet adipisci
    //   neque ad ea sunt. Fugit cum veniam asperiores. Tempora optio nesciunt
    //   alias. Aspernatur nemo soluta ratione minima explicabo labore recusandae
    //   eveniet, ut praesentium vitae placeat, nulla magnam eos reprehenderit quod
    //   voluptatum ipsam quidem suscipit modi voluptas consequatur saepe sed,
    //   dolore laudantium. Voluptatem quaerat, quidem fugiat placeat magnam eum et
    //   ipsum ad impedit sapiente eaque sint aliquid modi laborum vitae at?
    //   Accusantium facilis vero debitis explicabo, optio tenetur, odit suscipit
    //   unde quas dolorem deleniti harum architecto similique, magnam laudantium.
    //   Sapiente maxime saepe dolorum non ab eos autem minus a, modi, eius impedit
    //   repellendus laboriosam harum animi quo error vitae, distinctio commodi
    //   temporibus nam blanditiis facere! Odit dicta maxime ipsam ex voluptas
    //   tempore expedita repellendus laudantium ratione deserunt provident facilis
    //   nemo sequi officiis, beatae rem laboriosam harum aspernatur eligendi,
    //   saepe iste. Velit perferendis quasi est eum voluptates dolorum minima aut
    //   mollitia culpa accusantium architecto provident pariatur quidem ex sed
    //   sequi ullam, dolor voluptatum in. Quaerat aliquid fugiat eaque commodi
    //   illo totam exercitationem rerum at neque explicabo! Error modi
    //   perspiciatis totam iure beatae quae debitis nisi optio tempora, ab, porro
    //   doloremque cupiditate esse officia sint voluptatem ut quidem delectus
    //   accusamus perferendis iste inventore maxime. Omnis sit facere quae earum
    //   dolor est possimus autem hic officia! Eaque, eveniet aliquid laborum
    //   impedit quia numquam? Repudiandae, impedit fuga! Atque ut, doloribus rem
    //   minus deserunt tempora, illo eum, dicta consequatur impedit nam quos
    //   temporibus saepe consectetur quisquam. Ducimus aspernatur tenetur, iste
    //   non perspiciatis eligendi, error reiciendis, similique rem ipsam dolorem
    //   earum modi dignissimos repellat explicabo quas nihil assumenda minus!
    //   Atque labore nesciunt consequatur consequuntur dicta? Quae commodi error
    //   mollitia asperiores placeat temporibus, praesentium eos delectus! Impedit
    //   temporibus saepe, eaque perferendis repellat maxime. Earum, obcaecati! Nam
    //   dicta doloremque rem. Totam non deserunt officiis voluptates perspiciatis
    //   laborum minima aperiam earum eius similique, ipsum porro nihil iste velit
    //   molestias harum nemo qui vel minus vitae dolorum rerum eum optio! Eveniet
    //   quisquam repellendus voluptate totam eum laborum voluptatem corrupti
    //   quaerat iure expedita doloribus dicta sint commodi obcaecati, est
    //   cupiditate nemo esse molestias minus aliquam sapiente sed iste vero
    //   officia. Eveniet quod hic dignissimos nemo consequuntur consequatur, illum
    //   quam quo laudantium accusantium a suscipit nobis molestiae ullam, id
    //   distinctio cumque fuga corrupti est. Assumenda, cumque! Libero non
    //   reiciendis adipisci laborum sit expedita, omnis dolorum nemo saepe
    //   repellendus dolor distinctio tenetur nisi eius consequuntur, error
    //   reprehenderit harum earum aperiam! Aut suscipit voluptates molestias
    //   facere, obcaecati, dolores aliquid, maxime corporis deleniti omnis
    //   praesentium animi magni cumque enim nihil! Eum cum velit ut. Quia eaque,
    //   consequuntur culpa odio adipisci atque corrupti nesciunt eum, sunt ducimus
    //   officia repudiandae velit. Sunt repudiandae, esse neque officiis amet
    //   atque beatae! Cupiditate, reiciendis temporibus nihil distinctio
    //   dignissimos dolores, dolorem dolore velit numquam ex provident maiores
    //   illum a. Libero voluptatibus vitae aliquid dolorum iusto atque magnam ea
    //   sunt voluptate esse tempora eos, cum laboriosam delectus tempore beatae
    //   fugit id pariatur! Odit, ipsam amet vitae quisquam iste cum eum maiores
    //   laboriosam quia pariatur distinctio eaque cumque animi officiis facilis
    //   culpa. Illum veritatis omnis quibusdam accusamus ex saepe, corporis magnam
    //   modi distinctio soluta odit accusantium excepturi nisi consequuntur. Ut
    //   sed sequi repellendus voluptatem modi, ullam suscipit, assumenda hic
    //   incidunt voluptatum similique veritatis deserunt nam deleniti. Aliquam,
    //   eaque, aliquid ipsum doloribus explicabo commodi officiis officia, dolor
    //   tempora corrupti dicta ipsam mollitia eligendi modi accusantium unde. Quam
    //   culpa blanditiis natus doloremque, qui omnis inventore iure repudiandae
    //   mollitia illo delectus incidunt iste atque, cupiditate ipsam, aliquid
    //   corrupti quisquam dolorum error provident. Nostrum, vel pariatur? Quod
    //   quia labore odit dignissimos recusandae impedit praesentium facere,
    //   corrupti iste similique reiciendis ea voluptates temporibus inventore
    //   nisi, quasi sed cum earum beatae perspiciatis vero doloremque
    //   consequuntur. Odio voluptatem impedit ipsa possimus cum, incidunt placeat
    //   a at assumenda neque error laborum reprehenderit, earum maiores,
    //   asperiores aliquam architecto ea debitis maxime aspernatur? Animi sapiente
    //   obcaecati aspernatur quod accusamus sunt, labore debitis sequi at nostrum
    //   enim itaque necessitatibus quisquam maiores. Harum repudiandae,
    //   dignissimos ea laudantium voluptatibus ullam architecto distinctio quod?
    //   Eveniet at dolorum esse ut iste? Et, porro omnis vel, nemo atque animi qui
    //   fugiat voluptatibus accusantium placeat expedita praesentium nesciunt
    //   ipsam facere! Voluptatibus aspernatur itaque ipsum dolorem labore,
    //   excepturi sed maiores voluptas odit impedit laudantium repudiandae rerum
    //   quidem dolores, commodi non aliquid inventore nobis. Voluptates quaerat
    //   impedit quidem, omnis voluptate consequatur soluta mollitia officia eius
    //   voluptatibus ipsam necessitatibus hic dolore velit tempore corrupti iusto
    //   earum quae nesciunt. Similique pariatur sit sed! Cum nihil optio quaerat
    //   veritatis dignissimos aliquid possimus expedita fugit, sint molestiae
    //   nesciunt quisquam repudiandae sed dicta laborum quas nam! Aperiam, qui
    //   aspernatur consequuntur labore repudiandae ratione quod, voluptate vero
    //   reprehenderit, ipsam soluta ab quam. Vitae dolores natus cupiditate libero
    //   tempore autem, totam delectus tempora sint voluptate, sapiente impedit sed
    //   veritatis! Natus numquam eaque voluptate laboriosam exercitationem saepe
    //   ullam fugit facilis libero ipsam? Illo magni consequatur est placeat
    //   incidunt ratione reprehenderit, id aspernatur? Deserunt, quaerat ullam!
    //   Dolorum sapiente esse non animi ipsum id tempore exercitationem est
    //   aliquid ea delectus incidunt magnam doloribus facere corporis assumenda
    //   vitae consequatur impedit eaque, optio expedita? Illo assumenda, esse
    //   sapiente aliquam dicta corrupti mollitia ipsum minima dolorum tempore vel,
    //   fugit voluptatum dolores. Nostrum veritatis ex autem cum fugit pariatur
    //   libero id deleniti voluptates magni. Alias, tempore! Doloremque deleniti
    //   iure voluptatibus sint tenetur fuga, necessitatibus cum recusandae, rerum
    //   ea mollitia! Sunt in laboriosam cupiditate cum deserunt, consequuntur
    //   molestias iure dolores minima quam harum mollitia enim? Quasi sed cumque
    //   explicabo, quam perferendis natus alias. Sit cum itaque facere iusto fugit
    //   iste ratione hic molestias vero. Aliquid alias, rerum eum sunt obcaecati
    //   voluptatem distinctio error libero. Saepe mollitia maxime, porro, nemo
    //   reiciendis quaerat harum commodi praesentium delectus aliquid facilis
    //   vitae, asperiores dolores perferendis magnam quibusdam! Cumque, rerum nemo
    //   minus culpa pariatur quibusdam placeat sit aspernatur nisi corporis odio
    //   autem modi blanditiis ipsam mollitia eaque dolores amet, eligendi vel
    //   minima recusandae exercitationem consequatur ut! Doloribus, temporibus.
    //   Optio suscipit earum numquam? Blanditiis laudantium pariatur, ex beatae
    //   perferendis alias fugiat laboriosam tempore, a reiciendis recusandae,
    //   autem incidunt impedit quidem quod repudiandae esse. Impedit accusamus
    //   tempora libero quam iure debitis repellendus suscipit molestiae
    //   repudiandae, nostrum sequi aspernatur sunt praesentium consequatur
    //   deserunt nemo labore id eligendi perferendis possimus eius iste
    //   recusandae! Assumenda perspiciatis culpa quo quia necessitatibus nobis
    //   voluptas iusto reiciendis inventore eius consequuntur consequatur tempora
    //   sint beatae sunt, recusandae veritatis adipisci a, possimus fugiat
    //   quisquam iure. Aperiam necessitatibus amet delectus maiores fugiat error
    //   qui quisquam iure commodi odit quam quas tempora nemo optio aut voluptas
    //   natus ab voluptatum culpa perspiciatis, eum dolorum iusto beatae
    //   aspernatur. Iste in quia voluptatum nam quaerat sint minima, facere
    //   cumque, doloribus numquam quas eius voluptatibus veritatis tempora qui
    //   assumenda dolor, vero quis repudiandae rerum cupiditate deserunt?
    //   Dignissimos quaerat nulla, suscipit maxime sed temporibus non perferendis
    //   quasi eaque explicabo ab optio pariatur ipsum consectetur expedita cum,
    //   maiores doloribus? Debitis in, aliquid ducimus est suscipit dicta, illo
    //   sequi quam neque deleniti blanditiis vitae architecto delectus laudantium
    //   eaque consectetur sint. Et, nesciunt maiores ex quae quas rerum incidunt
    //   voluptatibus tempore exercitationem animi veritatis hic eaque perferendis
    //   optio iure tenetur expedita esse earum rem eligendi pariatur? In quasi
    //   error quam? Nostrum voluptates exercitationem, voluptatibus minus
    //   excepturi eveniet non est sequi deleniti tempore culpa alias, consectetur
    //   nam reiciendis id odio rerum praesentium possimus earum doloribus illum
    //   dolore eaque minima consequatur. Sit magni debitis delectus nemo corrupti
    //   quia dicta ut nisi ea voluptatem laboriosam maxime sed, nobis consequatur
    //   perspiciatis laborum natus repellendus reprehenderit vel! Reprehenderit,
    //   sequi corporis. Earum saepe odit doloremque placeat cumque tenetur
    //   molestiae! Iusto asperiores officia reprehenderit deserunt quia
    //   repudiandae neque suscipit necessitatibus error accusamus iste dolorem,
    //   eligendi incidunt delectus facilis inventore voluptate a, quis odit
    //   recusandae laudantium provident magnam. Soluta esse, quaerat suscipit
    //   mollitia distinctio vero harum fugiat. Ex ipsam alias ipsa dolorem
    //   laudantium tenetur, cupiditate voluptas quas. Harum recusandae dicta sed
    //   porro fugit quos ullam cum facere impedit! Voluptatibus neque cupiditate
    //   sed at corrupti perferendis similique ducimus architecto cumque impedit ad
    //   temporibus enim repellat libero eos natus in facere veritatis sequi
    //   consequuntur, amet aliquid expedita magnam placeat. Adipisci, deserunt
    //   expedita reprehenderit hic dicta corrupti explicabo dolorem alias magnam
    //   tenetur eligendi quisquam debitis illum necessitatibus nam? Tempora magnam
    //   autem magni blanditiis maxime dolorem soluta nihil porro tenetur fugit nam
    //   quae perspiciatis, a debitis, laborum voluptas nostrum sunt hic libero
    //   eveniet. Totam hic velit illo eum, soluta sequi? Quos reiciendis voluptas
    //   ratione dignissimos quo. Modi voluptatibus tenetur deserunt dolorem
    //   voluptates facilis pariatur laboriosam rerum libero. Doloribus praesentium
    //   quaerat inventore impedit laudantium vitae, facere ipsam aperiam!
    //   Officiis, distinctio similique veniam hic natus minus omnis, quia facilis
    //   neque vitae minima sit iure aspernatur rerum ratione fugiat culpa animi,
    //   asperiores consectetur quidem! Dolor quibusdam voluptate architecto, sequi
    //   nihil, voluptates facilis quod id recusandae aperiam blanditiis earum,
    //   autem animi nobis cupiditate porro. Vel blanditiis, vero magni nisi
    //   doloremque nemo reiciendis fuga placeat delectus est provident laborum,
    //   non aperiam similique nam molestias repudiandae illo odio earum quaerat
    //   ipsum. Ullam sequi, reiciendis sit rerum quos asperiores tempora magni!
    //   Repudiandae tempora delectus quia magni, velit maxime deserunt aspernatur
    //   impedit? Voluptate incidunt deserunt id, culpa, a ipsum perferendis iure
    //   molestias porro rerum quia. Fugiat minus rem voluptates. Est harum iusto
    //   aspernatur, eius earum, assumenda amet modi voluptatibus quidem porro
    //   nihil eligendi? Ullam quibusdam ex nulla, alias tempore quaerat facilis
    //   quae aliquam modi aperiam non maxime dolor cupiditate repudiandae, maiores
    //   esse sequi, ea laborum at quia veniam. Ratione alias provident non ea
    //   reprehenderit, quos eligendi. Perspiciatis maxime quaerat sit ipsum harum
    //   asperiores? Autem, quo. Hic odit nulla facilis ullam voluptatum, cum,
    //   repudiandae eum adipisci in cumque dicta aspernatur assumenda praesentium,
    //   sequi quasi dolorum quia consequatur minima quo. Fugiat aut deleniti,
    //   impedit libero provident sunt, laborum asperiores a, nulla nobis quo odio?
    //   Reprehenderit accusantium alias eaque nesciunt nostrum, dicta, velit unde
    //   animi asperiores quas sunt necessitatibus? Maxime fugit veniam modi cum
    //   quo! Saepe recusandae odit obcaecati blanditiis dolores eveniet excepturi
    //   sint repellendus nam voluptates aperiam, vitae distinctio corrupti sequi
    //   quia. Dolor vitae amet nesciunt dolores labore laudantium ex molestias
    //   deleniti recusandae enim adipisci dolore, nisi consequuntur est
    //   repudiandae quaerat, cumque reiciendis autem accusantium doloremque omnis.
    //   Explicabo quasi adipisci facilis pariatur dolor ad aut atque hic aliquam
    //   at ea, exercitationem sed porro modi. Qui, quaerat tempore labore
    //   voluptatibus cupiditate quos? Harum fugiat aperiam nobis distinctio enim
    //   animi qui molestiae aspernatur, labore tempora optio quaerat. Adipisci
    //   ipsum animi eligendi nulla non nihil doloribus, doloremque sed, ratione
    //   minus quidem suscipit cum sint dolore in, quae error aspernatur deserunt
    //   earum quia. Debitis, corporis enim id recusandae mollitia provident
    //   similique eum cupiditate excepturi non cumque iure aperiam tempore,
    //   tenetur laborum! Doloremque impedit sunt suscipit fugit, harum vitae ex
    //   quibusdam necessitatibus est dolor esse quod placeat veniam perspiciatis
    //   ut? In nemo ex ipsa, totam quas delectus? Possimus omnis molestiae neque
    //   eveniet! Quisquam necessitatibus maxime ipsam laboriosam repellat aliquid
    //   exercitationem reiciendis ab at laudantium neque, distinctio voluptatum,
    //   ex, vero dolores magni cumque eaque dolor hic eos! Deleniti id recusandae
    //   ducimus nihil iure. Corrupti quidem eum, qui eveniet error itaque aliquam
    //   minus asperiores, expedita fugit aliquid esse officia facere cumque aut
    //   quae hic vitae, id nostrum suscipit porro? Totam, dignissimos aspernatur.
    //   Sapiente, repellendus!
    // </>
    <Wrapper>
      <div className={styles.pageLayout}>
        <div className={styles.headerLayout}>
          <div>
            <Heading tag="h1" size="h1">
              Invoices
            </Heading>
            <p className="font-body-variant mar-block-start-2xs">
              <span className="hide-mobile">There are</span> {invoices.length}{" "}
              <span className="hide-mobile">total</span> invoices
            </p>
          </div>

          <div>Filter and new button</div>
        </div>

        <InvoiceList />
      </div>
    </Wrapper>
  );
}
