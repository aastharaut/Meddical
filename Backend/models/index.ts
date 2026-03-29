import User from "./User";
import Doctor from "./Doctor";
import Service from "./Service";
import Appointment from "./Appointment";
import DoctorService from "./DoctorService";
import DoctorSchedule from "./DoctorSchedule";
import TimeSlot from "./TimeSlot";

User.hasMany(Appointment, { foreignKey: "patient_id" });
Appointment.belongsTo(User, { foreignKey: "patient_id" });

Doctor.hasMany(Appointment, { foreignKey: "doctor_id" });
Appointment.belongsTo(Doctor, { foreignKey: "doctor_id" });

Doctor.belongsToMany(Service, {
  through: DoctorService,
  foreignKey: "doctor_id",
});

Service.belongsToMany(Doctor, {
  through: DoctorService,
  foreignKey: "service_id",
});

Doctor.hasMany(DoctorSchedule, { foreignKey: "doctor_id" });
DoctorSchedule.belongsTo(Doctor, { foreignKey: "doctor_id" });

TimeSlot.hasMany(Appointment, { foreignKey: "time_slot_id" });
Appointment.belongsTo(TimeSlot, { foreignKey: "time_slot_id" });

export {
  User,
  Doctor,
  Service,
  Appointment,
  DoctorService,
  DoctorSchedule,
  TimeSlot,
};
