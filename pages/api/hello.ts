// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import NodeGeocoder from 'node-geocoder';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {

  const skip = req.query.skip as string;
  const take = req.query.take as string;
  const hospitals = await prisma.hospital.findMany({
    skip: +skip,
    take: +take,
    where: {
      latitude: {
        equals: 1
      },
      longitude: {
        equals: 1
      },
    }
  });

  const geocoder = NodeGeocoder({
    provider: 'google',
    apiKey: 'AIzaSyAP5NxTzwRf7iV8EzZGbaeyz8othAWyWf8'
  });

  const decoded = await geocoder.batchGeocode(hospitals.map(hospital => `${hospital.address} ${hospital.city} ${hospital.state} ${hospital.zipCode}`));

  await Promise.all(decoded.map(async (item, index) => {
    await prisma.hospital.update({
      where: {
        providerNumber: hospitals[index].providerNumber
      },
      data: {
        latitude: item.value[0]?.latitude || 2.0,
        longitude: item.value[0]?.longitude || 2.0,
      }
    });
  }));

  res.status(200).json(decoded)
}
