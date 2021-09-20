class Api::BooksController < ApplicationController
  def index
    books = Book.all
    render json: books, include: :users
  end

  def create
    book = Book.create(title: params[:title], author: params[:author])
    user = User.find(session[:user_id])
    book_user = BookUser.create(book_user_params)
    render json: book, status: :created
  end

  def show
    book = Book.find(params[:id])
    render json: book
  end

  def update
    book = Book.find(params[:id])
    user = User.find(session[:id])
    book_user = BookUser.find_by(user_id: user.id, book_id: book.id)
    book_user.update(book_user_params)
    render json: book_user
  end

  def destroy
    book = Book.find(params[:id])
    user = User.find(session[:user_id])
    book_user = BookUser.find_by(user_id: user.id, book_id: book.id)
    book_user.destroy
    head :no_content
  end

  private
  
  def book_user_params
    params.permit(:read_status, :description, :notes, :review, :tag, :is_notes_added)
  end
end
