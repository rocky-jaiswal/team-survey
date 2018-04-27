# README

## To run dev -

```docker-compose up --build```

TODO: Add instructions for fresh installation and production setup.

## How it works -

1. User gives email
2. Email sent with link which includes a short term login token (only for approved users)
3. With link cliked, JWT is issued for 12 hours
4. User fills active survey, one question at a time
5. Admin can create surveys, questions and options (currently in YAML), view aggregated responses
6. Admin can add / remove approved users
7. Admin can trigger emails (e.g. invitations)

__Models__:

- User (id, email:text, admin:boolean, short_token:text, short_token_issue_datetime:datetime)
- Survey (id, active:boolean, start_date:date, end_date:date)
- Question (id, survey_id, title, description, type, seqeuence, options:array[string])
- Responses (id, user_id, survery_id, question_id, response:text)

__Rules__:

- Users can only view 1 latest + active survey, view questions and submit responses
- Admin can do everything
