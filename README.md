# README

## To run dev -

```docker run --name heartbeat-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d -v postgres_data:/var/lib/postgresql/data postgres:10-alpine```

```docker run -it --rm --link heartbeat-postgres:postgres postgres:10-alpine psql -h postgres -U postgres```

```./bin/webpack-dev-server```

```bundle exec rails s```

## How it works -

1. User gives email
2. Email sent with link with short term token (only for approved users)
3. With link, JWT issued for 12 hours
4. User fills active survey
5. Admin can create surveys, questions and options, view aggregated responses
6. Admin can add / remove approved users
7. Admin can trigger emails


__Models__:

- User (id, email:text, admin:boolean, token:text, token_issue_datetime:datetime)
- Survey (id, active:boolean, start_date:date, end_date:date)
- Question (id, survey_id, title, description, type, seqeuence_number)
- Option (id, question_id, title)
- Responses (id, user_id, survery_id, question_id, selected_option_id, response:text)
- Approved_Users (emails)

__Rules__:

- Users can only view 1 latest + active survey, view questions and submit responses
- Admin can do everything
