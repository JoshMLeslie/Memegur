class Vote < ApplicationRecord
  validate :unique_user, on: :create
  belongs_to :votable, polymorphic: true

  def unique_user
    # find if a vote exists based on:
    # user id, vote_type, and vote_id
    # return an inverted bool based on the result.
    vote =
      Vote.find_by(
          user_id: self.user_id,
          votable_type: self.votable_type,
          votable_id: self.votable_id
        )

        # debugger
      if vote # if it exists
        if vote.vote == (-1*(self.vote))
          # if vote value is the inverse of the new vote
          vote.delete # delete the old vote => #create => create new vote
          return true
        else
          errors.add(:voting, "can't vote twice!")
        end
      else
        return true
      end
  end
end
