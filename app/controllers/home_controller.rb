class HomeController < ApplicationController
  def index; end

  def dummy
    redirect_to :root
  end
end
