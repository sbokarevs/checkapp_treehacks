import { NextApiRequest, NextApiResponse } from 'next';
import { Hospital } from '.prisma/client';
import prisma from '../../../lib/prisma';

const images = [
  'https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/basic-hero/hero/usnews-2x/us-news-2019-2020-2x.jpg',
  'https://static01.nyt.com/images/2021/07/31/world/31virus-briefing-san-francisco-hospital-outbreaks/31virus-briefing-san-francisco-hospital-outbreaks-mediumSquareAt3X.jpg',
  'https://s.hdnux.com/photos/73/22/26/15541686/10/1200x0.jpg',
  'https://chinesehospital-sf.org/wp-content/uploads/2020/12/SAN-FRANCISCO-CHINESE-HOSPITAL-01_1.jpg',
  'https://www.sutterhealth.org/images/ways-to-give/philanthropy/cpmc/van-ness-campus-exterior-613x345.jpg',
  'https://www.beckershospitalreview.com/images/2015-images/10/50%20Greenest%20Hospitals/ucsf-benioff.jpg',
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hospital[]>
) {
  const lat = req.query.lat as string;
  const lng = req.query.lng as string;

/*  const geocoder = NodeGeocoder({
    provider: 'google',
    apiKey: 'AIzaSyAP5NxTzwRf7iV8EzZGbaeyz8othAWyWf8'
  });
  const data = await geocoder.reverse({ lat: +lat, lon: +lng });

  // @ts-ignore
  const state = data[0].administrativeLevels?.level1short || 'CA';*/

  const koef  = 2;

  const hospitals = await prisma.hospital.findMany({
    where: {
      latitude : {
        gte: +lat - koef,
        lte: +lat + koef
      },
      longitude:{
        gte: +lng - koef,
        lte: +lng + koef
      }
    },
    orderBy:{
      latitude: 'asc',
    }
  });

  hospitals.forEach(item => {
    if(!item.image){
      item.image = images[Math.floor(Math.random() * images.length)];
    }
  });

  //const query = await prisma.$queryRaw<{providerNumber: string}[]>`SELECT "providerNumber" FROM "Hospital" WHERE ST_DWithin(ST_MakePoint(longitude, latitude), ST_MakePoint(${+lng}, ${+lat})::geography,  3000)`;
  // console.log(query.length)
  // const hospitals = await prisma.hospital.findMany({
  //   where: {
  //     providerNumber: {
  //       in: query.map(item => item.providerNumber)
  //     }
  //   }
  // });

  res.status(200).json(hospitals);
}