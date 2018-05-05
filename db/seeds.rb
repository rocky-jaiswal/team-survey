# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

s = Survey.find_or_create_by(title: 'Survey wk1', active: true, respondents: [])

if Rails.env.development?
  User.find_or_create_by(email: 'rocky@example.com', admin: true)

  Response.create!([
    { survey_id: s.id, question_id: 2, response: 'Bored / Indifferent' },
    { survey_id: s.id, question_id: 2, response: 'Bored / Indifferent' },
    { survey_id: s.id, question_id: 2, response: 'Bored / Indifferent' },
    { survey_id: s.id, question_id: 2, response: 'Bored / Indifferent' },
    { survey_id: s.id, question_id: 2, response: 'Frightened / Anxious' },
    { survey_id: s.id, question_id: 2, response: 'Frightened / Anxious' },
    { survey_id: s.id, question_id: 2, response: 'Frightened / Anxious' },
    { survey_id: s.id, question_id: 2, response: 'Sad / Disappointed' },
    { survey_id: s.id, question_id: 2, response: 'Angry / Frustrated' },
    { survey_id: s.id, question_id: 2, response: 'Happy / Enthusiastic' },
    { survey_id: s.id, question_id: 2, response: 'Happy / Enthusiastic' },
    { survey_id: s.id, question_id: 2, response: 'Happy / Enthusiastic' },
    { survey_id: s.id, question_id: 2, response: 'Happy / Enthusiastic' },
    { survey_id: s.id, question_id: 2, response: 'Happy / Enthusiastic' },
    { survey_id: s.id, question_id: 2, response: 'Happy / Enthusiastic' },
    { survey_id: s.id, question_id: 2, response: 'Happy / Enthusiastic' },
    { survey_id: s.id, question_id: 3, response: 'I am getting enough sleep' },
    { survey_id: s.id, question_id: 3, response: 'I am getting enough sleep' },
    { survey_id: s.id, question_id: 3, response: 'I am getting enough sleep' },
    { survey_id: s.id, question_id: 3, response: 'Not enough sleep: trouble falling asleep or staying asleep' },
    { survey_id: s.id, question_id: 3, response: 'Not enough sleep: trouble falling asleep or staying asleep' },
    { survey_id: s.id, question_id: 3, response: 'I am not getting enough sleep: Going to bed too late' },
    { survey_id: s.id, question_id: 4, response: '1' },
    { survey_id: s.id, question_id: 4, response: '1' },
    { survey_id: s.id, question_id: 4, response: '1' },
    { survey_id: s.id, question_id: 4, response: '2' },
    { survey_id: s.id, question_id: 4, response: '2' },
    { survey_id: s.id, question_id: 4, response: '3' },
    { survey_id: s.id, question_id: 4, response: '4' },
    { survey_id: s.id, question_id: 4, response: '5' },
    { survey_id: s.id, question_id: 5, response: 'Yes, my work life balance has been sustainable' },
    { survey_id: s.id, question_id: 5, response: 'Yes, my work life balance has been sustainable' },
    { survey_id: s.id, question_id: 5, response: 'Yes, my work life balance has been sustainable' },
    { survey_id: s.id, question_id: 5, response: 'It\'s sustainable right now but not in the long run' },
    { survey_id: s.id, question_id: 5, response: 'It\'s sustainable right now but not in the long run' },
    { survey_id: s.id, question_id: 5, response: 'No, it is not sustainable' },
    { survey_id: s.id, question_id: 5, response: 'No, it is not sustainable' },
    { survey_id: s.id, question_id: 5, response: '5' },
    { survey_id: s.id, question_id: 6, response: '1' },
    { survey_id: s.id, question_id: 6, response: '1' },
    { survey_id: s.id, question_id: 6, response: '1' },
    { survey_id: s.id, question_id: 6, response: '2' },
    { survey_id: s.id, question_id: 6, response: '2' },
    { survey_id: s.id, question_id: 6, response: '3' },
    { survey_id: s.id, question_id: 6, response: '4' },
    { survey_id: s.id, question_id: 6, response: '5' },
    { survey_id: s.id, question_id: 7, response: '1' },
    { survey_id: s.id, question_id: 7, response: '1' },
    { survey_id: s.id, question_id: 7, response: '1' },
    { survey_id: s.id, question_id: 7, response: '2' },
    { survey_id: s.id, question_id: 7, response: '2' },
    { survey_id: s.id, question_id: 7, response: '3' },
    { survey_id: s.id, question_id: 7, response: '4' },
    { survey_id: s.id, question_id: 7, response: '5' },
    { survey_id: s.id, question_id: 8, response: '1' },
    { survey_id: s.id, question_id: 8, response: '1' },
    { survey_id: s.id, question_id: 8, response: '1' },
    { survey_id: s.id, question_id: 8, response: '2' },
    { survey_id: s.id, question_id: 8, response: '2' },
    { survey_id: s.id, question_id: 8, response: '3' },
    { survey_id: s.id, question_id: 8, response: '4' },
    { survey_id: s.id, question_id: 8, response: '5' },
    { survey_id: s.id, question_id: 10, response: 'bar' },
    { survey_id: s.id, question_id: 10, response: 'baz' },
    { survey_id: s.id, question_id: 10, response: 'bat' },
    { survey_id: s.id, question_id: 10, response: 'baq' },
    { survey_id: s.id, question_id: 10, response: 'bay' },
    { survey_id: s.id, question_id: 10, response: 'ban' },
    { survey_id: s.id, question_id: 10, response: 'bac' },
    { survey_id: s.id, question_id: 10, response: 'bax' },
    { survey_id: s.id, question_id: 11, response: 'foe' },
    { survey_id: s.id, question_id: 11, response: 'fox' },
    { survey_id: s.id, question_id: 11, response: 'fol' },
    { survey_id: s.id, question_id: 11, response: 'foz' },
    { survey_id: s.id, question_id: 11, response: 'foi' },
    { survey_id: s.id, question_id: 11, response: 'fom' },
    { survey_id: s.id, question_id: 11, response: 'fon' },
    { survey_id: s.id, question_id: 11, response: 'foq' }
  ])
end
