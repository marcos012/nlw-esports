import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from '../src/utils/convert-hour-string-to-minutes';
const prisma = new PrismaClient()

async function main() {
  const games = [
    {
      title: "League of Legends",
      bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    },
    {
      title: "Fortnite ",
      bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
    },
    {
      title: "World of Warcraft ",
      bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg",
    },
    {
      title: "Valorant",
      bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    },
    {
      title: "Grand Theft Auto V",
      bannerUrl:
        "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
    },
    {
      title: "Elden Ring",
      bannerUrl:
        "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
    },
    {
      title: "CS:GO",
      bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
    }
  ];


  const inserts = games.map(game => prisma.game.create({
    data: {
      title: game.title,
      bannerUrl: game.bannerUrl,
      ads: {
        create: [
          {
            name: `El Loko de ${game.title}`,
            yearsPlaying: 10,
            discord: `${game.title} #3433`,
            weekDays: "0, 5, 6",
            hourStart: convertHourStringToMinutes("18:00"),
            hourEnd: convertHourStringToMinutes("22:00"),
            useVoiceChannel: true,
          },
        ],
      },
    },
  }));

  await Promise.all(inserts);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })