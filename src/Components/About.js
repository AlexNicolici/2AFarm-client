import React from "react";

const pharmPhoto = "https://2afarm.ro/wp-content/uploads/2018/10/DSC_0338.jpg";
const pharmPhoto2 = "https://2afarm.ro/wp-content/uploads/2018/10/DSC_0330.jpg";
const partners = [
  {
    id: 1,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/ALVOGEN.jpg",
    url: "https://www.alvogen.ro/",
  },
  {
    id: 2,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/B-BRAUN.jpg",
    url: "https://www.bbraun.ro/ro.html",
  },
  {
    id: 3,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/ANGELINI.jpg",
    url: "https://www.angelinipharma.ro/",
  },
  {
    id: 4,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/ROCHE.jpg",
    url: "https://www.roche.ro/",
  },
  {
    id: 5,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/MAGISTRA.jpg",
    url: "https://www.magistracc.com/",
  },
  {
    id: 6,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/ROMPHARM.jpg",
    url: "http://www.rompharm.ro/",
  },
  {
    id: 7,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/MOLLERS.jpg",
    url: "https://www.mollers.ro/",
  },
  {
    id: 8,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/HIMALAYA.jpg",
    url: "https://www.himalayawellness.com/",
  },
  {
    id: 9,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/ZDROVIT.jpg",
    url: "https://www.zdrovit.ro/",
  },
  {
    id: 10,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/IRCON.jpg",
    url: "https://www.medircon.com/",
  },
  {
    id: 11,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/PHARCO.jpg",
    url: "https://pharco.ro/",
  },
  {
    id: 12,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_200/https://2afarm.ro/wp-content/uploads/2018/10/AMNIOCEN.jpg",
    url: "https://www.amniocen.ro/",
  },
];

function About() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h2 className="text-farm-color text-4xl font-semibold">Cine suntem?</h2>
      <p className="mt-5 text-center">
        Suntem 2A Farm S.R.L. , deținătorii unui depozit modern de medicamente
        (autorizat de Agenția Națională a Medicamentului) și o importanta flotă
        de transport pentru medicamente (15-25 °C și 2-8 °C, conform noului
        GDP). Prin logistica inovatoare proprie, asigurăm distribuția oricărui
        produs, în maxim 24h, către toți clienții 2AFarm.
      </p>

      <div className="w-full flex flex-row flex-wrap justify-around mt-14">
        <div className="flex flex-col justify-center items-center w-96  shadow h-76  rounded-xl">
          <img
            src={pharmPhoto}
            alt="pharm"
            width={400}
            className="rounded-md drop-shadow"
          />
          <p className="w-full p-3">
            În ceea ce privește performanța financiară, vă putem spune că în
            anul 2019 am dezvoltat o cifră afaceri de peste 116 mil. lei.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-96 shadow h-76  rounded-xl">
          <img
            src={pharmPhoto2}
            alt="pharm"
            width={400}
            className="rounded-md drop-shadow"
          />
          <p className="w-full p-3">
            Ne dorim să venim în sprijinul farmaciilor independente, hotărâți
            fiind să ne dezvoltăm împreună.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <p>
          De asemenea, distribuim și produse din portofoliile celor mai mari
          producători pharma prezenți în România.Ca parteneri direcți,
          menționam: Alvogen-Labormed, B Braun, Angelini, Roche (Accu-Chek),
          Magistra, Rompharm, Moller’s, Prisum, Zdrovit, Slavia, Laropharm,
          Pharco, Helcor, Ircon, Health Advisors, etc.
        </p>
        <ul className="flex flex-row flex-wrap justify-around mt-10 gap-4">
          {partners.map((partner) => {
            return (
              <li className="shadow cursor-pointer hover:drop-shadow-md ease-out duration-150">
                <a href={partner.url}>
                  <img src={partner.image} alt="name" width={150} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default About;
