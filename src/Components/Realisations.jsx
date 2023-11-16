import { Badge, Flex } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import projets from '../data/Projets.json';

export default function Realisations() {
  return (
    <section id="realisations" className="flex gap-10 flex-col pt-64">
      <div className="flex gap-6 flex-col relative px-8 max-w-7xl mx-auto">
        <h2>Réalisations</h2>
      </div>

      <div className=" relative px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap md:grid md:grid-cols-2 md:gap-8 justify-start gap-8">
          {projets.map((projet, i) => (
            <CardRealisation
              key={i + projet.texte}
              text={projet.texte}
              title={projet.titre}
              tags={projet.tags}
              img={projet.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardRealisation({ text, title, img, tags }) {
  return (
    <div className="flex flex-col gap-6 flex-1  rounded-lg px-4 py-4 backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-40 dark:bg-opacity-40 bg-blue-9 dark:bg-bluedark-9 sdw dark:sdw-dark  ">
      <img
        className="w-full h-48 object-cover rounded-t-md"
        src={img}
        alt="projet"
        loading="lazy"
        title={title}
      />
      <Flex direction="column" gap="4" justify="between" className="h-full">
        <Flex direction="column" gap="2">
          <h4 className="text-2xl font-semibold">{title}</h4>
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
};
