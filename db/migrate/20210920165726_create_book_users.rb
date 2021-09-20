class CreateBookUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :book_users do |t|
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true
      t.string :read_status
      t.boolean :is_notes_added
      t.text :notes
      t.text :review

      t.timestamps
    end
  end
end
