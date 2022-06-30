require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

async function main() {
  await prisma.project.create({
    data: {
      title: "Wild Code School",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "Wild Code School",
      staff: "Theo",
      subsidiary: "Reims",
      slack: "http://slack.potential-octo.com",
      progress: 50,
    },
  });

  await prisma.project.create({
    data: {
      title: "Google",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "Google",
      staff: "Simon",
      subsidiary: "Paris",
      slack: "http://slack.potential-octo.com",
      progress: 50,
    },
  });

  await prisma.project.create({
    data: {
      title: "SCC",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "SCC",
      staff: "Louis",
      subsidiary: "Bordeaux",
      slack: "http://slack.potential-octo.com",
      progress: 70,
    },
  });

  await prisma.project.create({
    data: {
      title: "ATOS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "ATOS",
      staff: "Simon",
      subsidiary: "Paris",
      slack: "http://slack.potential-octo.com",
      progress: 60,
    },
  });

  await prisma.project.create({
    data: {
      title: "ALTEN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "ALTEN",
      staff: "Jaafar",
      subsidiary: "Lyon",
      slack: "http://slack.potential-octo.com",
      progress: 30,
    },
  });

  await prisma.project.create({
    data: {
      title: "AKA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "AKA",
      staff: "Valentin",
      subsidiary: "Bordeaux",
      slack: "http://slack.potential-octo.com",
      progress: 40,
    },
  });

  await prisma.project.create({
    data: {
      title: "TESSI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "TESSI",
      staff: "Qunetin",
      subsidiary: "Paris",
      slack: "http://slack.potential-octo.com",
      progress: 50,
    },
  });

  await prisma.project.create({
    data: {
      title: "SII",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "SII",
      staff: "Alexandra",
      subsidiary: "Lyon",
      slack: "http://slack.potential-octo.com",
      progress: 60,
    },
  });

  await prisma.project.create({
    data: {
      title: "TALAN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "TALAN",
      staff: "Pierre",
      subsidiary: "Paris",
      slack: "http://slack.potential-octo.com",
      progress: 50,
    },
  });

  await prisma.project.create({
    data: {
      title: "VISEO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore, facilis ea suscipit natus repellendus ipsa eos atque, odit, assumenda explicabo recusandae aliquid optio corrupti.",
      client_name: "VISEO",
      staff: "Simon",
      subsidiary: "Bordeaux",
      slack: "http://slack.potential-octo.com",
      progress: 50,
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
