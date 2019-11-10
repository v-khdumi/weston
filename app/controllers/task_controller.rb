class TaskController < ApplicationController

  def index
    u = User.find(1);
    tasks = u.tasks.to_ary
    #tasks = [];
    # if current_user?
    #   tasks = current_user.tasks.to_ary
    # else
    # end
    #return tasks.to_json
    render json: tasks;
  end 

  def show
    puts params;
    t = Task.find(params['id']);
    render json: t;
  end

  def update
    t = Task.find(params['id']);
    if t.update(params);
      render json: t;
    else 
      render json t.errors;
    end
  end

  def create
  end

  def destroy
  end
end
