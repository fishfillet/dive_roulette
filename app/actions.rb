# Homepage (Root path)
require 'google_places'
require 'pry'

get '/' do
  @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  @spots = @client.spots(49.282130099999996, -123.10830340000001, :types => )

  erb :index
end

# get '/selection' do
#   @meal = params[:meal].to_s
  
# end