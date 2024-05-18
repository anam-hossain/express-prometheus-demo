import { Request, Response } from 'express';
import * as reservationService from '../services/reservationService';

export const getReservations = async (req: Request, res: Response) => {
  const reservations = await reservationService.getReservations();
  res.json(reservations);
};

export const getReservationById = async (req: Request, res: Response) => {
  const reservation = await reservationService.getReservationById(req.params.id);
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).send('Reservation not found');
  }
};

export const createOrUpdateReservation = async (req: Request, res: Response) => {
  const reservation = await reservationService.createOrUpdateReservation(req.body);
  res.status(201).json(reservation);
};
