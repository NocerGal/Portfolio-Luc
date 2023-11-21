import { Badge, Flex } from '@radix-ui/themes';
import LUC_PICTURE from '../assets/photoLuc.jpeg';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { ReactLogo, ReduxLogo, TypeScriptLogo } from '../assets/react';
import { useThemeContext } from '../Context/ThemeContext';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

export default function Presentation() {
  const { theme } = useThemeContext();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="h-[88vh]">
      <div className="h-full flex justify-evenly  max-w-7xl mx-auto px-8">
        <div className="flex flex-col justify-between items-center md:flex-row gap-16 lg:gap-4 my-auto w-full">
          <div className="flex flex-col justify-around">
            <div className="flex flex-col gap-4 sm:black leading-tight sm:leading-8 text-center md:text-start">
              <h1 className="relative name--light dark:name--dark text-[11vw] sm:text-7xl font-extrabold tracking-wider">
                {t('presentation-name')}
              </h1>
              <p className="relative name text-4xl font-medium text-blue-11 dark:text-bluedark-12 ">
                {t('presentation-job')}
              </p>
            </div>

            <Flex className="mt-5" direction="column" gap="6">
              <div className="text-center md:text-start">
                <p className="relative name text-2xl font-medium text-blue-11 dark:text-bluedark-12 leading-relaxed">
                  {t('presentation-first-sentence')}
                </p>
                <p className="relative name text-2xl font-medium text-blue-11 dark:text-bluedark-12 leading-relaxed">
                  {t('presentation-second-sentence')}
                </p>
              </div>
              <Flex
                className="items-center md:items-start"
                direction="column"
                gap="5"
              >
                <Flex className="z-20" gap="6">
                  <ReactLogo
                    className={'h-20 fill-blue-12 dark:fill-[#C2E6FF]'}
                  />
                  <ReduxLogo
                    color={theme == true ? '#C2E6FF' : '#113264'}
                    classSize="h-20 w-20"
                  />
                  <TypeScriptLogo
                    classNameBg={theme == true ? '#C2E6FF' : '#113264'}
                    classNameText={theme == true ? '#0D1520' : '#FBFDFF'}
                    classSize="h-20 w-20"
                  />
                </Flex>
                <Flex
                  gap="4"
                  wrap="wrap"
                  className="justify-center md:justify-start"
                >
                  <a
                    aria-label="redirect to Luc's GitHub"
                    href="https://github.com/NocerGal"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="link to Luc's GitHub"
                  >
                    <Badge
                      className="badge"
                      variant="solid"
                      color="blue"
                      radius="medium"
                      size="2"
                    >
                      <GitHubLogoIcon />
                      GitHub
                    </Badge>
                  </a>
                  <a
                    aria-label="redirect to Luc's LinkedIn"
                    href="https://www.linkedin.com/in/luc-schenherr-810205140/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="link to Luc's LinkedIn"
                  >
                    <Badge
                      className="badge"
                      variant="solid"
                      color="blue"
                      radius="medium"
                      size="2"
                    >
                      <LinkedInLogoIcon />
                      LinkedIn
                    </Badge>
                  </a>
                  <a
                    aria-label="redirect to Luc's Malt"
                    href="https://www.malt.fr/profile/lucschenherr1"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="link to Luc's Malt"
                  >
                    <Badge
                      className="badge"
                      variant="solid"
                      color="blue"
                      radius="medium"
                      size="2"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Malt"
                        role="img"
                        viewBox="0 0 512 512"
                      >
                        <rect
                          width="512"
                          height="512"
                          rx="15%"
                          fill="#ffffff"
                        />
                        <path
                          fill="#FC5656"
                          d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"
                        />
                      </svg>
                      Malt
                    </Badge>
                  </a>
                  <a
                    aria-label="redirect to send an email to Luc"
                    href="mailto:luc.schenherr.dev@gmail.com"
                    title="link to send a mail to Luc"
                  >
                    <Badge
                      className="badge"
                      variant="solid"
                      color="blue"
                      radius="medium"
                      size="2"
                    >
                      <EnvelopeClosedIcon />
                      luc.schenherr.dev@gmail.com
                    </Badge>
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </div>
          <div className="h-fit">
            <img
              className="relative h-96 rounded-md object-contain"
              src={LUC_PICTURE}
              alt="Photo de Luc Schenherr"
              title="Schenehrr Luc"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
