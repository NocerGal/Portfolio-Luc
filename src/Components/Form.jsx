import * as Form from '@radix-ui/react-form';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Badge, Flex } from '@radix-ui/themes';

export default function Contact() {
  return (
    <section className="bg-blue-2 dark:bg-bluedark-2">
      <div className="relative px-8 max-w-5xl mx-auto">
        <Flex
          direction="column"
          justify="between"
          gap="6"
          className="flex justify-between items-center md:items-stretch md:flex-row md:w-3/4"
        >
          <div className="flex flex-col gap-4 w-4/6">
            <h2 className="text-center text-3xl font-semibold text-blue-12 dark:text-bluedark-12">
              Contact
            </h2>
            <Form.Root className="flex flex-col gap-3">
              <Form.Field className="label--input" name="firstName">
                <div className="flex">
                  <Form.Label className="FormLabel">Prénom</Form.Label>
                  <Form.Message className="firstName" match="valueMissing">
                    Entrer votre prénom
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input className="w-full input" type="email" required />
                </Form.Control>
              </Form.Field>
              <Form.Field className="label--input" name="lastName">
                <div className="flex">
                  <Form.Label className="FormLabel">Nom</Form.Label>
                  <Form.Message className="lastName" match="valueMissing">
                    Entrer votre nom
                  </Form.Message>
                </div>
                <Form.Control asChild className="w-full">
                  <input className="input" type="email" required />
                </Form.Control>
              </Form.Field>
              <Form.Field className="label--input" name="email">
                <div className="flex">
                  <Form.Label className="mail">Email</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Enter your email
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
                    Provide a valid email
                  </Form.Message>
                </div>
                <Form.Control className="w-full" asChild>
                  <input className="input" type="email" required />
                </Form.Control>
              </Form.Field>
              <Form.Field className="label--input" name="message">
                <div>
                  <Form.Label className="FormMessage">Votre message</Form.Label>
                  <Form.Message className="w-full" match="valueMissing">
                    Indiquer votre question
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <textarea
                    className="w-full resize-none input"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </Form.Control>
              </Form.Field>
              <Form.Submit asChild>
                <button className="max-w-[125px] bg-blue-9 dark:bg-bluedark-9 rounded-xl px-4 py-1 hover:bg-blue-10 dark:hover:bg-bluedark-8 text-blue-1 mx-auto md:mx-none">
                  Envoyer
                </button>
              </Form.Submit>
            </Form.Root>
          </div>
          <div className="hidden md:flex items-center">
            <div className=" border-l-2 border-solid border-blue-7 dark:border-bluedark-7  h-2/3"></div>
          </div>
          <div className=" md:w-1/6 flex items-center">
            <Flex direction="column" gap="5" className="w-fit">
              <a
                href="https://github.com/NocerGal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="badge w-full flex justify-center"
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
                href="https://www.linkedin.com/in/luc-schenherr-810205140/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="badge w-full flex justify-center"
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
                href="https://www.malt.fr/profile/lucschenherr1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  className="badge w-full flex justify-center"
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
                    <rect width="512" height="512" rx="15%" fill="#ffffff" />
                    <path
                      fill="#FC5656"
                      d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"
                    />
                  </svg>
                  Malt
                </Badge>
              </a>
              <div>
                <Badge
                  className="badge"
                  variant="solid"
                  color="blue"
                  radius="medium"
                  size="2"
                >
                  luc.schenherr.dev@gmail.com
                </Badge>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    </section>
  );
}
