# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_04_23_154202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "responses", force: :cascade do |t|
    t.bigint "survey_id"
    t.bigint "question_id"
    t.text "response"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "surveys", force: :cascade do |t|
    t.text "title", null: false
    t.boolean "active"
    t.bigint "respondents", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_surveys_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.text "email", null: false
    t.boolean "admin"
    t.text "short_token"
    t.datetime "short_token_issue_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "blocked"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
