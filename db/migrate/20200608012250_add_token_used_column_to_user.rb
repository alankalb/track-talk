class AddTokenUsedColumnToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :reset_token_used, :boolean, default: false
  end
end
