# frozen_string_literal: true

module Api
  module V1
    class TasksController < ApplicationController
      # skip_forgery_protection
      def index
        @all_tasks = Task.all
        render json: @all_tasks
      end

      def create
        @new_task = Task.create!(check_params)
        if @new_task
          render json: @new_task
        else
          render json: @new_task.errors
        end
      end

      def update
        @task_to_update = Task.find_by_id(params[:id])
        @task_to_update.update!(check_params)
        render json: { message: 'Task updated' }
      end

      def show
        @tasks_count = Task.count
        render json: { task_count: @tasks_count }
      end

      def destroy
        @task_to_remove = Task.find(params[:id])
        @task_to_remove.destroy
        render json: { message: 'Task deleted' }
      end

      private

      def check_params
        params.permit(:task, :priority, :description)
      end
    end
  end
end
