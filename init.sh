read -p "Setup will take a hot minute. Begin? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # do dangerous stuff
    npm install && bundle install && rails db:setup
fi
