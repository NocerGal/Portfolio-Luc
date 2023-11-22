import { Badge, Flex } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import projets from '../data/Projets.json';
import { GitHubLogo } from '../assets/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../Context/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function Realisations() {
  const [more, setMore] = useState(4);

  useEffect(() => {
    AOS.init();
  }, []);
  const { lang } = useThemeContext();
  const { t } = useTranslation();
  return (
    <section id="realisations" className="flex gap-10 flex-col pt-64  ">
      <div className="flex gap-8 flex-col relative px-8 max-w-7xl mx-auto">
        <h2>{t('realisations-title')}</h2>

        <div className=" relative px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap flex-col md:grid md:grid-cols-2 md:gap-12 justify-start gap-8">
            {projets.slice(0, more).map((projet, i) => (
              <CardRealisation
                animation="fade-up"
                key={i + projet.titre}
                text={projet.lang[lang]}
                title={projet.titre}
                tags={projet.tags}
                img={projet.image}
                git={projet.git}
                website={projet.website}
              />
            ))}
          </div>
        </div>
      </div>
      {more < projets.length && (
        <div className="mx-auto z-50">
          <button
            onClick={() => setMore((prev) => prev + 2)}
            className="text-xl font-semibold cursor-pointer rounded-lg p-1 text-blue-1 dark:text-bluedark-12 bg-blue-9 dark:bg-bluedark-9 
            hover:bg-blue-11   hover:dark:bg-blue-11
            "
          >
            {t('more')}
          </button>
        </div>
      )}
    </section>
  );
}

function CardRealisation({ text, title, img, tags, git, animation, website }) {
  const { t } = useTranslation();
  return (
    <div
      data-aos={animation}
      className="flex flex-col gap-6 flex-1  rounded-lg px-4 py-4 backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-40 dark:bg-opacity-40 bg-blue-9 dark:bg-bluedark-9 sdw dark:sdw-dark  "
    >
      <div className="relative w-full h-48 rounded-t-md">
        <img
          className="w-full h-full object-cover object-top rounded-t-md"
          src={img}
          alt={`screenshot of ${title} project`}
          loading="lazy"
          title={title}
        />
        <GitHubLogo
          git={git}
          className="absolute top-2 left-2 h-10 w-10 cursor-pointer bg-whitea-12"
        />
      </div>
      <Flex direction="column" gap="4" justify="between" className="h-full">
        <Flex direction="column" gap="2">
          <div className="flex gap-2 items-baseline">
            <h3 className="text-2xl font-semibold">{title}</h3>
            {website && (
              <a
                aria-label={`redirect to ${title} website`}
                className="hover:underline hover:underline-offset-4 text-sm "
                href={website}
                target="_blank"
                rel="noreferrer"
              >
                {t('visit-website')}
              </a>
            )}
          </div>
          <p className="leading-8 text-lg">{text}</p>
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
  website: PropTypes.string,
};
