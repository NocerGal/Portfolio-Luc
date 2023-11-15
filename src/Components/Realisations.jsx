import { Badge } from '@radix-ui/themes';
import { ReactLogo, TypeScriptLogo } from '../assets/react';
import PROJET from '../assets/Kasa.webp';

export default function Realisations() {
  return (
    <section className="mt-10">
      <div className="flex gap-6 flex-col relative px-8 max-w-7xl mx-auto">
        <h2>Qui suis-je?</h2>
        <div>
          <h3>Technologies maitrisées</h3>
          <div className="flex gap-6">
            <Badge className="dark:bg-bluedark-10 bg-opacity-0 text-blue-12 gap-2">
              <ReactLogo className={'h-6 fill-blue-12 dark:fill-bluedark-12'} />
              <p className="text-blue-12 dark:text-bluedark-12 text-lg">
                React
              </p>
            </Badge>
            <Badge className="dark:bg-bluedark-10 bg-opacity-0 text-blue-12 gap-2">
              <TypeScriptLogo
                classNameBg="dark:bg-bluedark-9"
                classNameText="dark:text-bluedark-12"
              />
              <p className="text-blue-12 dark:text-bluedark-12 text-lg">
                TypeScript
              </p>
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-col relative px-8 max-w-7xl mx-auto">
        <h3>Réalisations</h3>
        <div className="flex flex-wrap justify-start gap-4">
          <CardRealisation />
          <CardRealisation />
          <CardRealisation />
          <CardRealisation />
        </div>
      </div>
    </section>
  );
}

function CardRealisation() {
  return (
    <div className="flex flex-col flex-1 min-w-[400px] rounded-lg px-4 py-4 backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-40 dark:bg-opacity-40 bg-blue-9 dark:bg-bluedark-9  shadow-md shadow-blue-7 dark:shadow-blue-7">
      <img
        className="h-32 w-full object-cover rounded-t-md"
        src={PROJET}
        alt="projet"
      />
      <div>
        <p>Projet visant à créer un app comme Uber Eat</p>
      </div>
      <div className="flex flex-wrap gap-3 ">
        <Badge className="dark:bg-bluedark-10 bg-opacity-0 text-blue-12 gap-2">
          <ReactLogo className={'h-6 fill-blue-12 dark:fill-bluedark-12'} />
          <p className="text-blue-12 dark:text-bluedark-12 text-lg">React</p>
        </Badge>
        <Badge className="dark:bg-bluedark-10 bg-opacity-0 text-blue-12 gap-2">
          <ReactLogo className={'h-6 fill-blue-12 dark:fill-bluedark-12'} />
          <p className="text-blue-12 dark:text-bluedark-12 text-lg">React</p>
        </Badge>
      </div>
    </div>
  );
}
