import { Badge, Flex } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import projets from '../data/Projets.json';
import { GitHubLogo } from '../assets/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useThemeContext } from '../Context/ThemeContext';

export default function Realisations() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { lang } = useThemeContext();

  return (
    <section id="realisations" className="flex gap-10 flex-col pt-64  ">
      <div className="flex gap-8 flex-col relative px-8 max-w-7xl mx-auto">
        <h2>Réalisations</h2>

        <div className=" relative px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap flex-col md:grid md:grid-cols-2 md:gap-12 justify-start gap-8">
            {projets.map((projet, i) => (
              <CardRealisation
                animation="fade-up"
                key={i + projet.titre}
                text={projet.lang[lang]}
                title={projet.titre}
                tags={projet.tags}
                img={projet.image}
                git={projet.git}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CardRealisation({ text, title, img, tags, git, animation }) {
  return (
    <div
      data-aos={animation}
      className="flex flex-col gap-6 flex-1  rounded-lg px-4 py-4 backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-40 dark:bg-opacity-40 bg-blue-9 dark:bg-bluedark-9 sdw dark:sdw-dark  "
    >
      <div className="relative w-full h-48 rounded-t-md">
        <img
          className="w-full h-full object-cover rounded-t-md"
          src={img}
          alt="projet"
          loading="lazy"
          title={title}
        />
        <GitHubLogo
          git={git}
          className="absolute top-0 left-0 h-10 w-10 cursor-pointer"
        />
      </div>
      <Flex direction="column" gap="4" justify="between" className="h-full">
        <Flex direction="column" gap="2">
          <h3
            className="text-2xl font-semibold"
            onClick={() => window.open(git, '_blank')}
          >
            {title}
          </h3>
          <p className="text-justify leading-8 text-lg">{text}</p>
        </Flex>
        <div className="flex flex-wrap gap-5 ">
          {tags.map((tag, i) => (
            <Badge
              key={i + tag}
              className="dark:bg-bluedark-10 bg-opacity-0 text-blue-12 gap-2"
            >
              <p className="text-blue-12 dark:text-bluedark-12 text-lg">
                {tag}
              </p>
            </Badge>
          ))}
        </div>
      </Flex>
    </div>
  );
}
CardRealisation.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  tags: PropTypes.array,
  git: PropTypes.string,
  animation: PropTypes.string,
};
