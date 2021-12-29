class Api::V1::TasksController < ApplicationController
  skip_forgery_protection
  def index
    @all_tasks= Task.all
    render json: @all_tasks
  end

  def create
  end

  def show
  end

  def destroy
    @task_to_remove=Task.find(params[:id])
    @task_to_remove.destroy
     render json: { message: 'Task deleted' }

  end
end
