/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Description() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="description" className="pt-[35rem]  sm:pt-48">
      <div
        className="flex gap-8 flex-col relative px-8 max-w-5xl mx-auto"
        data-aos="fade-up"
      >
        <h2>Qui suis-je?</h2>
        <div className="w-4/5  mx-auto rounded-lg px-10 py-6 backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-40 dark:bg-opacity-40 bg-blue-9 dark:bg-bluedark-9  sdw dark:sdw-dark">
          <p className="description tracking-wide">
            Diplômé d'un Master en Production et Logistique, j'ai débuté dans la
            planification de production dans le secteur pharmaceutique,
            acquérant une expertise en gestion de projet. Ma passion pour la
            technologie m'a ensuite orienté vers le développement web, me
            spécialisant en React.
          </p>
          <p className="description">
            Avec une formation spécialisée en React, je suis prêt à m'investir
            dans des projets novateurs, en appliquant mes compétences techniques
            pour des solutions efficaces et qualité
          </p>
          <p className="description">
            Attiré par les avancées technologiques et les défis stimulants, mon
            objectif est d'apporter des solutions efficaces et méticuleuses dans
            mes projets.
          </p>
          <p className="description m-0">
            Appréciant la collaboration, je suis ouvert à des discussions sur
            des projets ou des idées novatrices en technologie.
          </p>
        </div>
      </div>
    </section>
  );
}
