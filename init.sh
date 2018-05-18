read -p "Setup will take a hot minute. This folder must be on the desktop. Begin? Tap 'y' || 'n'" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  bundle install && # install backend dependencies
  rails db:setup &&
  npm install &&

  read -p "Start rails server and webpack? (y/n)" -n 1 -r
    echo    # (optional) move to a new line
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
      echo "starting server and webpack" &&
      osascript -e 'tell application "Terminal" to do script "cd ~/Desktop/ToMemeOrNot && npm run webpack"' &&
      osascript -e 'tell application "Terminal" to do script "cd ~/Desktop/ToMemeOrNot && rails s"' &&
      echo "navigate to localhost:3000 for access"
    fi

  echo "init complete"
fi
