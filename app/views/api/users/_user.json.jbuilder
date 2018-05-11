# partial uses 'user' from 'user: @user' reference in 'show.json...'
json.extract! user, :id, :username, :updated_at
# easier just to pass 'updated_at' for time check instead of checking them anwyays elsewhere to see which happened later because updated == created || is always >, so. Yeah. This explanation feels unnecessary. Anyways - posterity I guess.
