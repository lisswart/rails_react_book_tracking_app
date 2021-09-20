puts "seeding users..."

5.times do User.create!(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  username: Faker::Twitter.unique.screen_name,
  email: Faker::Internet.unique.email,
  password_digest: Faker::Internet.unique.password
)
end

# # Book.destroy_all

puts "seeding books..."

50.times do Book.create!(
  title: Faker::Book.title,
  author: Faker::Name.name,
  description: Faker::Lorem.paragraph(sentence_count: 20),
  )
end

puts "seeding book_users..."

50.times do BookUser.create!(
  book_id: rand(1..50),
  user_id: rand(1..5),
  read_status: ["Not Begun", "In Progress", "Completed", "Abandoned"].sample,
  is_notes_added: false
  )
end