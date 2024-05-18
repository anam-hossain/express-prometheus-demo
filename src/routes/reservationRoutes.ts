import { Router } from 'express';
import { getReservations, getReservationById, createOrUpdateReservation } from '../controllers/reservationController';

const router = Router();

router.get('/', getReservations);
router.get('/:id', getReservationById);
router.post('/', createOrUpdateReservation);

export default router;
