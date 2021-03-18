# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

 Physician.create(name: Faker::Name.name)
 Physician.create(name: Faker::Name.name)
 Physician.create(name: Faker::Name.name)
 
 # Physicians could also be a homework with a grade
 Physician.create(name: Faker::Name.name)
 Physician.create(name: Faker::Name.name)

5.times do
 patient = Patient.create(name: Faker::Name.name)
 
# each patient will have a grade for each physician
 6.times do |i|
  Appointment.create(patient_id: patient.id, physician_id: i, appointment_date: Faker::Date.forward(days: 32))
 end
end

puts "seeded physician: #{Physician.all.length}"
puts "seeded patient: #{Patient.all.length}"
puts "GRADE appointment: #{Appointment.all.length}"

# grab users physician
puts "seeded physician: #{Physician.first.name}"

# grab users firts physician grades
puts "seeded patient: #{Patient.first.name}"
