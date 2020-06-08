class ChangeResetTokenName < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :reset_token, :reset_token_digest
  end
end
