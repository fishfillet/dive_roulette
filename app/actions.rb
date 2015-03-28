# Homepage (Root path)
require 'google_places'
require 'sinatra/json'
require 'pry'

get '/' do
  erb :index
end

post '/selection' do
  @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  @meal = params[:meal].to_s
  @danger = params[:danger].to_i
  @radius = params[:radius].to_i

  # @spots = @client.spots(49.282130099999996, -123.10830340000001, :types => @meal)

  # json @spots
  # json :myObj => @meal

  request.body.read
  puts @meal

end