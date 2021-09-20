class Api::UsersController < ApplicationController
  def create
    user = User.create(user_params)
    render json: user, status: :created
  end

  def show
    user = User.find(session[:user_id])
    book_user = BookUser.find_by(user_id: user.id)
    render json: user, include: :books
  end

  private

  def user_params
    params.permit(:firstname, :lastname, :username, :email, :password_digest)
  end
end
