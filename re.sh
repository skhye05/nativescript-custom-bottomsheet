
#!/bin/sh

git filter-branch --env-filter '
CORRECT_NAME="skhye05"
CORRECT_EMAIL="mayunga.j@gmail.com"
if [ "$GIT_COMMITTER_NAME" = "Costa Caravotas" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags