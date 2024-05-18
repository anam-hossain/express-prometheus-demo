import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const filePath = path.join(__dirname, '../data/reservations.json');

interface Reservation {
  id: string;
  name: string;
  date: string;
  room: string;
}

export const getReservations = async (): Promise<Reservation[]> => {
  const data = await fs.promises.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

export const getReservationById = async (id: string): Promise<Reservation | null> => {
  const reservations = await getReservations();
  return reservations.find(reservation => reservation.id === id) || null;
};

export const createOrUpdateReservation = async (reservation: Reservation): Promise<Reservation> => {
  const reservations = await getReservations();
  const index = reservations.findIndex(r => r.id === reservation.id);
  if (index !== -1) {
    reservations[index] = reservation;
  } else {
    reservation.id = uuidv4();
    reservations.push(reservation);
  }
  await fs.promises.writeFile(filePath, JSON.stringify(reservations, null, 2));
  return reservation;
};
