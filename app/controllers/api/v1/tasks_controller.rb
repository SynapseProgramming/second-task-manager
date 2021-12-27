class Api::V1::TasksController < ApplicationController
  def index
    all_tasks= Task.all
    render json: all_tasks
  end

  def create
  end

  def show
  end

  def destroy
  end
end
