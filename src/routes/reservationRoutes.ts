import { Router } from 'express';
import { getReservations, getReservationById, createOrUpdateReservation } from '../controllers/reservationController';

const router = Router();

router.get('/reservations', getReservations);
router.get('/reservations/:id', getReservationById);
router.post('/reservations', createOrUpdateReservation);

export default router;
