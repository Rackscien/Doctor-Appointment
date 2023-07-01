const express = require('express');
const { loginController, 
    registerController, 
    authController, 
    applyDoctorController, 
    getAllNotificationController,
     deleteAllNotificationController, 
     userAppointmentsController, 
     bookeAppointmnetController,
     bookingAvailabilityController,
     getAllDoctorsController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');


//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post('/login', loginController);

//REGISTER || POST
router.post('/register', registerController)

//Auth || POST
router.post('/getUserData', authMiddleware , authController);
//Apply Doctor || POST
router.post('/apply-doctor', authMiddleware , applyDoctorController);

//Notification || POST
router.post('/get-all-notification', authMiddleware , getAllNotificationController);
//DELETE Notification || POST
router.post('/delete-all-notification', authMiddleware , deleteAllNotificationController);


//Get all doc
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

module.exports = router