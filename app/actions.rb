# Homepage (Root path)
require 'google_places'

get '/' do
  # @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  # @spots = @client.spots(49.282130099999996, -123.10830340000001, :types => 'restaurant')

  erb :index
end